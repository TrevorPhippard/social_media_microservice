<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      @click.self="close"
    >
      <div class="bg-white rounded-xl p-6 shadow-xl w-full max-w-md">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useModal } from '@/composables/useModal'

const { isOpen, close } = useModal('auth')
</script>
