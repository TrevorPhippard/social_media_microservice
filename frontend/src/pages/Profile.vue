<template>
  <div class="profile">
    <h2>{{ user?.username }}</h2>
    <!-- <FollowButton :user-id="userId" :initial-followed="user?.isFollowed" /> -->
    <PostFeed :user-id="userId" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import PostFeed from '@/components/post/PostFeed.vue'
// import FollowButton from '@/components/user/FollowButton.vue'

const route = useRoute()
const userId = Number(route.params.id)
const userStore = useUserStore()

onMounted(() => {
  userStore.loadUser(userId)
})

const user = computed(() => userStore.getUser(userId))
</script>
