<template>
  <article class="flex flex-col items-center">
    <common-article-card v-for="work in works" :key="work.sys.id" :work="work" />
  </article>
</template>

<script>
import Vue from 'vue'
import { createClient } from '@/plugins/contentful'

import CommonArticleCard from '@/components/CommonArticleCard.vue'

export default Vue.extend({
  components: {
    CommonArticleCard
  },
  async asyncData ({ params }) {
    const works = await createClient().getEntries({
      'content_type': 'work',
      query: params.keyword,
      order: '-sys.createdAt'
    })

    return {
      works: works.items
    }
  }
})
</script>
