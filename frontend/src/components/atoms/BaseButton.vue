<template>
  <button
    :class="[
      'inline-flex items-center justify-center font-medium rounded-2xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed',
      sizeClasses,
      variantClasses,
    ]"
    :disabled="loading || disabled"
    v-bind="$attrs"
  >
    <span v-if="loading" class="mr-2">
      <BaseSpinner class="w-4 h-4" />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseSpinner from './BaseSpinner.vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
}>()

const variant = computed(() => props.variant ?? 'primary')
const size = computed(() => props.size ?? 'md')

const sizeClasses = computed(() => {
  return {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  }[size.value]
})

const variantClasses = computed(() => {
  return {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-400',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400 disabled:bg-gray-200',
    ghost:
      'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
    danger:
      'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-400',
  }[variant.value]
})
</script>
