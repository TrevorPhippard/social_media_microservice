// src/stores/commentStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { CommentService } from '@/services/CommentService'
import { ApiClient } from '@/services/ApiClient'

const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL, () =>
  localStorage.getItem('token'),
)
const commentService = new CommentService(apiClient)

import type { Comment } from '@/types'

export const useCommentStore = defineStore('comment', () => {
  const commentsByPost = ref<Record<number, Comment[]>>({})

  async function loadComments(postId: number) {
    const comments = await commentService.fetchComments(postId)
    commentsByPost.value[postId] = comments
  }

  async function addComment(postId: number, content: string) {
    const comment = await commentService.addComment(postId, content)
    if (!commentsByPost.value[postId]) {
      commentsByPost.value[postId] = []
    }
    commentsByPost.value[postId].push(comment)
  }

  function getComments(postId: number): Comment[] {
    return commentsByPost.value[postId] || []
  }

  return {
    loadComments,
    addComment,
    getComments,
  }
})
