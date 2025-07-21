<template>
  <div>
    <h2>Explore</h2>
    <PostFeed :explore="true" />
  </div>
</template>

<script setup lang="ts">
import PostFeed from '@/components/post/PostFeed.vue'
</script>
