<template>
  <div class="tags w-full">
    <div
      v-for="tag in tags"
      :key="tag.tag_id.id"
      class="badge mr-2 text-xs cursor-pointer"
      @click.stop.prevent="searchForTag(tag.tag_id.text)"
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
    // nicked from Vue Router
    stringifyQuery(obj) {
      const encodeReserveRE = /[!'()*]/g
      const encodeReserveReplacer = c => '%' + c.charCodeAt(0).toString(16)
      const commaRE = /%2C/g
      const encode = str =>
        encodeURIComponent(str)
          .replace(encodeReserveRE, encodeReserveReplacer)
          .replace(commaRE, ',')
          
      const res = obj
        ? Object.keys(obj)
          .map(key => {
            const val = obj[key]

            if (val === undefined) {
              return ''
            }

            if (val === null) {
              return encode(key)
            }

            if (Array.isArray(val)) {
              const result = []
              val.forEach(val2 => {
                if (val2 === undefined) {
                  return
                }
                if (val2 === null) {
                  result.push(encode(key))
                } else {
                  result.push(encode(key) + '=' + encode(val2))
                }
              })
              return result.join('&')
            }

            return encode(key) + '=' + encode(val)
          })
          .filter(x => x.length > 0)
          .join('&')
        : null
      return res ? `?${res}` : ''
    },
    searchForTag(text) {
      const query = this.$route.query
      query.tag = text
      // TODO: change the path if it's different from the path we're at
      location.href = `${location.origin}/${this.stringifyQuery(query)}`
    },
  },
}
</script>
