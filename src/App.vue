<script setup lang="ts">
  import AppHeader from './components/AppHeader.vue';
  import AppNavbar from './components/AppNavbar.vue';
  import Delivery from './views/Delivery.vue';
  import AppBottomNav from './components/AppBottomNav.vue';
</script>

<template>
  <AppHeader class="sticky top-0 bg-white z-50" />
  <AppNavbar class="sticky top-[72px] bg-white z-50" />
  <div class="pb-24">
    <Delivery />
  </div>
  <AppBottomNav />
</template>

<style scoped></style>
