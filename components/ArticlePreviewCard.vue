<template>
  <div class="article-preview-card card rounded-none bg-white m-4 lg:mr-0">
    <router-link :to="`/articles/${article.slug}`" class="wrapper-link">
      <div
        class="inner-wrapper block md:flex"
        :class="
          article.readership === 'article' ? 'article-ribbon' : 'note-ribbon'
        "
      >
        <figure
          class="image"
          :style="`background-image: url(${article.main_img})`"
        >
          <img class="image-img" :src="article.main_img" alt="Article image" />
        </figure>

        <div class="card-body pt-6 pb-4">
          <div class="info">
            <div class="title mt-0 mb-2">{{ article.title }}</div>
            <div class="subtitle mb-4">{{ article.subtitle }}</div>

            <AuthorInfo :article="article" />
          </div>
        </div>
      </div>
    </router-link>
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
  width: 640px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.125), 0 2px 4px rgba(0, 0, 0, 0.25);

  /* & .inner-wrapper {
  } */

  & .image {
    /* padding-right: 3rem; */
    flex: 0 0 320px;
  }

  & .info {
    & .title {
      font-size: 21px;
      font-weight: 800;
      line-height: 1.25;
    }
    & .subtitle {
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.25;
      opacity: 0.7;
    }
  }
}

@media (max-width: 690px) {
  .article-preview-card {
    width: 360px;
    /* height: auto; */

    /* & .image {
      flex: 0 0 220px;
      background-size: cover;
      background-position: center;

    }

    & .info {
      height: 320px;
    } */
  }
}
</style>
