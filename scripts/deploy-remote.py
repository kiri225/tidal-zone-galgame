#!/usr/bin/env python3
"""Build artifact upload + restart tidal-zone nginx container."""

from __future__ import annotations

import io
import os
import tarfile
import time
from pathlib import Path

import paramiko

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
NGINX = ROOT / "deploy" / "nginx.conf"

HOST = os.environ.get("DEPLOY_HOST", "111.230.39.145")
PORT = int(os.environ.get("DEPLOY_PORT", "22"))
USER = os.environ.get("DEPLOY_USER", "root")
PASSWORD = os.environ.get("DEPLOY_PASSWORD", "")
REMOTE_DIR = "/opt/tidal-zone"


def make_tar() -> bytes:
    buf = io.BytesIO()
    with tarfile.open(fileobj=buf, mode="w:gz") as tar:
        tar.add(DIST, arcname="dist")
        if NGINX.exists():
            tar.add(NGINX, arcname="nginx.conf")
    return buf.getvalue()


def run(client: paramiko.SSHClient, cmd: str, check: bool = True) -> str:
    print(f"$ {cmd}")
    _, stdout, stderr = client.exec_command(cmd)
    out = stdout.read().decode("utf-8", "replace")
    err = stderr.read().decode("utf-8", "replace")
    code = stdout.channel.recv_exit_status()
    if out.strip():
        print(out.strip()[:2000])
    if err.strip():
        print(err.strip()[:1000])
    if check and code != 0:
        raise RuntimeError(f"cmd failed ({code}): {cmd}\n{err}")
    return out


def main() -> None:
    if not DIST.exists() or not (DIST / "index.html").exists():
        raise SystemExit("dist/ missing; run vite build first")
    if not PASSWORD:
        raise SystemExit("DEPLOY_PASSWORD required")

    payload = make_tar()
    print(f"tar size: {len(payload)} bytes")

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, port=PORT, username=USER, password=PASSWORD, timeout=45)

    sftp = client.open_sftp()
    remote_tar = f"{REMOTE_DIR}/dist-upload.tgz"
    run(client, f"mkdir -p {REMOTE_DIR}")
    print(f"upload -> {remote_tar}")
    # putfo 比单次 write 更稳，避免大包尾部损坏
    with sftp.file(remote_tar, "wb") as rf:
        rf.set_pipelined(True)
        bio = io.BytesIO(payload)
        while True:
            chunk = bio.read(1024 * 1024)
            if not chunk:
                break
            rf.write(chunk)
        rf.flush()
    remote_size = sftp.stat(remote_tar).st_size
    sftp.close()
    if remote_size != len(payload):
        raise RuntimeError(f"upload size mismatch: local={len(payload)} remote={remote_size}")
    print(f"upload ok: {remote_size} bytes")

    # backup + replace dist
    stamp = time.strftime("%Y%m%d-%H%M%S")
    run(
        client,
        f"set -e; "
        f"cd {REMOTE_DIR}; "
        f"if [ -d dist ]; then mv dist dist.bak-{stamp}; fi; "
        f"gzip -t dist-upload.tgz; "
        f"tar -xzf dist-upload.tgz; "
        f"rm -f dist-upload.tgz; "
        f"test -f dist/index.html; "
        f"ls -la dist | head; "
        f"du -sh dist",
    )

    # restart container (keep same mounts/ports)
    run(client, "docker start tidal-zone", check=False)
    run(client, "docker restart tidal-zone", check=False)
    time.sleep(1.5)
    run(client, "docker ps --filter name=tidal-zone --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'")
    run(
        client,
        "curl -sI -H 'Host: galgame.kiri225.cn' http://127.0.0.1:9091/ | head -15",
        check=False,
    )
    # keep only latest backup
    run(
        client,
        f"cd {REMOTE_DIR}; ls -dt dist.bak-* 2>/dev/null | tail -n +3 | xargs -r rm -rf",
        check=False,
    )

    client.close()
    print("DEPLOY OK")


if __name__ == "__main__":
    main()
