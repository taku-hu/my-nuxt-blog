<template>
  <div class="article w-full bg-white text-center shadow-md px-10 py-12 mb-4 md:px-20 md:py-20 md:mb-8">
    <p class="font-bold mb-10">
      <fa :icon="faCalendarAlt" />
      {{ convertDate(work.fields.date) }}
      <span v-if="work.sys.updatedAt" class="font-bold">
        ({{ convertDate(work.sys.updatedAt) }} updated)
      </span>
    </p>
    <h2 class="font-bold text-gray-600 text-3xl mx-auto mb-2">
      <nuxt-link :to="`/work/${work.fields.slug}`">{{ work.fields.title }}</nuxt-link>
    </h2>
    <nuxt-link
      class="inline-block font-bold text-black opacity-50 text-2xl mb-5"
      :to="`/category/${work.fields.category.sys.id}?name=${work.fields.category.fields.name}`"
    >
      {{ work.fields.category.fields.name }}
    </nuxt-link>
    <nuxt-link
      :to="`/work/${work.fields.slug}`"
      class="block h-64 bg-center bg-cover bg-no-repeat mx-auto mb-10"
      :style="`background-image: url(${work.fields.media.fields.file.url})`"
    />

    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry } from 'contentful/index'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

import convertDate from '@/mixins/converDate'

export default Vue.extend({
  mixins: [convertDate],
  props: {
    work: {
      type: Object as PropType<Entry<any>>,
      required: true
    }
  },
  computed: {
    faCalendarAlt: () => faCalendarAlt
  }
})
</script>
