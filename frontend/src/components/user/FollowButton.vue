<template>
  <button @click="toggleFollow">
    {{ isFollowing ? 'Unfollow' : 'Follow' }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ userId: number; initialFollowed: boolean }>()
const isFollowing = ref(props.initialFollowed)

const toggleFollow = async () => {
  const endpoint = isFollowing.value ? 'unfollow' : 'follow'
  await fetch(`/api/users/${props.userId}/${endpoint}`, { method: 'POST' })
  isFollowing.value = !isFollowing.value
}
</script>
