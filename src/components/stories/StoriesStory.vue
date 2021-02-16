<template>
  <div v-if="show">
    <div class="absolute inset-0 bg-black bg-opacity-70" @click="close()"></div>
    <div
      class="absolute left-1/2 top-1/2 transform area -translate-x-1/2 -translate-y-1/2"
    >
      <div class="flex"><slot></slot></div>
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
