<template>
  <div class="bg-gray-200 overflow-hidden">
    <common-header
      v-model="keywords"
      class="mb-1"
      @search-article="searchArticle"
    />

    <main id="main" class="max-w-full flex flex-col py-10 px-4 md:flex-row lg:px-40">
      <div class="md:w-2/3 md:mr-4 lg:mr-8">
        <nuxt />
      </div>

      <div class="md:w-1/3">
        <common-self-introduce-card class="mb-4 lg:mb-8" />
        <common-categories-card :categories="categories" class="mb-4 lg:mb-8" />
        <common-tags-card :tags="tags" />
      </div>
    </main>

    <common-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '@/plugins/contentful'
import { EntryCollection, Entry, Field } from 'contentful/index'
import { faTags, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import CommonSelfIntroduceCard from '@/components/CommonSelfIntroduceCard.vue'
import CommonCategoriesCard from '@/components/CommonCategoriesCard.vue'
import CommonTagsCard from '@/components/CommonTagsCard.vue'
import CommonHeader from '@/components/CommonHeader.vue'
import CommonFooter from '@/components/CommonFooter.vue'

export default Vue.extend({
  components: {
    CommonSelfIntroduceCard,
    CommonCategoriesCard,
    CommonTagsCard,
    CommonHeader,
    CommonFooter
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
  async created() {
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
  },
  mounted() {
    const getInnerVh = () => {
      const vh = (window as Window).innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    getInnerVh()
    window.addEventListener('resize', () => {
      getInnerVh()
    })
  },
  methods: {
    searchArticle() {
      if(!this.keywords) {
        return
      }
      this.$router.push(`/search/${this.keywords}`)
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
