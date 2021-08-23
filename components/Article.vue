<template>
  <div class="article">
    <div class="image">
      <img
        :src="`http://api.darkgatecloud.com:8055/assets/${article.main_img}`"
        alt="Article image"
      />
    </div>

    <div class="info">
      <h1 class="no-top">{{ article.title }}</h1>
      <h2>{{ article.subtitle }}</h2>
      <div>{{ article.tags }}</div>
      <div class="authored">
        Author: {{ article.author }} Created:
        {{ article.date_created }} Updated: {{ article.date_updated }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: -1,
    },
  },

  async asyncData({ $http }) {
    const id = 1 // TODO: get this programmatically
    const article = await $http.$get(
      `http://api.darkgatecloud.com:8055/items/article/${id}`
    )
    return { article }
  },

  head() {
    // Set Meta Tags for this Page
  },
}
</script>

<style scoped>
.article {
  display: flex;

  & .image {
    flex: 0 0 35%;
    padding-right: 3rem;
    height: auto;
    width: 100%;

    & img {
    }
  }

  & .info {
    flex: 1 1 65%;

    & .authored {
      opacity: 0.5;
      font-size: 12px;
      margin-bottom: 3rem;
    }
  }
}
</style>
