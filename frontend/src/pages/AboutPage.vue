

<script lang="ts" setup>
import PostForm from '@/components/PostForm.vue'
import PostQuery from '@/components/PostQuery.vue'

</script>
<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Posts</h2>
    <hr/>
    <PostQuery />
    <h2 class="text-2xl font-bold text-gray-800">Create a New Post</h2>
    <hr/>
    <PostForm />
  </div>
</template>
<style scoped>
button {
  border: 1px solid #ccc;
  border-right: none;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
}
button:last-child {
  border-right: 1px solid #ccc;
}
</style>
