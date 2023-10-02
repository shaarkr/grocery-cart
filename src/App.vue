<script setup lang="ts">
  import AppHeader from './components/AppHeader.vue';
  import AppNavbar from './components/AppNavbar.vue';
  import Delivery from './views/Delivery.vue';
  import AppBottomNav from './components/AppBottomNav.vue';
  import { computed, ref } from 'vue';

  const isFilterOpen = ref(false);

  function toggleFilter() {
    isFilterOpen.value = !isFilterOpen.value;
  }

  const filterControls = computed(() => ({
    open: isFilterOpen.value,
    toggle: toggleFilter,
  }));
</script>

<template>
  <AppHeader class="sticky top-0 bg-white z-50" />
  <AppNavbar class="sticky top-[72px] bg-white z-50" @filter="toggleFilter" />
  <div class="pb-24">
    <Delivery :filter="filterControls" />
  </div>
  <AppBottomNav />
</template>

<style scoped></style>
