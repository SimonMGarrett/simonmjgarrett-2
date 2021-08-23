<template>
  <div class="article-preview-card">
    <div class="image">
      <img :src="article.main_img" alt="Article image" />
    </div>

    <div class="tags">TAGS</div>

    <div class="info">
      <h1 class="no-top">{{ article.title }}</h1>
      <h2>{{ article.subtitle }}</h2>

      <div class="authored">
        <img
          class="h-12 w-12 rounded-full"
          :src="article.author_img"
          alt="Author image"
        />
        {{ article.author }}
        {{ article.date_created }}
        <span v-if="article.date_updated !== article.date_created">
          Updated: {{ article.date_updated }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          main_img: '',
          title: '...',
          subtitle: '...',
          author_img: '',
          author: 'Simon Garrett',
          date_created: '',
          date_updated: '',
        }
      },
    },
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
