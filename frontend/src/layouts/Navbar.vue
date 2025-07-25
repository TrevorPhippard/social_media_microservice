<template>
  <nav class="bg-white shadow px-4 py-2 flex items-center justify-between">

    <div class="flex items-center space-x-4">
        <img src="@/assets/logo.svg" alt="Logo" class="h-5 " />
        <BaseInput
          v-model="search"
          placeholder="Search For Friends"
          class="w-64"
        >
        <template #icon>
          <SearchIcon class="w-4 h-4" />
        </template>
      </BaseInput>
    </div>

    <ul class="flex list-none items-center">
      <li class="px-2"><RouterLink to="/" >Home</RouterLink></li>
     <li v-for="route in navigableRoutes" :key="route.path">
        <RouterLink :to="route.path" class="text-gray-600 hover:text-gray-900">
          {{ route.name || route.path }}
        </RouterLink>
      </li>
      <li class="px-2"><UserDropdown :user="user" @logout="logout" /></li>
    </ul>

  </nav>
</template>


<script setup lang="ts">
import { ref } from 'vue'

import { useRouter } from 'vue-router'

// Get router instance
const router = useRouter()


import BaseInput from '@/components/atoms/BaseInput.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import UserDropdown from '@/components/organisms/UserDropdown.vue'

// Filter routes to exclude ones you don't want (like 404, redirect, etc.)
const navigableRoutes = router.getRoutes().filter(route => {
  // Example filters:
  return (
    route.path !== '/:pathMatch(.*)*' &&  // exclude catch-all 404
    route.meta?.nav !== false &&          // allow opt-out via route meta
    route.path !== '/' &&                 // optionally exclude home if you want
    route.path !== '/profile'
  )
})

const search = ref('')
const user = {
  name: 'Trevor Phippard',
  avatar: 'https://avatars.githubusercontent.com/u/8942758?v=4',
}

function logout() {
  alert('Logging out...')
}
</script>
