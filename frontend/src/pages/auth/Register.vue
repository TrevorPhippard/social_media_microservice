<template>
  <h2>Register</h2>
  <form @submit.prevent="register">
    <div><input v-model="name" placeholder="Name" /></div>
    <div><input v-model="email" type="email" placeholder="Email" /></div>
    <div><input v-model="password" type="password" placeholder="Password" /></div>
    <button type="submit">Register</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const register = async () => {
  const success = await authStore.register({
    username: name.value,
    email: email.value,
    password: password.value,
  })
  if (success) router.push('/')
}
</script>
