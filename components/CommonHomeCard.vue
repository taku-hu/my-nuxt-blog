<template>
  <div class="w-full bg-white shadow-md py-10 mx-auto">
    <div class="flex justify-center items-center mb-10">
      <slot class="w-20" name="titleImage" />
      <div class="text-left">
        <h3 class="text-3xl font-bold">{{ cardData.title }}</h3>
        <p class="text-xl font-bold text-gray-600">{{ cardData.subtitle }}</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

type CardDataType = {
  title: string;
  subtitle: string;
}

export default Vue.extend({
  props: {
    cardData: {
      type: Object as PropType<CardDataType>,
      required: true
    }
  }
})
</script>
