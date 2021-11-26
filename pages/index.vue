<template>
  <div class="article-preview-cards tramlined">
    <div class="margin-shifted-inner">
      <div class="options hidden lg:block mb-16">
        <!-- TAGS + CATEGORIES -->
        <div class="sidebar-card text-center">
          <span class="text-gray-700 lead m-0 px-3 py-1 pr-0 inline-block"
            >TAGS:</span
          ><span
            v-for="tag in tags"
            :key="tag.id"
            class="
              text-gray-700
              underline
              cursor-pointer
              font-extralight
              m-0
              px-3
              py-1
              inline-block
            "
            @click.stop.prevent="searchForTag(tag.text)"
            >{{ tag.text }} ({{ tag.articles.length }})</span
          ><span class="text-gray-700 lead m-0 px-3 py-1 pr-0 inline-block"
            >CATEGORIES:</span
          ><span
            class="text-gray-700 font-extralight m-0 px-3 py-1 inline-block"
          >
            <a class="smjg-link underline text-gray-700" href="/">All</a></span
          ><span
            class="text-gray-700 font-extralight m-0 px-3 py-1 inline-block"
          >
            <a
              class="smjg-link underline text-gray-700"
              href="/?content_type=article"
              >Articles</a
            ></span
          ><span
            class="text-gray-700 font-extralight m-0 px-3 py-1 inline-block"
          >
            <a
              class="smjg-link underline text-gray-700"
              href="/?content_type=note"
              >Notes</a
            >
          </span>
        </div>
      </div>

      <div class="cards justify-center">
        <div>
          <h2 class="no-top text-center">
            Displaying
            <span class="display-message">{{ displayMessage }}</span>
          </h2>

          <div class="flex flex-wrap justify-center">
            <ArticlePreviewCard
              v-for="article in articles"
              :key="article.id"
              :article="article"
            >
            </ArticlePreviewCard>
          </div>

          <div class="social-footer mt-12 text-gray-800 text-center">
            <!-- FIND OUT MORE -->
            <span class="m-0 px-3 py-0 inline-block">
              <a
                rel="noopener"
                target="_blank"
                href="https://www.facebook.com/simonmgarrett/"
                class="social-icons font-extralight mr-3"
                title="facebook"
              >
                <bnb-icon
                  :path-info="icons.mdiFacebook"
                  class="text-gray-700"
                  height="24"
                  width="24"
                  display="inline-block"
                />
              </a>
            </span>

            <span class="m-0 px-3 py-0 inline-block">
              <a
                rel="noopener"
                target="_blank"
                href="https://www.linkedin.com/in/simon-garrett-768b0010/"
                class="social-icons font-extralight mr-3"
                title="linked-in"
              >
                <bnb-icon
                  :path-info="icons.mdiLinkedin"
                  class="text-gray-700"
                  height="24"
                  width="24"
                  display="inline-block"
                />
              </a>
            </span>

            <span class="m-0 px-3 py-0 inline-block">
              <a
                rel="noopener"
                target="_blank"
                href="https://github.com/SimonMGarrett"
                class="social-icons font-extralight"
                title="github"
              >
                <bnb-icon
                  :path-info="icons.mdiGithub"
                  class="text-gray-700"
                  height="24"
                  width="24"
                  display="inline-block"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiFacebook, mdiLinkedin, mdiGithub } from '@mdi/js'
import { BNBIcon } from 'bertramandbean-component-library'

// needs to be available for async
const formatDatetime = (dt) => {
  const localeStr = new Date(dt).toLocaleString()
  const tidiedUp = localeStr.replace(',', ' @').slice(0, -3)
  return tidiedUp
}

