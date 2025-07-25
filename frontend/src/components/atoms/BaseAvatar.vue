<template>
<div  class="relative inline-block">
  <div
    class="rounded-full bg-gray-200 overflow-hidden flex items-center justify-center text-sm font-medium text-white "
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="object-cover"
      @error="onError"
    />
    <span v-else>{{ fallbackInitials }}</span>
  </div>
  <span
    v-if="showStatus && status"
    :class="[
      'absolute right-0 bottom-0 w-3.5 h-3.5 border-2 border-white rounded-full',
      statusColorClass
    ]"
  />



</div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAvatarStatus } from '@/composables/useAvatarStatus'

const props = defineProps<{
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  userId?: string
  showStatus?: boolean
}>()

const errored = ref(false)

const onError = () => {
  errored.value = true
}

const fallbackInitials = computed(() =>
  props.name
    ? props.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : '👤'
)

const sizeClass = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
}[props.size ?? 'md']

const { status } = useAvatarStatus(props.userId)
const statusColorClass = computed(() => {
  return {
    online: 'bg-green-500',
    idle: 'bg-yellow-400',
    offline: 'bg-gray-400',
  }[status.value]
})
</script>
