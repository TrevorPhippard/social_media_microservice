<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits<{
  (e: 'submit', form: { email: string; password: string }): void
}>()

const form = reactive({
  email: '',
  password: ''
})

function handleSubmit() {
  emit('submit', { ...form })
}
</script>

<template>
<form @submit.prevent="handleSubmit">
  <div class="mb-4">
    <label for="email" class="block text-sm font-medium">Email</label>
    <input
      id="email"
      v-model="form.email"
      class="w-full border p-2 rounded"
      type="email"
      placeholder="Email"
      required
    />
  </div>

  <div class="mb-4">
    <label for="password" class="block text-sm font-medium">Password</label>
    <input
      id="password"
      v-model="form.password"
      class="w-full border p-2 rounded"
      type="password"
      placeholder="Password"
      required
    />
  </div>
    <br/>

  <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
    Login
  </button>
</form>

</template>


