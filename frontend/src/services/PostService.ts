import { ApiClient } from './ApiClient'
import type { Post, CreatePostPayload } from '@/types'

function generateRandomPost(id: number): any {
  const randomString = () => Math.random().toString(36).substring(2, 10)
  const timestamp = () => new Date().toISOString()

  return {
    id,
    author: {
      id: id,
      username: `user_${randomString()}`,
      email: `${randomString()}@example.com`,
      avatarUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
      bio: `Bio of user ${id}`,
      createdAt: timestamp(),
      updatedAt: timestamp(),
      token: randomString() + randomString(),
    },
    content: `Post content ${randomString()}`,
    imageUrl: `https://picsum.photos/seed/${randomString()}/600/400`,
    createdAt: timestamp(),
    updatedAt: timestamp(),
    likesCount: Math.floor(Math.random() * 100),
    commentsCount: Math.floor(Math.random() * 50),
  }
}
const mockPosts = Array.from({ length: 5 }, (_, i) => generateRandomPost(i + 1))

export class PostService {
  private api: ApiClient

  constructor(apiClient: ApiClient) {
    this.api = apiClient
  }

  fetchPosts(): Promise<Post[]> {
    return Promise.resolve(mockPosts)
  }

  fetchPost(postId: number): Promise<Post> {
    return this.api.get<Post>(`/api/posts/${postId}`)
  }

  createPost(payload: CreatePostPayload): Promise<Post> {
    return this.api.post<Post>('/api/posts', payload)
  }

  deletePost(postId: number): Promise<void> {
    return this.api.delete<void>(`/api/posts/${postId}`)
  }
}
