import { ApiClient } from './ApiClient'
import type { User, LoginPayload, RegisterPayload } from '@/types'

export class UserService {
  private api: ApiClient

  constructor(apiClient: ApiClient) {
    this.api = apiClient
  }

  login(payload: LoginPayload): Promise<User> {
    return this.api.post<User>('/api/auth/login', payload)
  }

  register(payload: RegisterPayload): Promise<User> {
    return this.api.post<User>('/api/auth/register', payload)
  }

  getProfile(userId: number): Promise<User> {
    return this.api.get<User>(`/api/users/${userId}`)
  }

  getFollowers(userId: number): Promise<User[]> {
    return this.api.get<User[]>(`/api/users/${userId}/followers`)
  }

  getFollowing(userId: number): Promise<User[]> {
    return this.api.get<User[]>(`/api/users/${userId}/following`)
  }

  follow(userId: number): Promise<void> {
    return this.api.post<void>(`/api/users/${userId}/follow`, {})
  }

  unfollow(userId: number): Promise<void> {
    return this.api.post<void>(`/api/users/${userId}/unfollow`, {})
  }
}
