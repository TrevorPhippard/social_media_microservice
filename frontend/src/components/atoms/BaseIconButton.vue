<template>
  <button
    type="button"
    :class="[
      'inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      sizeClasses,
      variantClasses
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'ghost' | 'primary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()

const size = computed(() => props.size ?? 'md')
const variant = computed(() => props.variant ?? 'ghost')

const sizeClasses = computed(() => {
  return {
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
  }[size.value]
})

const variantClasses = computed(() => {
  return {
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-300',
    primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    danger: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
  }[variant.value]
})
</script>
