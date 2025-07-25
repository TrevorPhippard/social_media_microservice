<template>
  <div class="max-w-md mx-auto p-6 shadow rounded bg-white">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-4">
        <label class="block text-sm font-medium">Email</label>
        <input v-model="email" type="email" class="w-full border p-2 rounded" required />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium">Password</label>
        <input v-model="password" type="password" class="w-full border p-2 rounded" required />
      </div>

      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>

      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')
const error = ref<string | null>(null)

const handleLogin = async () => {
  error.value = null
  try {
    await authStore.login(email.value, password.value)
    router.push('/')
  } catch (err: any) {
    error.value = err.message || 'Login failed.'
  }
}
</script>
