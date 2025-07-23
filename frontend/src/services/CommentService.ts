import type { Comment } from '@/types'
import type { ApiClient } from './ApiClient'

export class CommentService {
  private api: ApiClient

  constructor(apiClient: ApiClient) {
    this.api = apiClient
  }

  async fetchComments(postId: number): Promise<Comment[]> {
    const res = await fetch(`/api/posts/${postId}/comments`)
    if (!res.ok) throw new Error('Failed to load comments')
    return await res.json()
  }

  async addComment(postId: number, content: string): Promise<Comment> {
    const res = await fetch(`/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
    if (!res.ok) throw new Error('Failed to post comment')
    return await res.json()
  }

  // Delete a comment by id
  // deleteComment(commentId: number): Promise<void> {
  //   return this.api.delete<void>(`/api/comments/${commentId}`)
  // }
}
