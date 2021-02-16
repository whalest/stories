<template>
  <div>
    <a
      href=""
      @click.prevent="showStory(item.id)"
      v-for="(item, i) in items"
      :key="i"
    >
      <StoriesUserPreview :name="item.name" :avatar="item.avatar" />
    </a>

    <StoriesStory ref="headerStories">
      <StoriesPage
        v-for="(page, i) in pages"
        :key="i"
        :page="page"
        :active="page.id === activePage"
        @active="activePage = $event"
      />
    </StoriesStory>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as data from '~/composable/data/users'

export default defineComponent({
  emits: ['active'],
  props: {},
  setup() {
    const items = ref(data.users)
    const pages = ref(data.pages)
    const headerStories = ref()
    const activePage = ref('')

    const showStory = (id: string) => {
      activePage.value = '233'
      headerStories.value?.open()
    }

    return { activePage, items, pages, showStory, headerStories }
  },
})
</script>

<style lang="postcss" scoped></style>
