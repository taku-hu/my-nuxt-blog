<template>
  <common-home-card :card-data="cardData">
    <template v-slot:titleImage>
      <img class="w-20 mr-2" :src="require('@/assets/images/selection.svg')">
    </template>
    <ul class="flex flex-col items-center">
      <li v-for="category in categories" :key="category.fields.name">
        <nuxt-link
          class="font-bold text-black opacity-50 text-xl mb-3"
          :to="`/category/${category.sys.id}`"
        >
          <fa :icon="faAngleRight" />
          {{ category.fields.name }}
        </nuxt-link>
      </li>
    </ul>
  </common-home-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry, Field } from 'contentful/index'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import CommonHomeCard from '@/components/CommonHomeCard.vue'

export default Vue.extend({
  components: {
    CommonHomeCard
  },
  props: {
    categories: {
      type: Array as PropType<Entry<Field>[]>,
      required: true
    }
  },
  computed: {
    faAngleRight: () => faAngleRight,
    cardData() {
      return {
        title: 'カテゴリー',
        subtitle: 'Categorys'
      }
    }
  }
})
</script>
