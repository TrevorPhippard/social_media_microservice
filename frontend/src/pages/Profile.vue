<template>
  <section class="max-w-3xl mx-auto p-6 bg-white rounded shadow">
    <header class="flex items-center space-x-4 mb-6">
      <BaseAvatar :src="user.avatar" :alt="user.name" size="lg" />
      <div>
        <h1 class="text-2xl font-semibold">{{ user.name }}</h1>
        <p class="text-gray-600">@{{ user.username }}</p>
      </div>
    </header>

    <section>
      <h2 class="text-xl font-semibold mb-3">Posts</h2>
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @share="handleShare"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseAvatar from '@/components/atoms/BaseAvatar.vue'
import PostCard from '@/components/molecules/PostCard.vue'

const user = {
  name: 'Trevor Phippard',
  username: 'trevorphippard',
  avatar: '/avatars/me.jpg',
}

const posts = ref([
  {
    id: 'p1',
    author: user,
    content: 'Hello world! This is my first post.',
    likeCount: 5,
    commentCount: 2,
    shareCount: 1,
    viewerHasLiked: false,
    comments: [],
  },
])

function handleShare(postId: string) {
  alert(`Share post ${postId}`)
}

onMounted(() => {
  // Load profile posts from API here if needed
})
</script>
