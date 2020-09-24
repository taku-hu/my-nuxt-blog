<template>
  <common-home-card class="mb-8" :card-data="cardData">
    <template v-slot:titleImage>
      <img class="w-20 mr-2" :src="require('@/assets/images/profile.svg')">
    </template>
    <div class="flex flex-col items-center">
      <img class="w-4/5 mb-10" :src="require('@/assets/images/teaching-materials.png')">
      <p class="w-4/5 font-bold leading-relaxed">
        JavaScript/TypeScriptと、Vue・React等のJavaScriptフレームワークを使った開発を得意としている、教材マニアのフロントエンドエンジニアです。<br>
        優良無料問わず、プログラミング教材はひたすらやってみるのが好きです。<br>
        詳しいスキルやプロフィール、制作物に関しては<a class="text-blue-500 underline" href="https://taku-hu.firebaseapp.com/" target="_blank">こちら</a>をご覧ください。
      </p>
    </div>
  </common-home-card>
</template>

<script lang="ts">
import Vue from 'vue'

import CommonHomeCard from '@/components/CommonHomeCard.vue'

export default Vue.extend({
  components: {
    CommonHomeCard
  },
  computed: {
    cardData() {
      return {
        title: '自己紹介',
        subtitle: 'About Me'
      }
    }
  }
})
</script>
