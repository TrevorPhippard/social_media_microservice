export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  username: string
  email: string
  password: string
}

// User
export interface User {
  id: number
  username: string
  email: string
  avatarUrl?: string
  bio?: string
  createdAt: string
  updatedAt: string
  token: string
  refreshToken?: string
}

// Auth
export interface LoginPayload {
  email: string
  password: string
}

export interface RegisterPayload {
  username: string
  email: string
  password: string
}

// Post
export interface Post {
  id: number
  author: User
  content: string
  imageUrl?: string
  createdAt: string
  updatedAt: string
  likesCount: number
  commentsCount: number
}

export interface CreatePostPayload {
  content: string
  imageUrl?: string
}

// Comment
export interface Comment {
  id: number
  postId: number
  author: User
  content: string
  createdAt: string
  updatedAt: string
}

export interface CreateCommentPayload {
  content: string
}

// Notification
export interface Notification {
  id: number
  userId: number
  type: 'like' | 'comment' | 'follow' | 'mention'
  message: string
  isRead: boolean
  createdAt: string
}
