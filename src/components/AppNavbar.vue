<template>
  <nav class="flex items-center justify-between px-4 border-b border-gray-200">
    <!-- Tabs -->
    <ul class="flex flex-wrap -mb-px gap-4 text-sm font-medium text-center">
      <li
        class="active transition duration-100 inline-flex items-center gap-2 py-2 text-zinc-500 hover:cursor-pointer hover:text-zinc-600 border-b-[3px] border-transparent hover:border-gray-500">
        <Icon icon="carbon:delivery" height="16" />
        <span>Delivery</span>
      </li>
      <li
        class="transition duration-100 inline-flex items-center gap-2 py-2 text-zinc-500 hover:cursor-pointer hover:text-zinc-600 border-b-[3px] border-transparent hover:border-gray-500">
        <Icon icon="carbon:delivery-parcel" height="16" />
        <span>Pickup</span>
      </li>
    </ul>

    <!-- Action -->
    <button
      type="button"
      class="relative inline-flex items-center p-1 text-sm font-medium text-center text-zinc-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-600">
      <Icon icon="solar:filters-line-duotone" height="16" />
      <span class="sr-only">Search</span>
    </button>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
  .active {
    @apply border-slate-700 text-zinc-900;
  }
</style>
