<template>
  <div class="container py-5 flex flex-col min-h-screen">
    <header class="bg-gray-100 w-full h-20 rounded"></header>
    <div class="pt-10 pb-5 flex space-x-5 max-w-full overflow-x-auto">
      <StoriesArea />
    </div>

    <main
      class="flex-1 py-5 h-full flex md:flex-row flex-col md:space-x-5 space-y-5 md:space-y-0"
    >
      <aside class="w-full max-w-xs">
        <div class="bg-gray-100 rounded h-80"></div>
      </aside>
      <div class="flex-1">
        <div class="bg-gray-100 rounded h-5 w-4/6 mb-5"></div>
        <div class="bg-gray-100 rounded h-5 w-3/6 mb-5"></div>
        <div class="bg-gray-100 rounded h-5 w-5/6 mb-5"></div>
        <div class="bg-gray-100 rounded h-5 w-4/6 mb-5"></div>
        <div class="bg-gray-100 rounded h-5 w-3/6 mb-5"></div>
        <div class="bg-gray-100 rounded h-5 w-5/6 mb-5"></div>
      </div>
    </main>
    <footer class="bg-gray-100 w-full h-20 rounded"></footer>
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
