<template>
  <div class="profile-layout">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
// This can act as a wrapper for nested routes like /profile/:id/followers
</script>

<style scoped>
.profile-layout {
  padding: 1rem;
  max-width: 700px;
  margin: auto;
}
</style>
