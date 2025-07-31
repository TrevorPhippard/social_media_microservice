<template>
    <div class="flex min-h-screen">
        <Sidebar />
        <div class="flex-1 flex flex-col p-2">
          <Navbar/>
          <br/>
            <RouterView />
        </div>
      </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue';
import Sidebar from './Sidebar.vue';
// import Navbar from '@/components/layout/Navbar.vue'
// import Sidebar from '@/components/layout/Sidebar.vue'
</script>
