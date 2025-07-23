<!-- src/components/layout/Navbar.vue -->
<template>
  <nav class="navbar">
    <div class="container">
      <RouterLink to="/" class="logo">MySocial</RouterLink>

      <ul class="nav-links" v-if="isAuthenticated">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/explore">Explore</RouterLink></li>
        <li>
          <RouterLink to="/notifications"
            >Notifications<span v-if="unreadCount" class="badge">{{
              unreadCount
            }}</span></RouterLink
          >
        </li>
        <li><RouterLink :to="`/profile/${user?.id}`">Profile</RouterLink></li>
        <li><button @click="logout" class="btn-logout">Logout</button></li>
        <li>
          <button
            @click="toggleTheme"
            class="btn-theme"
            :aria-label="`Switch to ${themeStore.darkMode ? 'light' : 'dark'} mode`"
          >
            <span v-if="themeStore.darkMode">🌞</span>
            <span v-else>🌙</span>
          </button>
        </li>
      </ul>

      <ul class="nav-links" v-else>
        <li><RouterLink to="/auth/login">Login</RouterLink></li>
        <li><RouterLink to="/auth/register">Register</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notifications'
import { useThemeStore } from '@/stores/theme'

const userStore = useAuthStore()
const notificationStore = useNotificationStore()
const themeStore = useThemeStore()

const user = computed(() => userStore.user)
const isAuthenticated = computed(() => userStore.isAuthenticated)
// eslint-disable-next-line
const unreadCount = computed(() => notificationStore.notifications.length)
//.filter((n) => !n.read).length)

const logout = () => {
  userStore.logout()
}

const toggleTheme = () => {
  themeStore.toggleTheme()
}
</script>

<style scoped>
.navbar {
  background: var(--color-bg, #42b983);
  color: white;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0;
  margin: 0;
}

.nav-links li {
  position: relative;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.nav-links a:hover {
  opacity: 0.8;
}

.btn-logout {
  background: transparent;
  border: 1px solid white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: 600;
}

.btn-logout:hover {
  background: white;
  color: var(--color-bg, #42b983);
}

.btn-theme {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  color: white;
  padding: 0;
}

.badge {
  background: #ff3b30;
  border-radius: 12px;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0 6px;
  position: absolute;
  top: -6px;
  right: -10px;
  min-width: 20px;
  text-align: center;
}
</style>
