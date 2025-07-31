import { ApiClient } from './ApiClient'
import type { User, LoginPayload, RegisterPayload } from '@/types'

function generateRandomUser(id: number): any {
  const randomString = () => Math.random().toString(36).substring(2, 10)
  const timestamp = () => new Date().toISOString()

  return {
      id,
      username: `user_${randomString()}`,
      email: `${randomString()}@example.com`,
      avatarUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      bio: `Bio of user ${id}`,
      token: randomString() + randomString(),
      createdAt: timestamp(),
      updatedAt: timestamp(),
  }
}


export class UserService {
  private api: ApiClient

  constructor(apiClient: ApiClient) {
    this.api = apiClient
  }

  async login(payload: LoginPayload): Promise<User> {
    console.log('http://localhost:4003/')

    return this.api.post<User>('/api/auth/login', payload)
  }

  async register(payload: RegisterPayload): Promise<User> {
    return this.api.post<User>('/api/auth/register', payload)
  }

  async getUserById(userId: number): Promise<User[]> {
    return this.api.get<User[]>(`/api/users/${userId}`)
  }

  async follow(userId: number): Promise<void> {
    this.api.post<User>(`/api/users/${userId}/follow`, {})
  }

  async unfollow(userId: number): Promise<void> {
    this.api.post<User>(`/api/users/${userId}/unfollow`, {})
  }

  async getFollowers(userId: number): Promise<User[]> {
    return [generateRandomUser(1), generateRandomUser(2), generateRandomUser(3)]

    //this.api.get<User[]>(`/api/users/${userId}/followers`)
  }

  async getFollowing(userId: number): Promise<User[]> {
    return [generateRandomUser(1), generateRandomUser(2), generateRandomUser(3)]
    // return this.api.get<User[]>(`/api/users/${userId}/following`)
  }
}
