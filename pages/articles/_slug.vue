<template>
  <div class="tramlined">
    <article
      class="article-detail flex justify-between"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <!-- ARTICLE -->
      <div class="article-body">
        <TheTags :tags="article.tags" />

        <!-- Heading -->
        <h1 class="" itemprop="name headline">
          {{ article.title }}
        </h1>
        <h2 class="text-gray-500 no-top mb-8" itemprop="name headline">
          {{ article.subtitle }}
        </h2>

        <AuthorInfo :article="article" :show-updated="true" />

        <hr class="my-8" />

        <!-- Lead -->
        <!-- eslint-disable-next-line -->
        <div class="main-text" v-html="article.main_text" />
      </div>

      <!-- IMAGE -->
      <div class="article-prevent-image-stretch pl-4 md:pl-8 lg:pl-16">
        <img :src="article.main_img" :alt="article.title" />
      </div>
    </article>
  </div>
</template>

<script>
import 'highlight.js/styles/base16/ia-dark.css'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import AuthorInfo from '~/components/AuthorInfo.vue'
hljs.registerLanguage('javascript', javascript)

const formatDatetime = (dt) => {
  const localeStr = new Date(dt).toLocaleString()
  const tidiedUp = localeStr.replace(',', ' @').slice(0, -3)
  return tidiedUp
}

export default {
  components: {AuthorInfo},

  async asyncData({ $http, env, params }) {
    const prefix = env.apiPrefix
    const articlesObj = await $http.$get(
      `${prefix}/items/article?fields=*,tags.tag_id.*&filter[slug][_eq]=${params.slug}`
    )
    const article = articlesObj.data[0]

    article.main_img = `${prefix}/assets/${article.main_img}`
    article.author_img = `${prefix}/assets/${article.author_img}`
    article.date_created = formatDatetime(article.date_created)
    article.date_updated = formatDatetime(article.date_updated)

    return { article }
  },

  data() {
    return {
      popularArticles: [],
      numberOfPopularArticlesToShow: 3,
    }
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },

  created() {
    // this.getPopularArticles()
  },

  mounted() {
    // Syntax highlighting for code blocks
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el)
    })
  },

  methods: {
    // ordered by date, excluding 'exclude' list, first random 'numberToShow' articles chosen
    getPopularArticles() {
      // const innerthis = this
      // this.$content('articles')
      //   .where({ stub: { $nin: [this.article.slug] } })
      //   .limit(this.numberOfPopularArticlesToShow)
      //   .sortBy({ key: 'createdAt', direction: 'desc' })
      //   .fetch()
      //   .then((articles) => {
      //     this.popularArticles = []
      //     // fix images
      //     articles.forEach((article) => {
      //       console.log('article', article) // eslint-disable-line no-console
      //       article.createdAt = innerthis.$formatDate(article.createdAt)
      //       article.img = require(`@/assets/img/${article.img}`)
      //       article.author.img = require(`@/assets/img/${article.author.img}`)
      //       this.popularArticles.push(article)
      //     })
      //     return true
      //   })
    },
  },
}
</script>

<style scoped>
article.article-detail {
  width: 100%;
  max-width: 100%;
  display: flex;

  & .article-body {
    flex: 1;
    overflow: hidden;

    & .tags {
      opacity: 0.33;
    }
    
    & .main-text {
      max-width: 100%;

      & .nuxt-content {
        max-width: 400px;
      }
    }
  }

  & .article-prevent-image-stretch {
    flex: 0 0 500px;
    text-align: right;

    & img {
      width: 100%;
    }
  }
}

.code-label {
  margin-top: 1rem;
  background-color: #333;
  color: #eee;
  text-align: right;
  padding-right: 0.5rem;
}
</style>
