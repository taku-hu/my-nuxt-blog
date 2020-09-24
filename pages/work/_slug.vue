<template>
  <common-article-frame :work="work">
    <div class="article__content" v-html="$md.render(work.fields.content)" />
  </common-article-frame>
</template>

<script>
import Vue from 'vue'
import { createClient } from '@/plugins/contentful'
import Prism from '@/plugins/prism'

import CommonArticleFrame from '@/components/CommonArticleFrame'

export default Vue.extend({
  component: {
    CommonArticleFrame
  },
  async asyncData({ params }) {
    const works = await createClient().getEntries({
      'content_type': 'work',
      'fields.slug': params.slug
    })
    return {
      work: works.items[0]
    }
  },
  mounted() {
    Prism.highlightAll()
  }
})
</script>

<style lang="scss">
  @import '@/assets/scss/fragments.scss';

  .article {
    &__content {
      text-align: left;
      h1 {
        font-size: 2.25rem;
        font-weight: bold;
        text-align: center;
        &:first-letter {
          color: $primary;
          font-size: 3.5rem;
        }
      }// h1
      h2 {
        font-size: 1.75rem;
        font-weight: bold;
        border-left: $primary 0.5rem solid;
        padding: 1rem;
      }// h2
      h3 {
        font-size: 1.45rem;
        font-weight: bold;
        border-left: $secondary 0.5rem solid;
        padding: 1rem;
      }// h3
      h4 {
        font-size: 1.25rem;
        font-weight: bold;
        border-left: $primary 0.5rem solid;
        background-color: rgb(243, 243, 243);
        padding: 0.75rem;
      }// h4
      p {
        font-size: 1.2rem;
        line-height: 1.6;
      }// p
      a {
        color: darken($secondary, 20);
        text-decoration: underline;
      }
      img {
        max-height: 100%;
        height: 20rem;
        margin: 0 auto;
      }
      ul.primary {
        @include check-list($primary);
      }// ul.primary
      ul.error {
        @include check-list($error);
      }// ul.primary
    }// &__content
  }// .article
</style>
