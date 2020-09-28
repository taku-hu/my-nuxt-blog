<template>
  <common-article-frame :work="work">
    <div class="mb-10 hidden md:block">
      <ul class="flex flex-wrap justify-center">
        <li v-for="tag in work.fields.tag" :key="tag.fields.name" class="m-2">
          <nuxt-link
            class="bg-blue-400 rounded shadow-sm text-xs font-bold text-white p-2"
            :to="`/tag/${tag.sys.id}`"
          >
            <fa :icon="faTags" />
            {{ tag.fields.name }}
          </nuxt-link>
        </li>
      </ul>
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
