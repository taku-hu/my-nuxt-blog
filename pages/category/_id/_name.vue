<template>
  <article class="flex flex-col items-center">
    <common-article-types-card :icon-name="faAngleRight" :field="field" />
    <common-article-card v-for="work in works" :key="work.sys.id" :work="work" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { createClient } from '@/plugins/contentful'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

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
      'fields.category.sys.id': params.id,
      order: '-sys.createdAt'
    })
    return {
      works: works.items,
      field: {
        type: 'カテゴリー',
        name: params.name
      }
    }
  },
  computed: {
    // static
    faAngleRight: () => faAngleRight
  }
})
</script>
