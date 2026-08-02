const API_BASE = import.meta.env.VITE_API_BASE ?? '/api'

export class ApiError extends Error {
  status: number

  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

export async function apiFetch<T>(
  path: string,
  opts: RequestInit & { token?: string | null } = {},
): Promise<T> {
  const headers = new Headers(opts.headers)
  if (!headers.has('Content-Type') && opts.body) {
    headers.set('Content-Type', 'application/json')
  }
  if (opts.token) {
    headers.set('Authorization', `Bearer ${opts.token}`)
  }

  let res: Response
  try {
    res = await fetch(`${API_BASE}${path}`, {
      ...opts,
      headers,
    })
  } catch {
    throw new ApiError(0, '无法连接服务器，请确认后端已启动')
  }

  if (!res.ok) {
    let message = `请求失败 (${res.status})`
    try {
      const data = (await res.json()) as { message?: string }
      if (data.message) message = data.message
    } catch {
      /* ignore */
    }
    throw new ApiError(res.status, message)
  }

  if (res.status === 204) return undefined as T
  const text = await res.text()
  if (!text) return undefined as T
  return JSON.parse(text) as T
}
