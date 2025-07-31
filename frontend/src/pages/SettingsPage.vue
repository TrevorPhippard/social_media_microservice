<template>
    <section class="w-3xl p-6 mx-auto bg-white rounded shadow">
      <form @submit.prevent="saveSettings">
        <input class="border border-gray-300 p-2 rounded" v-model="form.name" placeholder="Your Name" />
        <input class="border border-gray-300 p-2 rounded" v-model="form.bio" placeholder="Bio" />
        <button class="rounded bg-blue-600 px-4 py-1.5 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
 type="submit">Save</button>
      </form>
      </section>
</template>
<style>
input{
  margin: 5px;
}
</style>

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
