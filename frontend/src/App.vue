<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './layouts/Navbar.vue'
</script>

<template>
  <header>
      <Navbar />

  </header>
  <RouterView />
</template>

<style scoped>
html.dark {
  background: #121212;
  color: #f0f0f0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  margin: 0 2rem 0 0;
  }

nav {
  width: 100%;
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  padding: 1rem 0;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

</style>
