<template>
  <form @submit.prevent="handleSubmit" class="flex items-start space-x-3">
    <!-- <BaseAvatar :src="userAvatar" :alt="userName" size="sm" /> -->

    <div class="flex-1">
      <textarea
        v-model="commentText"
        rows="1"
        placeholder="Write a comment..."
        class="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        @input="autoResize"
        :disabled="isSubmitting"
      ></textarea>

      <div class="flex justify-end mt-1">
        <button
          type="submit"
          :disabled="isSubmitting || !commentText.trim()"
          class="rounded-full bg-blue-600 px-4 py-1.5 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Post
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const emits = defineEmits<{
  (e: 'submit', comment: string): void
}>()

const commentText = ref('')
const isSubmitting = ref(false)

function autoResize(event: Event) {
  const el = event.target as HTMLTextAreaElement
  el.style.height = 'auto'
  el.style.height = `${el.scrollHeight}px`
}

async function handleSubmit() {
  if (!commentText.value.trim()) return

  isSubmitting.value = true
  emits('submit', commentText.value.trim())

  // Simulate async submission
  await new Promise((r) => setTimeout(r, 500))

  commentText.value = ''
  isSubmitting.value = false
}
</script>
