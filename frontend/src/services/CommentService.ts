import { ApiClient } from './ApiClient'
import type { Comment, CreateCommentPayload } from '@/types'

export class CommentService {
  private api: ApiClient

  constructor(apiClient: ApiClient) {
    this.api = apiClient
  }

  // Fetch comments for a specific post
  fetchComments(postId: number): Promise<Comment[]> {
    return this.api.get<Comment[]>(`/api/posts/${postId}/comments`)
  }

  // Create a new comment on a post
  createComment(postId: number, payload: CreateCommentPayload): Promise<Comment> {
    return this.api.post<Comment>(`/api/posts/${postId}/comments`, payload)
  }

  // Delete a comment by id
  deleteComment(commentId: number): Promise<void> {
    return this.api.delete<void>(`/api/comments/${commentId}`)
  }
}
