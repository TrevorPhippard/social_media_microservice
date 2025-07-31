import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

export function useAuth() {
  const authStore = useAuthStore()
  const { user, isAuthenticated, token } = storeToRefs(authStore)

  return {
    user,
    isAuthenticated,
    token,
    login: authStore.login,
    logout: authStore.logout,
    register: authStore.register,
    refreshToken: authStore.refreshToken,
  }
}
