import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/auth'

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
