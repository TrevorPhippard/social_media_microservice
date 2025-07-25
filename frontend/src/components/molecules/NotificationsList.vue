<template>
  <div class="w-72 bg-white border rounded shadow p-4">
    <h2 class="font-semibold mb-3">Notifications</h2>

    <ul class="max-h-80 overflow-auto space-y-2">
      <li
        v-for="notification in notifications"
        :key="notification.id"
        :class="[
          'p-2 rounded cursor-pointer',
          notification.read ? 'bg-gray-100' : 'bg-blue-100 font-semibold'
        ]"
        @click="markRead(notification.id)"
      >
        {{ notification.message }}
        <div class="text-xs text-gray-500">{{ formatDate(notification.createdAt) }}</div>
      </li>

      <li v-if="notifications.length === 0" class="text-gray-500 text-sm">
        No notifications
      </li>
    </ul>

    <div class="mt-4 flex justify-between text-sm text-gray-600">
      <button @click="markAllRead" class="hover:underline">Mark all read</button>
      <button @click="clearAll" class="hover:underline">Clear all</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNotificationsStore } from '@/stores/useNotificationsStore'

const notificationsStore = useNotificationsStore()

const notifications = computed(() => notificationsStore.notifications)

function markRead(id: string) {
  notificationsStore.markAsRead(id)
}

function markAllRead() {
  notificationsStore.markAllAsRead()
}

function clearAll() {
  notificationsStore.clearNotifications()
}

function formatDate(date: Date) {
  return new Date(date).toLocaleString()
}
</script>
