<template>
  <div class="container flex flex-col min-h-screen py-5">
    <header class="w-full h-20 bg-gray-100 rounded"></header>
    <div class="max-w-full pt-10 pb-5 overflow-x-auto">
      <StoriesArea />
    </div>

    <main
      class="flex flex-col flex-1 h-full py-5 space-y-5 md:flex-row md:space-x-5 md:space-y-0"
    >
      <aside class="w-full max-w-xs">
        <div class="bg-gray-100 rounded h-80"></div>
      </aside>
      <div class="flex-1">
        <div class="w-4/6 h-5 mb-5 bg-gray-100 rounded"></div>
        <div class="w-3/6 h-5 mb-5 bg-gray-100 rounded"></div>
        <div class="w-5/6 h-5 mb-5 bg-gray-100 rounded"></div>
        <div class="w-4/6 h-5 mb-5 bg-gray-100 rounded"></div>
        <div class="w-3/6 h-5 mb-5 bg-gray-100 rounded"></div>
        <div class="w-5/6 h-5 mb-5 bg-gray-100 rounded"></div>
      </div>
    </main>
    <footer class="w-full h-20 bg-gray-100 rounded"></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {},
})
</script>

<style lang="postcss"></style>
