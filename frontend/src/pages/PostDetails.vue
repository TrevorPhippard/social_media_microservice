<template>
  <div v-if="post">
    <h2>{{ post }}</h2>
    <!-- <p>{{ post.content }}</p> -->
    <!-- <CommentSection :post-id="post.id" /> -->
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
// import CommentSection from '@/components/post/CommentSection.vue'
import { usePostStore } from '@/stores/postStore'

const route = useRoute()
const postId = Number(route.params.id)
const postStore = usePostStore()

onMounted(() => {
  postStore.getPost(postId)
})

const post = computed(() => postStore.getPost(postId))
</script>
