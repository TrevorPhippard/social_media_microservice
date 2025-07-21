<template>
  <form @submit.prevent="saveSettings">
    <input v-model="form.name" placeholder="Your Name" />
    <input v-model="form.bio" placeholder="Bio" />
    <button type="submit">Save</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  bio: '',
})

const saveSettings = async () => {
  await fetch('/api/user/settings', {
    method: 'POST',
    body: JSON.stringify(form.value),
  })
}
</script>
