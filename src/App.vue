<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './index.css'

import Header from "@/components/Header.vue";
</script>

<template>
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

    <Header />

    <RouterView />

  </div>
</div>
</template>

<style scoped>
</style>
