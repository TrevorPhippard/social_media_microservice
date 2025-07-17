

<script lang="ts" setup>
import PostForm from '@/components/PostForm.vue'
import PostQuery from '@/components/PostQuery.vue'

</script>
<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded shadow">
    <PostQuery />
    <hr/>
    <br/>
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
