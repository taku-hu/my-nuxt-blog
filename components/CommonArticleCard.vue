<template>
  <common-article-frame :work="work">
    <h3 class="text-gray-600 text-xl mb-10">
      {{ work.fields.subtitle }}
    </h3>
    <nuxt-link
      class="border border-solid border-black font-bold transition duration-500 p-3 hover:bg-black hover:text-white"
      :to="`/work/${work.fields.slug}`"
    >
      READ MORE
    </nuxt-link>
  </common-article-frame>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry } from 'contentful/index'

import CommonArticleFrame from '@/components/CommonArticleFrame.vue'

export default Vue.extend({
  components: {
    CommonArticleFrame
  },
  props: {
    work: {
      type: Object as PropType<Entry<any>>,
      required: true
    }
  }
})
</script>
