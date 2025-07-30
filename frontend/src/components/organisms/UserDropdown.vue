<template>
  <div class="relative" ref="dropdownRef">
    <BaseIconButton @click="toggle" :aria-expanded="isOpen" aria-label="User menu">
      <BaseAvatar :src="user.avatar" :alt="user.name" size="sm" />
    </BaseIconButton>

    <transition name="fade">
      <ul
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md py-1 z-50"
      >
        <li>
          <RouterLink to="/profile" class="block px-4 py-2 text-gray-600 hover:text-gray-900">
            Profile
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/settings" class="block px-4 py-2 text-gray-600 hover:text-gray-900">
            Settings
          </RouterLink>
        </li>

        <li>
          <button
            @click="$emit('logout')"
            class="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useDropdown } from '@/composables/useDropdown'
import BaseIconButton from '@/components/atoms/BaseIconButton.vue'
import BaseAvatar from '@/components/atoms/BaseAvatar.vue'

defineProps<{
  user: { name: string; avatar: string }
}>()

defineEmits<{
  (e: 'logout'): void
}>()

const { isOpen, dropdownRef, toggle } = useDropdown()
</script>
