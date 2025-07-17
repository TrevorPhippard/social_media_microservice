<template>
  <form @submit.prevent="handlePosting" class="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">

    <div class="space-y-1">
      <label class="block text-sm font-medium text-gray-700">Title</label>
      <input v-model="title" type="text" placeholder="Post title"
             class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div class="space-y-1">
      <label class="block text-sm font-medium text-gray-700">Content</label>
      <input v-model="content" type="text" placeholder="Post content"
             class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <div class="space-y-1">
      <label class="block text-sm font-medium text-gray-700">Author ID</label>
      <input v-model="authorId" type="text" placeholder="Author ID"
             class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
    </div>

    <button type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
      Post
    </button>

    <p v-if="error" class="text-red-600 text-sm mt-2">Error: {{ error.message }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import { POST_MUTATION, GET_POSTS } from '@/graphql/post'

const title = ref('')
const content = ref('')
const authorId = ref('')

// Mutation with Apollo cache update
const { mutate: post, error, onDone } = useMutation(POST_MUTATION, {
  update(cache, { data }) {
    if (!data?.createPost) return

    // Read current cached posts
    const existing: any = cache.readQuery({ query: GET_POSTS })

    if (existing?.posts) {
      cache.writeQuery({
        query: GET_POSTS,
        data: {
          posts: [...existing.posts, data.createPost],
        },
      })
    }
  },
})

function handlePosting() {
  post({
    title: title.value,
    content: content.value,
    authorId: authorId.value,
  })
}

watch(error, (e) => {
  if (e) {
    console.error('Posting error:', e)
  }
})

onDone(({ data }) => {
  console.log('posted user:', data?.createPost)

  // Optional: reset form
  title.value = ''
  content.value = ''
  authorId.value = ''
})
</script>
