<template>
  <div class="header-wrapper shadow-lg">
    <header class="tramlined">
      <div
        class="logo mt-4 subpixel-antialiased cursor-pointer"
        @click="$router.push('/')"
      >
        SIMON MJ GARRETT
      </div>
      <div class="strapline text-gray-400 subpixel-antialiased">
        Full-stack developer . Writer . Partner . Dad
      </div>

      <hr class="mt-4 w-1/2 mx-auto" />

      <nav class="navbar">
        <div class="social">
          <a
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/simonmgarrett/"
            class="social-icons mr-6"
            title="facebook"
          >
            <bnb-icon
              :path-info="icons.mdiFacebook"
              class="text-gray-400"
              height="30"
              width="30"
            />
          </a>

          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/simon-garrett-768b0010/"
            class="social-icons mr-6"
            title="linked-in"
          >
            <bnb-icon
              :path-info="icons.mdiLinkedin"
              class="text-gray-400"
              height="30"
              width="30"
            />
          </a>

          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/SimonMGarrett"
            class="social-icons"
            title="github"
          >
            <bnb-icon
              :path-info="icons.mdiGithub"
              class="text-gray-400"
              height="30"
              width="30"
            />
          </a>
        </div>

        <div class="hidden px-2 mx-2 navbar-center lg:flex">
          <div class="flex items-stretch">
            <a class="mx-8 smjg-link" href="/"> Home/All </a>
            <a class="mx-8 smjg-link" href="/?content_type=article">
              Articles
            </a>
            <a class="mx-8 smjg-link" href="/?content_type=note"> Notes </a>
            <a class="mx-8 smjg-link" href="/about"> About </a>
            <a class="mx-8 smjg-link" href="/contact"> Contact </a>
          </div>
        </div>

        <div class="form-control search">
          <form action="" method="get" @submit.prevent="doSearch">
            <input
              type="text"
              placeholder="Search"
              class="search-terms input input-bordered py-2 h-8 rounded-none"
            />
          </form>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import { mdiFacebook, mdiLinkedin, mdiGithub } from '@mdi/js'
import { BNBIcon } from 'bertramandbean-component-library'

export default {
  components: {
    'bnb-icon': BNBIcon,
  },

  data() {
    return {
      drawer: false, // hamburger links drawer
      menuItems: [],
      icons: {
        mdiFacebook,
        mdiLinkedin,
        mdiGithub,
      },
    }
  },

  methods: {
    doSearch() {
      const query = document.querySelector('.search-terms').value

      // Build the query string
      let qs = ''
      if (query) {
        const searchArr = query.split(' ')
        searchArr.forEach((item, indx) => {
          if (indx > 0) {
            qs += '&'
          }
          qs += `search=${item}`
        })
      }

      // Call the index page (homepage, but also other pages) with the correct query string
      location.href = `${location.origin}/?${qs}`
    },
  },
}
</script>

<style scoped>
.header-wrapper {
  background-color: #fff;
  position: fixed;
  z-index: 2;
  width: 100%;

  & header {
    text-align: center;
    padding: 1rem;

    & .social-and-search {
      display: flex;
      justify-content: space-between;
    }

    & .logo {
      font-size: 3.5rem;
      font-weight: lighter;
      font-weight: 100;
      letter-spacing: 12px;
    }

    & .strapline {
      font-size: 1.25rem;
      font-weight: 200;
      font-weight: light;
      letter-spacing: 6px;
    }

    & nav.navbar {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;

      & .social {
        flex: 0 0 181px;
      }

      & .form-control.search {
        flex: 0 0 181px;
      }
    }
  }
}
</style>
