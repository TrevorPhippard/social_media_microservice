<template>
  <form @submit.prevent="handleLogin" class="space-y-4 p-4">
    <input v-model="email" type="email" placeholder="Email" class="input" />
    <input v-model="password" type="password" placeholder="Password" class="input" />
    <button type="submit" class="btn">Login</button>
    <p v-if="error" class="text-red-500">Error: {{ error.message }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { LOGIN_MUTATION } from '@/graphql/auth'

const email = ref('')
const password = ref('')

const { mutate: login, error, onDone } = useMutation(LOGIN_MUTATION)

function handleLogin() {
  login({ email: email.value, password: password.value })
}

onDone(({ data }) => {
  const token = data?.login
  if (token) {
    localStorage.setItem('token', token)
    console.log('Logged in:', token)
    // Optional: redirect to dashboard
  }
})
</script>

<style scoped>
.input {
  @apply border rounded p-2 w-full;
}
.btn {
  @apply bg-green-600 text-white px-4 py-2 rounded;
}
</style>
