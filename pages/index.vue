<template>
  <article class="flex flex-col items-center">
    <common-article-card v-for="work in works" :key="work.sys.id" :work="work" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '@/plugins/contentful'

import CommonArticleCard from '@/components/commonPresentational/CommonArticleCard.vue'

export default Vue.extend({
  components: {
    CommonArticleCard
  },
  async asyncData() {
    const works = await createClient().getEntries({
      'content_type': 'work',
      order: '-sys.createdAt'
    })
    return {
      works: works.items
    }
  }
})
</script>
