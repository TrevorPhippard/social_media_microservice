<template>
  <div class="w-72 bg-white border rounded shadow-lg p-4">
    <h2 class="font-semibold mb-3">Notifications</h2>
    <ul class="space-y-2 max-h-80 overflow-auto">
      <li v-for="(note, i) in notifications" :key="i" class="p-2 hover:bg-gray-100 rounded">
        {{ note }}
      </li>
      <li v-if="!notifications.length" class="text-gray-500 text-sm">No notifications</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const notifications = ref<string[]>([
  'John liked your post',
  'Mary commented on your photo',
  'You have 3 friend requests',
])
</script>
