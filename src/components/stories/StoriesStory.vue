<template>
  <div v-if="show" class="absolute inset-0 w-full h-full overflow-hidden">
    <div class="absolute inset-0 bg-black bg-opacity-70" @click="close()"></div>
    <div
      class="absolute w-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 area"
    >
      <div class="flex max-w-full overflow-x-auto snap snap-x">
        <div class="px-5"></div>
        <slot name="page" classes="flex-shrink-0 snap-center"></slot>
        <div class="px-5"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    /* show: {
      type: Boolean,
      default: false,
    }, */
  },
  setup() {
    const show = ref(false)

    const open = () => (show.value = true)
    const close = () => (show.value = false)

    return { show, open, close }
  },
})
</script>
