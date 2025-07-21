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
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { User } from '@/types'

const route = useRoute()
const userId = Number(route.params.id)
const following = ref<User[]>([])

onMounted(async () => {
  following.value = await fetch(`/api/users/${userId}/following`).then(res => res.json())
})
</script>
