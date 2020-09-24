<template>
  <common-home-card :card-data="cardData">
    <template v-slot:titleImage>
      <img class="w-20 mr-2" :src="require('@/assets/images/tags.svg')">
    </template>
    <ul class="flex flex-wrap justify-center">
      <li v-for="tag in tags" :key="tag.fields.name" class="m-2">
        <nuxt-link
          class="bg-blue-400 rounded shadow-sm text-xs font-bold text-white p-2"
          :to="`/tag/${tag.sys.id}`"
        >
          <fa :icon="faTags" />
          {{ tag.fields.name }}
        </nuxt-link>
      </li>
    </ul>
  </common-home-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry, Field } from 'contentful/index'
import { faTags } from '@fortawesome/free-solid-svg-icons'

import CommonHomeCard from '@/components/CommonHomeCard.vue'

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
    faTags: () => faTags,
    cardData() {
      return {
        title: 'タグ',
        subtitle: 'Tags'
      }
    }
  }
})
</script>
