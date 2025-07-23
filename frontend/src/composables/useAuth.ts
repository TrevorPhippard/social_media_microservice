import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

export const useAuth = () => {
  const store = useAuthStore()
  const { user, loading, error } = storeToRefs(store)
  return {
    user,
    loading,
    error,
    login: store.login,
    register: store.register,
    logout: store.logout,
  }
}
