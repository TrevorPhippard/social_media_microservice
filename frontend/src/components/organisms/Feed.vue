<template>
  <section class="w-xl mx-auto ">
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @share="handleShare"
    />
    <div
      v-if="isLoading"
      class="flex justify-center py-6 text-gray-500"
    >
      Loading more posts...
    </div>

    <button
      v-if="!isLoading && hasMore"
      @click="loadMore"
      class="block mx-auto mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Load More
    </button>
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PostCard from '@/components/molecules/PostCard.vue'
import { useFeed } from '@/composables/useFeed'

const { posts, loadMore, isLoading, hasMore } = useFeed()

function handleShare(postId: string) {
  alert(`Share post ${postId}`)
}

onMounted(() => {
  loadMore()
})
</script>
