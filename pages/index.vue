<template>
  <div>
    <ArticlePreviewCard
      v-for="article in articles.data"
      :key="article.id"
      class="preview"
    >
    </ArticlePreviewCard>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    const prefix = 'http://api.darkgatecloud.com:8055' // TODO: get this from somewhere central
    const articles = await $http.$get(`${prefix}/items/article/`)

    console.log('ARTICLES', articles.data())

    articles.forEach((article) => {
      article.img = prefix + article.img
      article.author_img = prefix + article.author_img
    })

    return { articles }
  },
}
</script>

<style scoped>
.preview {
  display: flex;

  & .preview-image {
    flex: 0 0 35%;
    padding-right: 3rem;
    height: auto;
    width: 100%;

    & img {
    }
  }

  & .preview-info {
    flex: 1 1 65%;

    & .authored {
      opacity: 0.5;
      font-size: 12px;
      margin-bottom: 3rem;
    }
  }
}
</style>
