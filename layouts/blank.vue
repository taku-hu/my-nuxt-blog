<template>
  <nuxt />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    this.getInnerVh()
    window.addEventListener('resize', () => {
      this.getInnerVh()
    })
  },
  methods: {
    getInnerVh() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
})
</script>

<style lang="scss">
html {
  @apply text-gray-800;
  font-size: calc(62.5% + 0.25vw);
  font-family: 'Poppins', sans-serif;
}
</style>
