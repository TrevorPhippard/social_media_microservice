<template>
    <section class="w-3xl p-6 mx-auto bg-white rounded shadow ">
      <header class="flex items-center space-x-4 mb-6">
        <BaseAvatar :src="user.avatar" :alt="user.name" size="lg" />
        <div>
          <h1 class="text-2xl font-semibold">{{ user.name }}</h1>
          <p class="text-gray-600">@{{ user.username }}</p>
        </div>
      </header>
      <br/>
     <section>
        <h2 class="text-xl font-semibold mb-3">Say Something</h2>
        <CommentsList></CommentsList>
      </section>
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
<style>

</style>
<script setup lang="ts">
import { ref, onMounted } from 'vue'


import BaseAvatar from '@/components/atoms/BaseAvatar.vue'
import PostCard from '@/components/molecules/PostCard.vue'
import CommentsList from '@/components/molecules/CommentsList.vue';

const user = {
  name: 'Trevor Phippard',
  username: 'trevorphippard',
  avatar: 'https://avatars.githubusercontent.com/u/8942758?v=4',
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
  }, {
    id: 'p2',
    author: user,
    content: 'Hello world! This is my second post.',
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
