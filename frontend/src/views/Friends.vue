<!-- src/pages/Home.vue -->
<template>
  <section class="home">
    <h1>Friends</h1>
    <h2 class="text-2xl">Followers</h2>
    <Followers/>
    <h2 class="text-2xl">Following</h2>
    <Following/>
    PostDetails
  </section>
</template>

<script setup lang="ts">
import Followers from "@/components/organisms/Followers.vue";
  import Following from '@/components/organisms/Following.vue';

</script>