export default {
  components: {
    'bnb-icon': BNBIcon,
  },

  data() {
    return {
      icons: {
        mdiFacebook,
        mdiLinkedin,
        mdiGithub,
      },
      displayMessage: 'all notes and articles',
      tags: [],
      articles: [],
      query: '',
    }
  },

  watch: {
    '$nuxt.context.query'(val) {
      alert(val)
      this.fetchArticles()
    },
  },

  mounted() {
    this.fetchArticles()
  },

  methods: {
    async fetchArticles() {
      const { query, env, $http } = this.$nuxt.context

      // Build the query string from the query Object. If the query Object has
      // one key, the value is a string; if it has two, the value is an array.
      let qs =
        'sort=-date_updated&filter[status][_eq]=published&fields=*,tags.tag_id.*'
      let displayMessage = ''

      // 1 - search
      if (query.search && typeof query.search === 'string') {
        qs += `&search=${query.search}`
        displayMessage = `search for '${query.search}' in `
      } else if (query.search && query.search.forEach) {
        displayMessage = 'searches for '
        query.search.forEach((item, indx) => {
          if (indx > 0) {
            displayMessage += ' & '
          }
          qs += `&search=${item}`
          displayMessage += `'${item}'`
        })
        displayMessage = ' in '
      }

      // 2 - tags (doesn't work, so see below)
      // if (query.tag) {
      //   qs += `&deep[tags][tag_id][_filter][text][_eq]=${query.tag}`
      // }

      // 3 - type of page [article | note]
      if (query.content_type && query.content_type === 'article') {
        qs += '&filter[readership]=article'
        displayMessage += 'all ARTICLES'
      } else if (query.content_type && query.content_type === 'note') {
        qs += '&filter[readership]=note'
        displayMessage += 'all NOTES'
      } else {
        displayMessage += 'all notes and articles'
      }

      // 4 - go get everything we're supposed to get
      const prefix = env.apiPrefix
      const cleanedArticles = []
      if (!query.type || query.type === 'articles') {
        const articlesObj = await $http.$get(`${prefix}/items/article/?${qs}`)
        const articles = articlesObj.data

        if (query.tag) {
          displayMessage += ` tagged '${query.tag}'`
        }

        articles.forEach((article) => {
          article.main_img = `${prefix}/assets/${article.main_img}`
          article.author_img = `${prefix}/assets/${article.author_img}`
          article.date_created = formatDatetime(article.date_created)
          article.date_updated = formatDatetime(article.date_updated)

          // Do the tag filter here because there's no way to do it in Directus ATM
          if (!query.tag) {
            cleanedArticles.push(JSON.parse(JSON.stringify(article)))
          } else {
            const tags = article.tags
            let foundBool = false
            tags.forEach((tag) => {
              if (!foundBool && query.tag === tag.tag_id.text) {
                foundBool = true
                cleanedArticles.push(JSON.parse(JSON.stringify(article)))
              }
            })
          }
        })
      }

      displayMessage += ` (${cleanedArticles.length})`

      const tagsObj = await $http.$get(`${prefix}/items/tag/`)
      const tags = tagsObj.data

      tags.sort((a, b) => {
        return b.articles.length - a.articles.length
      })

      this.tags = tags
      this.articles = cleanedArticles
      this.query = query
      this.displayMessage = displayMessage

      // return { articles: cleanedArticles, query, tags, displayMessage }
    },

    // nicked from Vue Router
    stringifyQuery(obj) {
      const encodeReserveRE = /[!'()*]/g
      const encodeReserveReplacer = (c) => '%' + c.charCodeAt(0).toString(16)
      const commaRE = /%2C/g
      const encode = (str) =>
        encodeURIComponent(str)
          .replace(encodeReserveRE, encodeReserveReplacer)
          .replace(commaRE, ',')

      const res = obj
        ? Object.keys(obj)
            .map((key) => {
              const val = obj[key]

              if (val === undefined) {
                return ''
              }

              if (val === null) {
                return encode(key)
              }

              if (Array.isArray(val)) {
                const result = []
                val.forEach((val2) => {
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
            .filter((x) => x.length > 0)
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

<style scoped>
.article-preview-cards {
  padding: 0;

  & .margin-shifted-inner {
    width: 100%;

    & .options {
      flex: 0 0 320px;
      position: relative;
      top: 8px;

      & .sidebar-card {
        & .lead {
          letter-spacing: 1px;
          font-weight: 500;
        }
      }
    }

    & .cards {
      flex: 1 1 auto;
      display: flex;
      flex-wrap: wrap;
    }
  }
}

@media (min-width: 1024px) {
  .lg\:justify-items-end {
    justify-content: flex-end;
  }
}
</style>
