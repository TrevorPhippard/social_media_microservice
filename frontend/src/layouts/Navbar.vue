<!-- src/components/layout/Navbar.vue -->
<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-if="!isAuthenticated" to="/auth/login">Login</RouterLink>
    <RouterLink v-else :to="`/profile/${user?.id}`">Profile</RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'

const { user, isAuthenticated } = useAuthStore()
</script>
