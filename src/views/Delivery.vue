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

  <section class="flex flex-col gap-4 w-full mt-4">
    <div class="inline-flex items-center justify-between px-4">
      <h2 class="text-sm text-zinc-800 font-bold">Top Deals for You</h2>
      <button
        type="button"
        class="text-green-600 font-bold text-xs outline-none bg-transparent">
        View More
      </button>
    </div>

    <div class="px-2 w-full max-w-lg">
      <div
        class="bg-green-900 text-zinc-100 w-full rounded-3xl overflow-hidden px-4 py-6 relative">
        <p class="text-lg font-semibold mb-6">$0 pickup and delivery</p>

        <ul class="text-xs text-gray-50 relative z-10">
          <li class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sed.</li>
          <li class="mb-2">
            Autem quaerat corporis sapiente voluptate dolorem incidunt distinctio tempore
            laborum?
          </li>
          <li class="mb-2">Magnam beatae cum minima aut at nihil delectus, veritatis earum!</li>
          <li class="mb-2">
            Eaque, aliquid quibusdam earum rem laborum commodi totam amet asperiores?
          </li>
        </ul>
        <Icon
          icon="map:grocery-or-supermarket"
          height="128"
          class="opacity-60 blur-sm text-green-600 fill-current absolute -right-8 top-1/3" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ProductListing from '../components/card/ProductListing.vue';
</script>

<style scoped>
  .all {
    @apply text-white bg-green-500;
  }
</style>
