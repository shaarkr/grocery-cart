<template>
  <div class="flex items-center justify-between p-4">
    <!-- Store Selector -->
    <div class="flex flex-col items-start">
      <p class="text-xs text-zinc-500">Selected store</p>

      <button
        type="button"
        class="flex items-center gap-1 text-md font-bold text-zinc-700 hover:cursor-pointer hover:text-zinc-900 focus:outline-none">
        <p>D-Mart Store</p>
        <Icon icon="solar:alt-arrow-down-line-duotone" height="12" />
      </button>
    </div>

    <!-- Action Items -->
    <div class="flex items-center gap-4">
      <!-- Search -->
      <button
        type="button"
        class="relative inline-flex items-center p-1 text-sm font-medium text-center text-zinc-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-600">
        <Icon icon="solar:minimalistic-magnifer-broken" height="16" />
        <span class="sr-only">Search</span>
      </button>

      <button
        type="button"
        class="relative inline-flex items-center p-1 text-sm font-medium text-center text-zinc-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-600">
        <Icon icon="solar:bag-3-line-duotone" height="16" />
        <span class="sr-only">Cart</span>
        <div
          class="absolute inline-flex items-center justify-center w-4 h-4 text-[6px] font-bold text-white bg-red-500 border-2 border-white rounded -top-1 -right-1 dark:border-gray-900">
          20
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
