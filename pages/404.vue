<template>
  <header class="header flex flex-col justify-center bg-right bg-fixed bg-no-repeat bg-contain px-4 lg:pl-40 lg:pr-0">
    <div class="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-4 py-8 lg:pl-40">
      <h1 class="font-bold">
        <nuxt-link to="/">
          Takeuchi's FrontEnd Blog
        </nuxt-link>
      </h1>
      <div>
        <fa-layers class="fa-2x align-middle">
          <fa :icon="faSearch" />
        </fa-layers>
        <input
          v-model="keywords"
          class="text-xs rounded shadow-xl focus:outline-none p-2"
          type="text"
          placeholder="Search"
        >
      </div>
    </div>

    <div class="w-full pr-8 items-start lg:pr-0">
      <h2 class="mb-10 lg:mb-5">
        <span class="header__title1 font-black">Not Found</span>
        <br>
        <span class="header__title2 leading-none font-black">
          404<br>
          ERROR
        </span>
      </h2>
      <p class="text-xl font-bold leading-normal mb-16 lg:mb-10">
        申し訳ありません、お探しのページは見つかりませんでした。<br>
        ページは削除されたか、移動された可能性があります。<br>
      </p>
      <nuxt-link
        class="font-bold rounded-full border-solid border-4 border-gray-800 py-4 px-6 transition duration-500 hover:bg-gray-800 hover:text-white"
        to="/"
      >
        Back to Home
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  layout: 'blank',
  data() {
    return {
      keywords: ''
    }
  },
  computed: {
    faSearch: () => faSearch
  },
  methods: {
    searchArticle() {
      if(!this.keywords) {
        return
      }
      this.$router.push(`/search/${this.keywords}`)
    }
  }
})
</script>

<style lang="scss">
.header {
  height: calc(var(--vh, 1vh) * 100);
  background-image: url('~@/assets/images/frameworks.svg');
  &__title1 {
    font-size: 2.5rem;
  }
  &__title2 {
    font-size: 4rem;
  }
}
@media screen and (min-width:768px) {
  .header {
    &__title1 {
      font-size: 4rem;
    }
    &__title2 {
      font-size: 7rem;
    }
  }
}
</style>
