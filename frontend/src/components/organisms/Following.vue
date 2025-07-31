<template>
  <div>
    <h2>Following</h2>
    <ul>
      <li v-for="user in following" :key="user.id">
        {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

const route = useRoute()
const userId = Number(route.params.id)
const userStore = useUserStore()

onMounted(() => {
  userStore.loadFollowing(userId)
})

const following = computed(() => userStore.getFollowing(userId))
</script>
