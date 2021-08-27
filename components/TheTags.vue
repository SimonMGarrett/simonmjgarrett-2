<template>
  <div class="tags w-full">
    <div
      v-for="tag in tags"
      :key="tag.tag_id.id"
      class="badge mr-2"
      @click.stop.prevent="searchForTag(tag.tag_id.id)"
    >
      {{ tag.tag_id.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => {
        return []
      },
    },
  },

  methods: {
    searchForTag(id) {
      console.log('id', id, '$route', this.$route)
    },
  },
}
</script>
