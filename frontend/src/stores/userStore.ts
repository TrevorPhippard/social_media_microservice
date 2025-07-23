// src/stores/userStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { UserService } from '@/services/UserService'
import type { User } from '@/types'
import { ApiClient } from '@/services/ApiClient'

const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL, () =>
  localStorage.getItem('token'),
)

const userService = new UserService(apiClient)

export const useUserStore = defineStore('user', () => {
  const followingIds = ref<Set<number>>(new Set())
  const followersMap = ref<Record<number, User[]>>({})
  const followingMap = ref<Record<number, User[]>>({})
  const usersMap = ref<Record<number, User>>({})

  async function loadFollowers(userId: number) {
    const followers = await userService.getFollowers(userId)
    followersMap.value[userId] = followers
  }

  function getFollowers(userId: number) {
    return followersMap.value[userId] || []
  }

  function isFollowing(userId: number) {
    return followingIds.value.has(userId)
  }

  async function loadFollowing(userId: number) {
    const following = await userService.getFollowing(userId)
    followingMap.value[userId] = following
  }

  function getFollowing(userId: number) {
    return followingMap.value[userId] || []
  }

  async function toggleFollow(userId: number) {
    if (isFollowing(userId)) {
      await userService.unfollow(userId)
      followingIds.value.delete(userId)
    } else {
      await userService.follow(userId)
      followingIds.value.add(userId)
    }
  }

  async function loadUser(userId: number) {
    const user = await userService.getUserById(userId)
    // usersMap.value[userId] = user
  }

  function getUser(userId: number): User | null {
    return usersMap.value[userId] || null
  }

  function setInitialFollowed(userId: number, followed: boolean) {
    if (followed) {
      followingIds.value.add(userId)
    } else {
      followingIds.value.delete(userId)
    }
  }

  return {
    isFollowing,
    toggleFollow,
    setInitialFollowed,
    loadFollowers,
    loadFollowing,
    getFollowers,
    getFollowing,
    followingIds,
    loadUser,
    getUser,
  }
})
