<template>
  <div class="auth-layout">

    <div class="auth-card">
      <RouterView />

    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}
.auth-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 300px;
}
</style>
