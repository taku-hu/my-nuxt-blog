<template>
  <div class="overflow-hidden">
    <all-header v-model="keywords" class="mb-1" @search-article="searchArticle" />

    <main id="main" class="max-w-full flex flex-col bg-gray-200 p-4 md:flex-row lg:px-40 lg:py-8">
      <div class="md:w-2/3 md:mr-4 lg:mr-8">
        <nuxt />
      </div>

      <div class="md:w-1/3">
        <all-self-introduce-card class="mb-4 lg:mb-8" />
        <all-categories-card :categories="categories" class="mb-4 lg:mb-8" />
        <all-tags-card :tags="tags" />
      </div>
    </main>

    <all-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '@/plugins/contentful'
import { EntryCollection, Entry, Field } from 'contentful/index'
import { faTags, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import AllSelfIntroduceCard from '@/components/presentational/AllSelfIntroduceCard.vue'
import AllCategoriesCard from '@/components/presentational/AllCategoriesCard.vue'
import AllTagsCard from '@/components/presentational/AllTagsCard.vue'
import AllHeader from '@/components/presentational/AllHeader.vue'
import AllFooter from '@/components/presentational/AllFooter.vue'

export default Vue.extend({
  components: {
    AllSelfIntroduceCard,
    AllCategoriesCard,
    AllTagsCard,
    AllHeader,
    AllFooter
  },
  data() {
    return {
      keywords: '',
      tags: [] as Entry<Field>[],
      categories: [] as Entry<Field>[]
    }
  },
  computed: {
    faTags: () => faTags,
    faAngleRight: () => faAngleRight
  },
  created() {
    this.setContentfulItem()
  },
  mounted() {
    this.setInnerVh()
  },
  methods: {
    searchArticle() {
      if(!this.keywords) {
        return
      }
      this.$router.push(`/search/${this.keywords}`)
    },
    setInnerVh() {
      const getInnerVh = () => {
        const vh = (window as Window).innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
      getInnerVh()
      window.addEventListener('resize', () => {
        getInnerVh()
      })
    },
    async setContentfulItem() {
      const [tags, categories]: EntryCollection<Field>[] = await Promise.all([
        createClient().getEntries({
          'content_type': 'tag',
          order: '-sys.createdAt'
        }),
        createClient().getEntries({
          'content_type': 'category',
          order: '-sys.createdAt'
        })
      ])

      this.tags = tags.items
      this.categories = categories.items
    }
  }
})
</script>

<style lang="scss">
html {
  @apply text-gray-800;
  font-size: calc(62.5% + 0.25vw);
  font-family: 'Poppins', sans-serif;
}
</style>
