<template>
  <button @click="handleClick">
    {{ isFollowing ? 'Unfollow' : 'Follow' }}
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'

const props = defineProps<{ userId: number; initialFollowed: boolean }>()
const userStore = useUserStore()

onMounted(() => {
  userStore.setInitialFollowed(props.userId, props.initialFollowed)
})

const isFollowing = computed(() => userStore.isFollowing(props.userId))
const handleClick = () => userStore.toggleFollow(props.userId)
</script>
