<template>
  <form @submit.prevent="handlePosting" class="space-y-4 p-4">
    <input v-model="title" placeholder="title" class="input" />
    <input v-model="content" placeholder="content" class="input" />
    <input v-model="authorId" placeholder="authorId" class="input" />
    <button type="submit" class="btn">Post</button>
    <p v-if="error" class="text-red-500">Error: {{ error.message }}</p>
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useMutation } from "@vue/apollo-composable";
import { POST_MUTATION } from "@/graphql/post";

const title = ref("");
const content = ref("");
const authorId = ref("");
const { mutate: post, error, onDone } = useMutation(POST_MUTATION);

function handlePosting() {
  post({
    title: title.value,
    content: content.value,
    authorId: authorId.value,
  });
}

watch(error, (e) => {
  if (e) {
    console.error("Posting error:", e);
  }
});

onDone(({ data }) => {
  console.log("posted user:", data?.createPost);
});

</script>

<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100%;
  border-radius: 4px;
}
.btn {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>
