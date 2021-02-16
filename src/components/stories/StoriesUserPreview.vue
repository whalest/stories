<template>
  <div class="flex items-center space-x-4 group">
    <StoriesCircle :src="avatar" class="flex-shrink-0" />
    <div v-html="name" class="w-24 font-serif text-base leading-5"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'StoriesUserPreview',
  props: {
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss" scoped></style>
