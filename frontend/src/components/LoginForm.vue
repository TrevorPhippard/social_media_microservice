<template>
  <form @submit.prevent="handleLogin" class="space-y-4 p-4">
    <input v-model="email" type="email" placeholder="Email" class="input" />
    <input v-model="password" type="password" placeholder="Password" class="input" />
    <button type="submit" class="btn">Login</button>
    <!-- <p v-if="error" class="text-red-500">Error: {{ error.message }}</p> -->
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')


function handleLogin() {
  console.log({ email: email.value, password: password.value })
}

</script>

<style scoped>
.input {
  @apply border rounded p-2 w-full;
}
.btn {
  @apply bg-green-600 text-white px-4 py-2 rounded;
}
</style>
