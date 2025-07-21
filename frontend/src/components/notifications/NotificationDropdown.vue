<template>
  <div class="dropdown">
    <button @click="toggle">🔔</button>
    <div v-if="open" class="dropdown-menu">
      <div v-for="n in notifications" :key="n.id" class="notification">
        {{ n.message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNotificationStore } from '@/stores/notifications'

const { notifications } = useNotificationStore()
const open = ref(false)

const toggle = () => open.value = !open.value
</script>

<style scoped>
.dropdown-menu {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
