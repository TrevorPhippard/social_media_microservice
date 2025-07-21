<template>
  <div class="skeleton-card"></div>
</template>

<style scoped>
.skeleton-card {
  width: 100%;
  height: 100px;
  background: #ccc;
  animation: pulse 1.5s infinite ease-in-out;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
