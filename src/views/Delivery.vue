<template>
  <section class="p-4 mt-4">
    <h1
      class="text-2xl leading-8 font-bold text-zinc-900 max-w-xs first-letter:capitalize">
      Get started shopping with these items
    </h1>
    <p class="text-sm text-zinc-500 mt-2">
      Get all your favourites delivered to you in few minutes!
    </p>
  </section>

  <section class="px-4 my-2">
    <ul class="flex items-center gap-2 overflow-x-auto w-full py-2">
      <li
        class="all inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200">
        <span>All Categories</span>
      </li>
      <li
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer transition delay-100">
        <Icon icon="carbon:drink-02" height="16" />
        <span class="mt-px">Drinks</span>
      </li>
      <li
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer transition delay-100">
        <Icon icon="noto:shallow-pan-of-food" height="16" />
        <span class="mt-px">Fast Food</span>
      </li>
      <li
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer transition delay-100">
        <Icon icon="icon-park-twotone:vegetables" height="16" />
        <span class="mt-px">Vegetables</span>
      </li>
      <li
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200 hover:bg-gray-200 hover:cursor-pointer transition delay-100">
        <Icon icon="ion:fast-food-outline" height="16" />
        <span class="mt-px">Snacks</span>
      </li>
    </ul>
  </section>

  <section class="flex flex-shrink-0 gap-1 w-full overflow-x-auto px-1 py-2">
    <ProductListing />
    <ProductListing />
    <ProductListing />
    <ProductListing />
  </section>
</template>

<script setup lang="ts">
import ProductListing from '../components/card/ProductListing.vue'
</script>

<style scoped>
  .all {
    @apply text-white bg-green-500;
  }
</style>
