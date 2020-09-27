<template>
  <div class="article w-full bg-white text-center shadow-md px-10 py-20 mb-8 md:px-20">
    <p class="font-bold mb-10">
      <fa :icon="faCalendarAlt" />
      {{ convertDate(work.sys.createdAt) }}
      <span v-if="work.sys.updatedAt" class="font-bold">
        ({{ convertDate(work.sys.updatedAt) }} updated)
      </span>
    </p>
    <h2 class="font-bold text-gray-600 text-3xl mx-auto mb-2">
      <nuxt-link :to="`/work/${work.fields.slug}`">{{ work.fields.title }}</nuxt-link>
    </h2>
    <nuxt-link
      class="inline-block font-bold text-black opacity-50 text-2xl mb-5"
      :to="`/category/${work.fields.category.sys.id}`"
    >
      {{ work.fields.category.fields.name }}
    </nuxt-link>
    <nuxt-link
      :to="`/work/${work.fields.slug}`"
      class="block h-64 bg-center bg-cover bg-no-repeat mx-auto mb-10"
      :style="`background-image: url(${work.fields.media.fields.file.url})`"
    />
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

    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry } from 'contentful/index'
import { faCalendarAlt, faTags } from '@fortawesome/free-solid-svg-icons'

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
    faCalendarAlt: () => faCalendarAlt,
    faTags: () => faTags
  }
})
</script>
