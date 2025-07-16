

<script lang="ts" setup>
import { ref } from 'vue'
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

const mode = ref<'login' | 'register'>('login')

const activeClass = 'bg-blue-600 text-white'
const inactiveClass = 'bg-gray-200 text-gray-700 hover:bg-gray-300'
</script>
<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded shadow">
    <div class="mb-4 text-center">
      <button
        @click="mode = 'login'"
        :class="mode === 'login' ? activeClass : inactiveClass"
        class="px-4 py-2 rounded-l"
      >
        Login
      </button>
      <button
        @click="mode = 'register'"
        :class="mode === 'register' ? activeClass : inactiveClass"
        class="px-4 py-2 rounded-r"
      >
        Register
      </button>
    </div>

    <LoginForm v-if="mode === 'login'" />
    <RegisterForm v-else />
  </div>
</template>
<style scoped>
button {
  border: 1px solid #ccc;
  border-right: none;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
}
button:last-child {
  border-right: 1px solid #ccc;
}
</style>
