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
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200"
        :class="{ active: !filterOptions }">
        <span>All Categories</span>
      </li>
      <li
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200 hover:bg-gray-200 transition duration-100"
        :class="{ active: filterOptions && filterOptions['categories'] === 'drinks' }">
        <Icon icon="carbon:drink-02" height="16" />
        <span class="mt-px">Drinks</span>
      </li>
      <li
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200 hover:bg-gray-200 transition duration-100"
        :class="{ active: filterOptions && filterOptions['categories'] === 'fast-food' }">
        <Icon icon="noto:shallow-pan-of-food" height="16" />
        <span class="mt-px">Fast Food</span>
      </li>
      <li
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200 hover:bg-gray-200 transition duration-100"
        :class="{
          active: filterOptions && filterOptions['categories'] === 'vegetables',
        }">
        <Icon icon="icon-park-twotone:vegetables" height="16" />
        <span class="mt-px">Vegetables</span>
      </li>
      <li
        class="inline-flex flex-shrink-0 items-center justify-between gap-1 px-3 py-2 rounded-full text-xs font-medium text-zinc-900 text-center border border-gray-200 hover:bg-gray-200 transition duration-100"
        :class="{ active: filterOptions && filterOptions['categories'] === 'snacks' }">
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

        <div class="h-32"></div>
        <Icon
          icon="map:grocery-or-supermarket"
          height="128"
          class="opacity-60 blur-sm text-green-600 fill-current absolute -z-10 -right-8 top-1/3" />
      </div>
    </div>
  </section>

  <Teleport to="#halfsheet" v-if="filter.open">
    <HalfSheet @close="filter.toggle" @apply="applyFilters" @reset="clearFilters">
      <template #title>Sort &amp; Filter</template>

      <form ref="filterEl" class="flex flex-col px-4">
        <!-- Max Deliverey Fee -->
        <section
          class="pt-2 pb-4 border-b-2 border-gray-100 flex flex-col items-start gap-2">
          <label
            for="delivery-fee"
            class="block w-full text-xs tracking-tight font-semibold text-zinc-900">
            Max Deliverey Fee
          </label>

          <ul
            class="inline-flex items-center justify-between w-full text-xs text-zinc-600">
            <li>$1</li>
            <li>$2</li>
            <li>$3</li>
            <li>$4</li>
            <li>$5</li>
          </ul>

          <div
            class="relative w-full after:absolute after:left-2 after:-top-1 bg-transparent after:h-3 after:border-l-2 after:border-zinc-600 after:border-dotted">
            <input
              type="range"
              name="delivery-fee"
              id="delivery-fee"
              class="w-full cursor-pointer"
              min="1"
              max="5"
              step="1" />
          </div>
        </section>

        <!-- Price Range -->
        <section class="py-4 border-b-2 border-gray-100 flex flex-col items-start gap-2">
          <label
            for="price-range"
            class="text-xs tracking-tight font-semibold text-zinc-900"
            >Price Range</label
          >

          <div
            class="w-full flex items-center justify-between gap-4 py-2"
            id="price-range">
            <div class="relative">
              <input
                type="radio"
                id="price-range-1"
                name="price-range"
                value="1"
                class="appearance-none opacity-0 absolute peer" />
              <label
                for="price-range-1"
                class="flex items-center justify-center text-[10px] cursor-pointer w-12 h-12 rounded-full bg-red-500 peer-checked:bg-red-700 peer-checked:border-red-900 text-white font-semibold"
                >$</label
              >
            </div>

            <div class="relative">
              <input
                type="radio"
                id="price-range-2"
                name="price-range"
                value="2"
                class="appearance-none opacity-0 absolute peer" />
              <label
                for="price-range-2"
                class="flex items-center justify-center text-[10px] cursor-pointer w-12 h-12 rounded-full bg-red-500 peer-checked:bg-red-700 peer-checked:border-red-900 text-white font-semibold"
                >$$</label
              >
            </div>

            <div class="relative">
              <input
                type="radio"
                id="price-range-3"
                name="price-range"
                value="3"
                class="appearance-none opacity-0 absolute peer" />
              <label
                for="price-range-3"
                class="flex items-center justify-center text-[10px] cursor-pointer w-12 h-12 rounded-full bg-red-500 peer-checked:bg-red-700 peer-checked:border-red-900 text-white font-semibold"
                >$$$</label
              >
            </div>

            <div class="relative">
              <input
                type="radio"
                id="price-range-4"
                name="price-range"
                value="4"
                class="appearance-none opacity-0 absolute peer" />
              <label
                for="price-range-4"
                class="flex items-center justify-center text-[10px] cursor-pointer w-12 h-12 rounded-full bg-red-500 peer-checked:bg-red-700 peer-checked:border-red-900 text-white font-semibold"
                >$$$$</label
              >
            </div>
          </div>
        </section>

        <!-- Categories -->
        <section class="py-4 border-b-2 border-gray-100 flex flex-col items-start gap-2">
          <label
            for="categories"
            class="block w-full text-xs tracking-tight font-semibold text-zinc-900">
            Categories
          </label>

          <ul
            class="flex flex-col items-start gap-3 mt-2 w-full text-xs text-zinc-900 font-medium">
            <li class="w-full inline-flex items-center justify-between gap-2">
              <label for="drinks" class="cursor-pointer inline-flex items-center gap-2">
                <Icon icon="carbon:drink-02" height="14" />
                <span class="mt-px">Drinks</span>
              </label>
              <input
                type="radio"
                name="categories"
                id="drinks"
                value="drinks"
                class="w-4 h-4 appearance-none transition duration-100 bg-gray-100 border-gray-300 rounded-full outline-zinc-900 checked:border-zinc-900 checked:border checked:after:h-2/3 checked:after:w-2/3 checked:after:rounded-full checked:after:bg-zinc-500 checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 relative cursor-pointer" />
            </li>
            <li class="w-full inline-flex items-center justify-between gap-2">
              <label
                for="fast-food"
                class="cursor-pointer inline-flex items-center gap-2">
                <Icon icon="noto:shallow-pan-of-food" height="16" />
                <span class="mt-px">Fast Food</span>
              </label>
              <input
                type="radio"
                name="categories"
                id="fast-food"
                value="fast-food"
                class="w-4 h-4 appearance-none transition duration-100 bg-gray-100 border-gray-300 rounded-full outline-zinc-900 checked:border-zinc-900 checked:border checked:after:h-2/3 checked:after:w-2/3 checked:after:rounded-full checked:after:bg-zinc-500 checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 relative cursor-pointer" />
            </li>
            <li class="w-full inline-flex items-center justify-between gap-2">
              <label
                for="vegetables"
                class="cursor-pointer inline-flex items-center gap-2">
                <Icon icon="icon-park-twotone:vegetables" height="16" />
                <span class="mt-px">Vegetables</span>
              </label>
              <input
                type="radio"
                name="categories"
                id="vegetables"
                value="vegetables"
                class="w-4 h-4 appearance-none transition duration-100 bg-gray-100 border-gray-300 rounded-full outline-zinc-900 checked:border-zinc-900 checked:border checked:after:h-2/3 checked:after:w-2/3 checked:after:rounded-full checked:after:bg-zinc-500 checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 relative cursor-pointer" />
            </li>
            <li class="w-full inline-flex items-center justify-between gap-2">
              <label for="snacks" class="cursor-pointer inline-flex items-center gap-2">
                <Icon icon="ion:fast-food-outline" height="16" />
                <span class="mt-px">Snacks</span>
              </label>
              <input
                type="radio"
                name="categories"
                id="snacks"
                value="snacks"
                class="w-4 h-4 appearance-none transition duration-100 bg-gray-100 border-gray-300 rounded-full outline-zinc-900 checked:border-zinc-900 checked:border checked:after:h-2/3 checked:after:w-2/3 checked:after:rounded-full checked:after:bg-zinc-500 checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 relative cursor-pointer" />
            </li>
          </ul>
        </section>
      </form>
    </HalfSheet>
  </Teleport>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import ProductListing from '../components/card/ProductListing.vue';
  import HalfSheet from '../components/halfsheet/HalfSheet.vue';

  type Props = {
    filter: { open: boolean; toggle: () => void };
  };

  const props = defineProps<Props>();

  const emit = defineEmits(['apply']);

  function clearFilters() {
    console.log('clearing all filters...');
    filterOptions.value = null;
  }

  const filterEl = ref(null);

  const filterOptions = ref<any>(null);

  function applyFilters() {
    if (!filterEl.value) return;

    const formData = new FormData(filterEl.value);

    let options: any = {};
    for (const [key, value] of formData.entries()) {
      options[key] = value;
    }

    console.log('applying filters: ', options);

    filterOptions.value = options;

    props.filter.toggle();
  }
</script>

<style scoped>
  .active {
    @apply text-white bg-green-500;
  }
</style>
