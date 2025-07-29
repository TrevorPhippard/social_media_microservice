<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'
import LoginForm from '@/components/molecules/LoginForm.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()


const { login, isAuthenticated, user } = useAuth()
const error = ref('')

async function handleLogin(form: { email: string; password: string }) {
  error.value = ''
  try {
    await login(form.email, form.password)
        router.push('/')
  } catch (err) {
    error.value = 'Invalid email or password'
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 shadow rounded bg-white">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <LoginForm @submit="handleLogin" />
    <p v-if="error" class="text-red-500">{{ error }}</p>
    <p v-if="isAuthenticated">Welcome {{ user?.username }}</p>
  </div>
</template>
