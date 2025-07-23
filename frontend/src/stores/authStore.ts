import { defineStore } from 'pinia'
import { ref } from 'vue'
import { AuthService } from '@/services/AuthService'
import { ApiClient } from '@/services/ApiClient'
import type { User, RegisterPayload } from '@/types'

// Initialize services outside the store
//import.meta.env.VITE_API_BASE_URL
const apiClient = new ApiClient('http://localhost:4003', () => localStorage.getItem('token'))
const authService = new AuthService(apiClient)

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const isAuthenticated = ref(false)

  // Actions
  async function login(email: string, password: string) {
    loading.value = true
    error.value = null
    try {
      const userData = await authService.login({ email, password })
      user.value = userData
      isAuthenticated.value = true
      localStorage.setItem('token', userData.token)
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
    return isAuthenticated.value
  }

  async function register(payload: RegisterPayload) {
    loading.value = true
    error.value = null
    try {
      const userData = await authService.register(payload)
      user.value = userData
      localStorage.setItem('token', userData.token)
      isAuthenticated.value = true
    } catch (err: any) {
      error.value = err.message
    } finally {
      loading.value = false
    }
    return isAuthenticated.value
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
    localStorage.removeItem('token')
  }

  // Return state and actions
  return {
    user,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
  }
})
