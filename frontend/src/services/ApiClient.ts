export class ApiClient {
  private baseUrl: string
  private getToken: () => string | null

  constructor(baseUrl = '', getToken?: () => string | null) {
    this.baseUrl = baseUrl
    this.getToken = getToken || (() => null)
  }

  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    const token = this.getToken()
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    }

    const response = await this.withRetry(() =>
      fetch(`${this.baseUrl}${path}`, {
        ...options,
        headers,
      }),
    )

    if (!response.ok) {
      const text = await response.text()
      let error = `HTTP ${response.status}`
      try {
        const json = JSON.parse(text)
        if (json.message) error = json.message
      } catch {}
      throw new Error(error)
    }

    return response.status === 204 ? ({} as T) : response.json()
  }

  get<T>(url: string) {
    return this.request<T>(url, { method: 'GET' })
  }
  post<T>(url: string, body: any) {
    return this.request<T>(url, { method: 'POST', body: JSON.stringify(body) })
  }
  put<T>(url: string, body: any) {
    return this.request<T>(url, { method: 'PUT', body: JSON.stringify(body) })
  }
  delete<T>(url: string) {
    return this.request<T>(url, { method: 'DELETE' })
  }

  private async withRetry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
    try {
      return await fn()
    } catch (err) {
      if (retries <= 0) throw err
      return this.withRetry(fn, retries - 1)
    }
  }

  private async requestWithRetry<T>(path: string, options: RequestInit, retries = 1): Promise<T> {
    try {
      return await this.request<T>(path, options)
    } catch (err: any) {
      if (retries > 0 && err.message.includes('401')) {
        const refreshToken = localStorage.getItem('refresh_token')
        if (!refreshToken) throw err

        // try to refresh token
        const res = await fetch(`${this.baseUrl}/api/auth/refresh`, {
          method: 'POST',
          body: JSON.stringify({ refresh_token: refreshToken }),
          headers: { 'Content-Type': 'application/json' },
        })

        if (res.ok) {
          const json = await res.json()
          localStorage.setItem('token', json.token)
          return this.requestWithRetry(path, options, retries - 1)
        }
      }
      throw err
    }
  }
}
