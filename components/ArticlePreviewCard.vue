<template>
  <div class="article-preview-card card shadow-xl rounded-none bg-white m-3">
    <figure class="image w-full">
      <img :src="article.main_img" alt="Article image" />
    </figure>

    <div class="card-body">
      <div class="tags w-full">
        <div class="badge">Tag2</div>
        <div class="badge">Tag2</div>
      </div>

      <div class="info w-full">
        <div class="no-top title mt-4 mb-2">{{ article.title }}</div>
        <div class="subtitle mb-4">{{ article.subtitle }}</div>

        <div class="authored">
          <img
            :src="article.author_img"
            alt="Author image"
          />
          <div class="author pl-4">
            <div class="author-text font-bold">
              {{ article.author }}
            </div>
            <div class="created">
              Created: {{ article.date_created }}
            </div>
            <div v-if="article.date_updated !== article.date_created" class="updated" >
              Updated: {{ article.date_updated }}
            </div>
          </div>
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
  width: 360px;
  cursor: pointer;

  & .image {
    /* padding-right: 3rem; */
  }

  & .tags {
    opacity: 0.33;
  }

  & .info {
    & .title {
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.25;
    }
    & .subtitle {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.125;
      opacity: 0.7;
    }
    & .authored {
      display: flex;
      font-size: 12px;

      & img {
        flex: 0 0 3rem;
        width: 3rem;
        height: auto;
        border-radius: 100%;
      }

      & .author {
        align-self: center;
        opacity: 0.7;
      }
    }
  }
}
</style>
