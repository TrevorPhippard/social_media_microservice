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
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { User } from '@/types'

const route = useRoute()
const userId = Number(route.params.id)
const followers = ref<User[]>([])

onMounted(async () => {
  followers.value = await fetch(`/api/users/${userId}/followers`).then(res => res.json())
})
</script>
