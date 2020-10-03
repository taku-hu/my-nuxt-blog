<template>
  <ul class="flex flex-wrap justify-center">
    <li v-for="tag in tags" :key="tag.fields.name" class="m-2">
      <nuxt-link
        class="bg-blue-400 rounded shadow-sm text-xs font-bold text-white p-2"
        :to="`/tag/${tag.sys.id}/${tag.fields.name}`"
      >
        <fa :icon="faTags" />
        {{ tag.fields.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { Entry, Field } from 'contentful/index'
import { faTags } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  props: {
    tags: {
      type: Array as PropType<Entry<Field>[]>,
      required: true
    }
  },
  computed: {
    // static
    faTags: () => faTags
  }
})
</script>
