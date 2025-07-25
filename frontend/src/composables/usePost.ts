import { ref } from 'vue'
// import { api } from '@/services/api'

export function usePost() {
  const isLoading = ref(false)

  const likePost = async (id: string) => {
    isLoading.value = true
    // await api.post(`/posts/${id}/like`)
    isLoading.value = false
  }

  return { isLoading, likePost }
}
