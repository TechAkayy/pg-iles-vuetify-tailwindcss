<script setup lang="ts">
  import site from '@/site'

  const { name, logo } = site
</script>

<template>
  <a data-pg-name="Logo" class="flex items-center sm:flex-row" href="/">
    <v-icon class="text-4xl" :icon="logo" />
    <h5 class="font-extrabold font-serif ml-2 mt-4 text-2xl">{{ name }}</h5>
  </a>
</template>

<style scoped></style>
