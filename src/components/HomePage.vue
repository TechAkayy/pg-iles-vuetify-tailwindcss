<script setup lang="ts">
  import { getCurrentInstance } from 'vue'
  import vuetify from '@/plugins/vuetify'

  const app = getCurrentInstance().appContext.app
  app.use(vuetify)
</script>

<template>
  <!-- <div class="container mx-auto"> -->
  <v-app
    class="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50"
  >
    <v-main class="py-4">
      <HeroSection />
      <div class="container mx-auto pt-8">
        <LaunchSale class="mt-8" />
        <Suspense>
          <HotDeals class="mt-8" />
        </Suspense>
      </div>
    </v-main>
  </v-app>
  <!-- </div> -->
</template>

<style lang="scss">
  // @use '~/assets/vuetify/settings';
  // .my-button {
  //   height: settings.$button-height;
  // }
  // .v-btn {
  //   @media #{map-get(settings.$display-breakpoints, 'sm-and-down')} {
  //     font-size: 12px;
  //   }
  // }
</style>
