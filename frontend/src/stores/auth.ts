import { defineStore } from 'pinia'
import { AuthService } from '@/services/AuthService'
import { ApiClient } from '@/services/ApiClient'
import type { User, LoginPayload, RegisterPayload } from '@/types'

const apiClient = new ApiClient(import.meta.env.VITE_API_BASE_URL, () =>
  localStorage.getItem('token'),
)
const authService = new AuthService(apiClient)

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async login(payload: LoginPayload) {
      this.loading = true
      this.error = null
      try {
        const user = await authService.login(payload)
        this.user = user
        localStorage.setItem('token', user.token)
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    async register(payload: RegisterPayload) {
      this.loading = true
      this.error = null
      try {
        const user = await authService.register(payload)
        this.user = user
        localStorage.setItem('token', user.token)
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.user = null
      localStorage.removeItem('token')
    },
  },
})
