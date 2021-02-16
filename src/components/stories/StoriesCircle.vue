<template>
  <div>
    <div class="relative p-3px">
      <div
        class="absolute top-0 left-0 rounded-full w-14 h-14 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 animate-spin"
        style="animation-duration: 2s"
      ></div>
      <div
        class="block transition ease-linear transform bg-white rounded-full p-3px group-hover:-rotate-12 group-hover:scale-105"
      >
        <img
          class="rounded-full w-11 h-11"
          :src="src"
          loading="lazy"
          width="44"
          height="44"
          placeholder
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    src: String,
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
})
</script>

<style lang="postcss" scoped></style>
