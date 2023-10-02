<template>
  <div
    class="flex flex-col flex-shrink-0 justify-between p-2 max-w-[150px] rounded-2xl border-2 border-gray-200 bg-gray-50 hover:bg-gray-100">
    <div class="p-6">
      <img
        class="w-full max-h-20 flex-1 object-contain"
        src="https://www.freepnglogos.com/uploads/coca-cola-png/can-coca-cola-fearoftheblackwolf-deviantart-26.png"
        alt="product image" />
    </div>

    <div class="w-full flex flex-col gap-2 justify-between">
      <div class="flex items-center justify-between">
        <div
          class="flex items-center justify-center border-2 border-dashed rounded-full border-red-500 px-1 py-0.5">
          <span class="text-[8px] font-bold text-red-500 flex-shrink-0">Best seller</span>
        </div>
        <button
          type="button"
          class="p-1 flex items-center justify-center rounded-full bg-zinc-900 text-white">
          <Icon icon="material-symbols:add" height="16" />
          <p class="sr-only">Add to Cart</p>
        </button>
      </div>
      <div class="flex flex-col gap-0.5">
        <strong class="text-lg leading-6 text-left font-bold text-zinc-900">$6.99</strong>
        <p
          class="text-sm font-semibold text-zinc-500 w-xs text-ellipsis overflow-hidden line-clamp-1 lin">
          Coca Cola Classic | Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Facilis, nihil?
        </p>
        <span class="text-xs text-zinc-400">500 ml</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
