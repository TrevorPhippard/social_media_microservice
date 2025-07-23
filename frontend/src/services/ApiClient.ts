export class ApiClient {
  /**
   * ApiClient Wraps calls with a request header
   */

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

    const response = await this.withRetry(() => {
      console.log(this.baseUrl)
      return fetch(`${this.baseUrl}${path}`, {
        ...options,
        headers,
      })
    })

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
}
