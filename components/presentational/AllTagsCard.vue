<template>
  <common-home-card :card-data="cardData">
    <template v-slot:titleImage>
      <img class="w-20 mr-2" :src="require('@/assets/images/tags.svg')">
    </template>
    <common-tags :tags="tags" />
  </common-home-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry, Field } from 'contentful/index'
import { faTags } from '@fortawesome/free-solid-svg-icons'

import CommonHomeCard from '@/components/commonPresentational/CommonHomeCard.vue'

export default Vue.extend({
  components: {
    CommonHomeCard
  },
  props: {
    tags: {
      type: Array as PropType<Entry<Field>[]>,
      required: true
    }
  },
  computed: {
    // static
    faTags: () => faTags,
    cardData: () => ({
      title: 'タグ',
      subtitle: 'Tags'
    })
  }
})
</script>
