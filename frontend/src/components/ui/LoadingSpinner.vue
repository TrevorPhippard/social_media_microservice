<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  border: 4px solid #eee;
  border-top: 4px solid #42b983;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
