<script client:load lang="ts">
  // Move to WalkThrough.vue
  import '@/plugins/youtube.client'
</script>

<script setup lang="ts">
  import { getCurrentInstance } from 'vue'
  import vuetify from '@/plugins/vuetify'

  const app = getCurrentInstance().appContext.app
  app.use(vuetify)
</script>

<template>
  <div>
    <NavBar client:load />
    <div>
      <slot />
    </div>
  </div>
</template>

<style></style>
