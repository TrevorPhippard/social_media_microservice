<template>
  <div>
    <h2>Notifications</h2>
    <ul>
      <li v-for="n in notifications" :key="n.id">
        {{ n.message }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useNotificationStore } from '@/stores/notifications'

const { notifications } = useNotificationStore()
</script>
