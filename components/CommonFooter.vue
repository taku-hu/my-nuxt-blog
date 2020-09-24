<template>
  <footer class="w-100 bg-teal-400">
    <p class="text-white text-center text-lg py-3">
      copyright© 2020 All rights reserved.
      <a class="transition ease-in duration-500 underline" href="https://github.com/taku-hu" target="_blank">
        <fa :icon="faMousePointer" />Takuto Takeuchi
      </a>
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

import { faMousePointer } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  props: {
    keywords: {
      type: String,
      default: ''
    }
  },
  computed: {
    faMousePointer: () => faMousePointer
  },
  methods: {
    updateKeywords(event: Event) {
      if(event.target instanceof HTMLInputElement) {
        this.$emit('input', event.target.value)
      }
    },
    searchArticle() {
      this.$emit('search-article')
    }
  }
})
</script>
