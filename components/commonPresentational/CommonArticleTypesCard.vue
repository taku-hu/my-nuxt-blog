<template>
  <div class="w-full shadow-md bg-white text-center font-bold p-4 mb-4 lg:mb-8">
    <p class="flex justify-center items-center">
      <fa :icon="iconName" />&nbsp;{{ field.type }}：<span class="text-gray-600 text-xl">{{ field.name }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { createClient } from '@/plugins/contentful.ts'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

interface FieldType {
  type: string;
  name: string;
}

export default Vue.extend({
  props: {
    field: {
      type: Object as PropType<FieldType>,
      required: true
    },
    iconName: {
      type: Object as PropType<IconDefinition>,
      required: true
    }
  },
  async asyncData ({ params }) {
    const works = await createClient().getEntries({
      'content_type': 'work',
      'fields.tag.sys.id': params.id,
      order: '-sys.createdAt'
    })

    return {
      works: works.items
    }
  }
})
</script>
