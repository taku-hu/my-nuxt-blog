<template>
  <article class="flex flex-col items-center">
    <common-article-types-card :icon-name="faSearch" :field="field" />
    <common-article-card v-for="work in works" :key="work.sys.id" :work="work" />
  </article>
</template>

<script>
import Vue from 'vue'
import { createClient } from '@/plugins/contentful'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import CommonArticleCard from '@/components/commonPresentational/CommonArticleCard.vue'
import CommonArticleTypesCard from '@/components/commonPresentational/CommonArticleTypesCard.vue'

export default Vue.extend({
  components: {
    CommonArticleCard,
    CommonArticleTypesCard
  },
  async asyncData ({ params }) {
    const works = await createClient().getEntries({
      'content_type': 'work',
      query: params.keyword,
      order: '-sys.createdAt'
    })

    return {
      works: works.items,
      field: {
        type: '検索ワード',
        name: params.keyword
      }
    }
  },
  computed: {
    faSearch: () => faSearch
  }
})
</script>
