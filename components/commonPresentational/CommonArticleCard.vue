<template>
  <common-article-frame :work="work">
    <div class="mb-10 hidden md:block">
      <common-tags :tags="work.fields.tag" />
    </div>
    <h3 class="subtitle text-gray-600 text-xl mb-10" v-html="work.fields.subtitle" />
    <nuxt-link
      class="border border-solid border-black font-bold transition duration-500 px-4 py-3 hover:bg-black hover:text-white"
      :to="`/work/${work.fields.slug}`"
    >
      READ MORE
    </nuxt-link>
  </common-article-frame>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry } from 'contentful/index'
import { faTags } from '@fortawesome/free-solid-svg-icons'

import CommonArticleFrame from '@/components/commonPresentational/CommonArticleFrame.vue'
import CommonTags from '@/components/commonPresentational/CommonTags.vue'

export default Vue.extend({
  components: {
    CommonArticleFrame,
    CommonTags
  },
  props: {
    work: {
      type: Object as PropType<Entry<any>>,
      required: true
    }
  },
  computed: {
    faTags: () => faTags
  }
})
</script>

<style lang="scss">
.subtitle {
  a {
    color: darken($secondary, 20);
    text-decoration: underline;
  }
}
</style>
