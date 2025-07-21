import type { User, LoginPayload, RegisterPayload } from '@/types'
import type { ApiClient } from './ApiClient'

export class AuthService {
  constructor(private api: ApiClient) {}

  async login(payload: LoginPayload): Promise<User> {
    const response = await this.api.post<User>('/api/auth/login', payload)
    return response
  }

  async register(payload: RegisterPayload): Promise<User> {
    const response = await this.api.post<User>('/api/auth/register', payload)
    return response
  }

  async refreshToken(refreshToken: string): Promise<{ token: string }> {
    const response = await this.api.post<{ token: string }>('/api/auth/refresh', {
      refresh_token: refreshToken,
    })
    return response
  }

  async logout(): Promise<void> {
    await this.api.post('/api/auth/logout', {})
  }
}
