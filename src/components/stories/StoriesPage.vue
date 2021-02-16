<template>
  <div v-if="page && page.id">
    <div
      class="transform bg-white w-96 w-full h-196 origin-center"
      :class="{ ['md:scale-95 opacity-30']: !active }"
      @click="emitActive()"
    >
      <slot>
        <template v-for="(item, i) in page.data" :key="i">
          <template v-if="item.type === 'image'">
            <div class="" :style="`background: url(${item.src})`"></div>
          </template>
          <template v-if="item.type === 'text'">
            <div class="" v-html="item.value"></div>
          </template>
          <div></div>
        </template>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { IPage } from '~/composable/data/users'

export default defineComponent({
  props: {
    page: {
      type: Object as () => IPage,
      default: () => ({}),
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup({ page }, { emit }) {
    const emitActive = () => {
      emit('active', page.id)
    }

    return { emitActive }
  },
})
</script>

<style lang="postcss"></style>
