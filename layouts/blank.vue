<template>
  <nuxt />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    const getInnerVh = () => {
      const vh = (window as Window).innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    getInnerVh()
    window.addEventListener('resize', () => {
      getInnerVh()
    })
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
