<template>
  <div
    v-if="page && page.id"
    class="relative w-full transition origin-center transform bg-white w-96 h-196"
    :class="{
      ['scale-95 z-100']: !active,
      ['z-90']: active,
    }"
    @click="emitActive"
    ref="root"
  >
    <div
      class="absolute inset-0 w-full h-full bg-black bg-opacity-60 z-101"
      v-if="!active"
    ></div>

    <div>
      <slot>
        <template v-for="(item, i) in page.data" :key="i">
          <template v-if="item.type === 'image'">
            <div
              class="absolute w-full h-full"
              :style="`background: url(${item.src})`"
            ></div>
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
import {
  defineComponent,
  nextTick,
  watchEffect,
  ref,
  computed,
  watch,
} from 'vue'
import type { IPage } from '~/composable/data/users'

const throttle = <T extends []>(
  callback: (..._: T) => void,
  wait: number = 250
): ((..._: T) => void) => {
  const next = () => {
    timeout = clearTimeout(timeout as any) as undefined
    callback(...lastArgs)
  }
  let timeout: number | undefined
  let lastArgs: T

  return (...args: T) => {
    lastArgs = args

    if (timeout === void 0) {
      timeout = setTimeout(next, wait)
    }
  }
}

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
  setup(props, { emit }) {
    const root = ref<HTMLElement>()

    const isActive = computed(() => props.active)

    const emitActive = (e: Event) => {
      //const el = e.target as HTMLElement

      emit('active', props.page.id)

      scrollTo()
    }

    const scrollTo = throttle(() => {
      if (root.value && !isActive.value) {
        console.log('scrollto')
        root.value.scrollIntoView({ behavior: 'smooth', inline: 'center' })
      }
    })

    return { root, emitActive }
  },
})
</script>

<style lang="postcss"></style>
