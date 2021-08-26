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
// needs to be availble for async
const formatDatetime = (dt) => {
  const localeStr = (new Date(dt)).toLocaleString()
  const tidiedUp = localeStr.replace(',', ' @').slice(0, -3)
  return tidiedUp
}

export default {
  async asyncData({ query, $http }) {
    // Build the query string from the query Object. If the query Object has
    // one key, the value is a string; if it has two, the value is an array.
    let qs = ''

    // 1 - search
    if (query.search && typeof query.search === 'string') {
      qs += `search=${query.search}`

    } else if (query.search && query.search.forEach) {
      query.search.forEach((item, indx) => {
        if (indx > 0) {
          qs += '&'
        }
        qs += `search=${query.search}`
      })
    }

    // 2 - type of page [article | note]

    const prefix = 'http://api.darkgatecloud.com:8055' // TODO: get this from somewhere central
    const cleanedArticles = []

    // Articles 
    const articlesObj = await $http.$get(`${prefix}/items/article/?${qs}`)
    const articles = articlesObj.data
    articles.forEach((article) => {
      article.main_img = `${prefix}/assets/${article.main_img}`
      article.author_img = `${prefix}/assets/${article.author_img}`
      article.date_created = formatDatetime(article.date_created)
      article.date_updated = formatDatetime(article.date_updated)

      cleanedArticles.push(JSON.parse(JSON.stringify(article)))
    })

    // Notes
    // TODO: the same again

    return { articles: cleanedArticles }
  },

  methods: {
    
  }
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
