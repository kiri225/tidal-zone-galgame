from pathlib import Path
import os

ENV = Path('.env')
for line in ENV.read_text(encoding='utf-8').splitlines():
    line = line.strip()
    if not line or line.startswith('#') or '=' not in line:
        continue
    k, v = line.split('=', 1)
    os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))

k = os.environ.get('OPENAI_API_KEY', '')
print('KEY_LEN', len(k))
print('KEY_OK', len(k) > 20 and 'your-key' not in k.lower())
print('BASE', os.environ.get('OPENAI_BASE_URL'))
print('MODEL', os.environ.get('OPENAI_IMAGE_MODEL'))
