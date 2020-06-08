<template>
  <div class="ml-3 relative">
    <div>
      <slot name="trigger"></slot>
    </div>
    <div v-if="items" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
      <div class="py-1 rounded-md bg-white shadow-xs">
        <slot name="items">
          <a
            v-for="item in items"
            :key="item"
            href="#"
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          >{{ item }}</a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    items: Array
  }
};
</script>