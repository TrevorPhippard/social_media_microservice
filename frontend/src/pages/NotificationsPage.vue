<template>
  <section class="w-3xl p-6 mx-auto bg-white rounded shadow">
    <h2>Notifications</h2>
    <p>{{ notificationStore.notifications.length }}</p>
    <ul>
      <li v-for="n in notificationStore.notifications" :key="n.id">
        {{ n.message }}
      </li>
    </ul>
    </section>
</template>


<script setup lang="ts">
  import { onMounted } from 'vue'
import { useNotificationStore } from '@/stores/notificationsStore'

const notificationStore = useNotificationStore()

onMounted(() => {
  notificationStore.fetchNotifications()
})
</script>

