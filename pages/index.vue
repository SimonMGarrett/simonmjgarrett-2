<template>
  <div class="article-preview-cards tramlined">
    <div class="inner">
      <ArticlePreviewCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
        class="article-preview-card"
      >
      </ArticlePreviewCard>
    </div>
  </div>
</template>

<script>
// needs to be available for async
const formatDatetime = (dt) => {
  const localeStr = new Date(dt).toLocaleString()
  const tidiedUp = localeStr.replace(',', ' @').slice(0, -3)
  return tidiedUp
}

export default {
  async asyncData({ query, env, $http }) {
    // Build the query string from the query Object. If the query Object has
    // one key, the value is a string; if it has two, the value is an array.
    let qs = 'filter[status][_eq]=published&fields=*,tags.tag_id.*'

    // 1 - search
    if (query.search && typeof query.search === 'string') {
      qs += `&search=${query.search}`
    } else if (query.search && query.search.forEach) {
      query.search.forEach((item, indx) => {
        // if (indx > 0) {
        //   qs += '&'
        // }
        qs += `&search=${query.search}`
      })
    }

    // 2 - type of page [article | note]
    if (query.content_type && query.content_type === 'article') {
      qs += '&filter[readership]=article'
    } else if (query.content_type && query.content_type === 'note') {
      qs += '&filter[readership]=note'
    }

    // 3 - tags

    // 4 - go get everything we're supposed to get
    const prefix = env.apiPrefix
    const cleanedArticles = []
    if (!query.type || query.type === 'articles') {
      const articlesObj = await $http.$get(`${prefix}/items/article/?${qs}`)
      const articles = articlesObj.data
      articles.forEach((article) => {
        article.main_img = `${prefix}/assets/${article.main_img}`
        article.author_img = `${prefix}/assets/${article.author_img}`
        article.date_created = formatDatetime(article.date_created)
        article.date_updated = formatDatetime(article.date_updated)

        cleanedArticles.push(JSON.parse(JSON.stringify(article)))
      })
    }

    return { articles: cleanedArticles, query }
  },

  methods: {},
}
</script>

<style scoped>
.article-preview-cards {
  & .inner {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -1rem;
    width: 100%;
  }
}
</style>
