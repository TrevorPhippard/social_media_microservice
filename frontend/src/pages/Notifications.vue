<template>
  <div>
    <h2>Notifications</h2>
    <p>{{ notificationStore.notifications.length }}</p>
    <ul>
      <li v-for="n in notificationStore.notifications" :key="n.id">
        {{ n.message }}
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import { onMounted } from 'vue'
import { useNotificationStore } from '@/stores/notifications'

const notificationStore = useNotificationStore()

onMounted(() => {
  notificationStore.fetchNotifications()
})
</script>

