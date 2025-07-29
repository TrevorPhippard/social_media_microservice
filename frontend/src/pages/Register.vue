<script setup lang="ts">
import RegistrationForm from '@/components/molecules/RegistrationForm.vue'
import { useAuth } from '@/composables/useAuth'
import { ref } from 'vue';

const { register, isAuthenticated, user } = useAuth()
const error = ref('')

async function handleRegister(form: { name: string; email: string; password: string }) {
  error.value = ''
  try {
    await register({username:form.name, email:form.email, password:form.password})
  } catch (err) {
    error.value = 'Registration failed'
  }
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 shadow rounded bg-white">
    <h2 class="text-xl font-bold mb-4">Register</h2>
    <RegistrationForm @submit="handleRegister" />
    <p v-if="error" class="text-red-500">{{ error }}</p>
    <p v-if="isAuthenticated">Welcome {{ user?.username }}</p>
  </div>
</template>
