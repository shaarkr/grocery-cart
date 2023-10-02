<template>
  <div
    @click.capture="emit('close')"
    class="fixed inset-0 z-[100] backdrop-blur-sm backdrop-brightness-50" />

  <div
    class="transition duration-150 fixed bottom-0 left-0 z-[100] w-full pt-8 rounded-t-lg bg-white before:cursor-pointer before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-12 before:bg-gray-200 before:rounded-lg">
    <!-- Controls -->
    <div class="w-full grid grid-cols-5 items-center text-center px-4 py-2">
      <button
        type="button"
        @click="emit('close')"
        class="p-2 bg-transparent outline-none text-zinc-900">
        <Icon icon="mdi:close" height="18" />
        <p class="sr-only">Close</p>
      </button>
      <h1
        class="text-sm col-span-3 font-bold leading-6 text-zinc-900 line-clamp-1 overflow-hidden text-ellipsis">
        <slot name="title">Sheet Title</slot>
      </h1>
      <button
        type="button"
        @click="emit('reset')"
        class="p-2 bg-transparent outline-none font-semibold text-green-600 text-xs">
        <span>Clear all</span>
      </button>
    </div>

    <!-- Content -->
    <div class="overflow-y-auto max-h-[60vh] my-4">
      <slot>Sheet Content</slot>
    </div>

    <!-- Footer -->
    <footer class="p-4 flex items-center justify-between gap-4 flex-wrap-reverse">
      <button
        type="button"
        @click="emit('apply')"
        class="w-full flex items-center justify-center px-2 py-4 text-white font-semibold bg-zinc-900 outline-none rounded-full overflow-hidden focus:bg-zinc-950 focus:ring-4 focus:outline-none focus:ring-primary-600">
        <span>Apply</span>
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['close', 'reset', 'apply']);
</script>

<style scoped></style>
