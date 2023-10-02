<template>
  <div
    class="px-4 py-2 fixed z-10 bottom-0 left-0 w-full bg-white flex items-center justify-between gap-4">
    <!-- Home -->
    <button
      class="transition duration-100 p-2 flex flex-col items-center gap-1 outline-none bg-transparent font-medium text-xs text-zinc-600 active:text-green-600 hover:text-green-500">
      <Icon icon="solar:home-2-line-duotone" height="20" />
      <span>Home</span>
    </button>

    <!-- Explore -->
    <button
      class="transition duration-100 p-2 flex flex-col items-center gap-1 outline-none bg-transparent font-medium text-xs text-zinc-600 active:text-green-600 hover:text-green-500">
      <Icon icon="solar:settings-minimalistic-broken" height="20" />
      <span>Explore</span>
    </button>

    <!-- Deals -->
    <button
      class="transition duration-100 p-2 flex flex-col items-center gap-1 outline-none bg-transparent font-medium text-xs text-zinc-600 active:text-green-600 hover:text-green-500">
      <Icon icon="solar:tag-broken" height="20" />
      <span>Deals</span>
    </button>

    <!-- Favourites -->
    <button
      class="transition duration-100 p-2 flex flex-col items-center gap-1 outline-none bg-transparent font-medium text-xs text-zinc-600 active:text-green-600 hover:text-green-500">
      <Icon icon="solar:heart-broken" height="20" />
      <span>Favourites</span>
    </button>

    <!-- Profile -->
    <button
      class="transition duration-100 p-2 flex flex-col items-center gap-1 outline-none bg-transparent font-medium text-xs text-zinc-600 active:text-green-600 hover:text-green-500">
      <Icon icon="solar:user-circle-line-duotone" height="20" />
      <span>Profile</span>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
