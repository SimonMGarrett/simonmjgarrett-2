<template>
  <div>
    <ArticlePreviewCard
      v-for="article in articles"
      :key="article.id"
      :article="article"
      class="preview"
    >
    </ArticlePreviewCard>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    const prefix = 'http://api.darkgatecloud.com:8055' // TODO: get this from somewhere central
    const articlesObj = await $http.$get(`${prefix}/items/article/`)
    const articles = articlesObj.data
    const cleanedArticles = [];

    articles.forEach((article) => {
      article.main_img = `${prefix}/assets/${article.main_img}`
      article.author_img = `${prefix}/assets/${article.author_img}`
    
      cleanedArticles.push(JSON.parse(JSON.stringify(article)))
    })

    return { articles: cleanedArticles }
  },
}
</script>
