<template>
  <svg
    class="animate-spin text-current"
    fill="none"
    viewBox="0 0 24 24"
    :class="sizeClass"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    />
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ size?: 'sm' | 'md' | 'lg' }>()

const sizeClass = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}[props.size ?? 'md']
</script>
