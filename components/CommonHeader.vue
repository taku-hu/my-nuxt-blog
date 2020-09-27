<template>
  <header class="header flex flex-col justify-center bg-center bg-fixed bg-no-repeat bg-contain px-4 md:bg-right md:pl-40 md:pr-0">
    <div
      :class="[
        'fixed', 'top-0', 'inset-x-0', 'z-50', 'flex', 'justify-between', 'items-center', 'transition', 'duration-500', 'px-4', 'py-3', 'md:pl-40',
        { 'bg-teal-400': isScrollDown, 'py-8': !isScrollDown }
      ]"
    >
      <h1
        :class="[
          'font-bold',
          { 'text-white': isScrollDown}
        ]"
      >
        <nuxt-link to="/">
          Takeuchi's FrontEnd Blog
        </nuxt-link>
      </h1>
      <div>
        <fa-layers
          :class="[
            'fa-2x', 'align-middle',
            { 'text-white': isScrollDown}
          ]"
        >
          <fa :icon="faSearch" />
        </fa-layers>
        <input
          :class="[
            'text-xs', 'rounded', 'shadow-xl', 'focus:outline-none', 'p-2',
            { 'shadow-none': isScrollDown}
          ]"
          type="text"
          placeholder="Search"
          :value="keywords"
          @input="updateKeywords"
          @keypress.enter="searchArticle"
        >
      </div>
    </div>

    <div class="w-full pr-8 items-start md:pr-0">
      <h2 class="mb-10 md:mb-5">
        <span class="header__title1 font-black">Let's Dive Into The</span>
        <br>
        <span class="header__title2 leading-none font-black">
          Deep<br>
          FrontEnd World
        </span>
      </h2>
      <p class="text-xl font-bold leading-normal mb-16 md:mb-10">
        現役フロントエンドエンジニアによるWEB開発を中心としたブログです。<br>
        フロントエンドエンジニアのキャリア戦略や日々の業務や学習で得た学びを投稿しています。
      </p>
      <a
        class="font-bold rounded-full border-solid border-4 border-gray-800 cursor-pointer py-4 px-6 transition duration-500 hover:bg-gray-800 hover:text-white"
        @click="moveToPage"
      >
        {{ destination }}
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default Vue.extend({
  props: {
    keywords: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isScrollDown: false
    }
  },
  computed: {
    faSearch: () => faSearch,
    destination(): string {
      if(this.$route.path === '/') {
        return 'View Article'
      } else {
        return 'Back to Home'
      }
    }
  },
  mounted() {
    const target = document.querySelector('main')
    const observer = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting) {
        this.isScrollDown = true
      } else {
        this.isScrollDown = false
      }
    })
    if(target) {
      observer.observe(target)
    }
  },
  methods: {
    updateKeywords(event: Event) {
      if(event.target instanceof HTMLInputElement) {
        this.$emit('input', event.target.value)
      }
    },
    searchArticle() {
      this.$emit('search-article')
    },
    moveToPage() {
      if(this.destination === 'View Article') {
        location.href = '#main'
      } else {
        this.$router.push({ path: '/' })
      }
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
