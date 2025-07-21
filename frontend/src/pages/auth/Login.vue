<template>
  <h2>login</h2>
  <form @submit.prevent="handleLogin">
    <div>
    <input v-model="email" type="email" placeholder="Email" required /></div>
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
// import { validate } from 'graphql'

import { useForm } from '@/composables/useForm'

const email = ref('')
const password = ref('')
const userStore = useUserStore()
const router = useRouter()

const { fields, errors, validate } = useForm({ email: '', password: '' })

const rules = {
  email: (v: string) => (!v.includes('@') ? 'Invalid email' : null),
  password: (v: string) => (v.length < 6 ? 'Min 6 characters' : null),
}

const handleLogin = async () => {
    if (!validate(rules)) return
  await userStore.login(fields.value.email, fields.value.password)
  const success = await userStore.login(email.value, password.value)
  if (success) router.push('/')
}
</script>
