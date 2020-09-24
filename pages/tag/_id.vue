<template>
  <article class="flex flex-col items-center">
    <common-article-card v-for="work in works" :key="work.sys.id" :work="work" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '@/plugins/contentful.ts'

import CommonArticleCard from '@/components/CommonArticleCard.vue'

export default Vue.extend({
  components: {
    CommonArticleCard
  },
  async asyncData ({ params }) {
    const works = await createClient().getEntries({
      'content_type': 'work',
      'fields.tag.sys.id': params.id,
      order: '-sys.createdAt'
    })

    return {
      works: works.items
    }
  }
})
</script>
