<template>
  <form @submit.prevent="handleRegister" class="space-y-4 p-4">
    <input v-model="username" placeholder="Username" class="input" />
    <input v-model="email" type="email" placeholder="Email" class="input" />
    <input v-model="password" type="password" placeholder="Password" class="input" />
    <button type="submit" class="btn">Register</button>
    <p v-if="error" class="text-red-500">Error: {{ error.message }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { REGISTER_MUTATION } from '@/graphql/auth'

const username = ref('')
const email = ref('')
const password = ref('')

const { mutate: register, error, onDone } = useMutation(REGISTER_MUTATION)

function handleRegister() {
  register({ username: username.value, email: email.value, password: password.value })
}

onDone(({ data }) => {
  console.log('Registered:', data?.register)
  // Optional: redirect to login
})
</script>

<style scoped>
.input {
  @apply border rounded p-2 w-full;
}
.btn {
  @apply bg-blue-600 text-white px-4 py-2 rounded;
}
</style>
