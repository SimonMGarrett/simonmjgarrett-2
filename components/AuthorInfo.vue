<template>
  <div class="authored">
    <img :src="article.author_img" alt="Author image" class="author-image" style="max-height: 3rem; max-width:3rem" />
    <div class="author pl-4">
    <div class="author-text font-bold">
        {{ article.author }}
    </div>
    <div class="created">Created: {{ article.date_created }}</div>
    <div
        v-if="showUpdated && article.date_updated !== article.date_created"
        class="updated"
    >
        Updated: {{ article.date_updated }}
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showUpdated: {
      type: Boolean,
      default: false,
    },
    article: {
      type: Object,
      default: () => {
        return {
          author_img: '',
          author: '',
          date_created: '',
        }
      }
    }
  },

  mounted() {
    if (this.showUpdated) {
      const elem = document.querySelector('.author-image');
      elem.style.flex = '0 0 2.5rem'
      elem.style.width = '2.5rem'
      elem.style.height = '2.5rem'
    }
  }
}
</script>

<style scoped>
.authored {
  display: flex;
  font-size: 12px;
  opacity: 0.75;

  & img.author-image {
    flex: 0 0 1.5rem;
    align-self: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 100%;
  }

  & .author {
    align-self: center;
    opacity: 0.7;
  }

  & .author-text {
    line-height: 1.3;
  }

  & .created {
    line-height: 1.3;
  }

  & .updated {
    line-height: 1.3;
  }
}
</style>