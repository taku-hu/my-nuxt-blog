<template>
  <common-article-frame id="article" class="relative" :work="work">
    <common-tags :tags="work.fields.tag" />

    <div class="article__content" v-html="$md.render(work.fields.content)" />

    <disqus
      shortname="taku-hu-blog"
      :identifier="work.fields.slug"
      :url="`https://taku-hu-blog.netlify.app/work/${work.fields.slug}`"
    />

    <a class="absolute right-0 bottom-0 m-3 underline text-lg hover:opacity-75 md:m-8" href="#article">
      <fa-layers class="align-middle">
        <fa :icon="faUndo" />
      </fa-layers>
      Back to top
    </a>
  </common-article-frame>
</template>

<script>
import Vue from 'vue'
import { createClient } from '@/plugins/contentful'
import Prism from '@/plugins/prism'
import { faUndo, faTags } from '@fortawesome/free-solid-svg-icons'

import CommonArticleFrame from '@/components/commonPresentational/CommonArticleFrame.vue'
import CommonTags from '@/components/commonPresentational/CommonTags.vue'

export default Vue.extend({
  component: {
    CommonArticleFrame,
    CommonTags
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
  computed: {
    faUndo: () => faUndo,
    faTags: () => faTags
  },
  mounted() {
    this.prismHighlight()
  },
  methods: {
    prismHighlight() {
      Prism.highlightAll()
    }
  },
  head() {
    return {
      title: this.work.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: this.work.fields.subtitle }
      ]
    }
  }
})
</script>

<style lang="scss">
.article {
  &__table-of-contents {
    @apply shadow-md;
    font-size: 1.2rem;
    border-top: $primary 0.5rem solid;
    padding: 1rem 3rem;
    margin: 0 auto 1.2rem;
    ul {
      @apply text-gray-700;
      text-align: left;
      list-style-type: disc;
      li {
        margin-bottom: 1rem;
        a {
          @apply text-gray-700;
          font-weight: bold;
          text-decoration: none;
        }
        ul {
          padding-top: 1rem;
          padding-left: 2.4rem;
        }
      }
    }// ul
    .toc-header {
      @apply text-teal-400;
      position: relative;
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }// .toc-header
  }// __table-of-content
  &__content {
    text-align: left;
    margin-bottom: 4rem;
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
    }// a
    img {
      max-height: 100%;
      height: 20rem;
      margin: 0 auto;
    }// img

    ul.primary {
      @include check-list($primary);
    }// ul.primary
    ul.error {
      @include check-list($error);
    }// ul.primary
    .marker {
      background: linear-gradient(transparent 75%, rgba(247, 198, 104, 0.2) 75%, rgb(247, 104, 159) 85%, rgba(247, 198, 104, 0.2));
    }// .marker
  }// &__content
}// .article
</style>
