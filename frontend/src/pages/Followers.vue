<template>
  <div>
    <h2>Followers</h2>
    <ul>
      <li v-for="follower in followers" :key="follower.id">
        {{ follower.username }}
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
  userStore.loadFollowers(userId)
})

const followers = computed(() => userStore.getFollowers(userId))
</script>
