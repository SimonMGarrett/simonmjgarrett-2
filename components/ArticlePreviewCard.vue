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
          :src="article.author_img"
          alt="Author image"
        />
        <div class="author">
          {{ article.author }}
        </div>
        <div>
          {{ article.date_created }}
          <span v-if="article.date_updated !== article.date_created">
            Updated: {{ article.date_updated }}
          </span>
        </div>
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
.article-preview-card {
  display: flex;

  & .image {
    flex: 0 0 35%;
    padding-right: 3rem;
  }

  & .info {
    flex: 1 1 65%;

    & .authored {
      opacity: 0.5;
      font-size: 12px;
      margin-bottom: 3rem;

      & img {
        width: 3rem;
        height: auto;
      }
    }
  }
}
</style>
