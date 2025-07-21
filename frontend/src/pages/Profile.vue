<template>
  <div class="profile">
    <h2>{{ user?.username }}</h2>
    <!-- <FollowButton :user-id="userId" :initial-followed="user?.isFollowed" /> -->
    <PostFeed :user-id="userId" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PostFeed from '@/components/post/PostFeed.vue'
// import FollowButton from '@/components/user/FollowButton.vue'
import type { User } from '@/types'

const route = useRoute()
const userId = Number(route.params.id)
const user = ref<User | null>(null)

onMounted(async () => {
  user.value = await fetch(`/api/users/${userId}`).then(res => res.json())
})
</script>
