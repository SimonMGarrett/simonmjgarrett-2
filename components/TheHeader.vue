<template>
  <div class="header-wrapper shadow-sm">
    <header class="tramlined">
      <div
        class="logo mt-4 subpixel-antialiased cursor-pointer"
        @click="$router.push('/')"
      >
        SIMON MJ GARRETT
      </div>
      <div class="strapline hidden lg:block text-gray-400 subpixel-antialiased">
        Full-stack developer . Writer . Partner . Dad
      </div>

      <hr class="mt-4 mb-4 w-1/2 mx-auto" />

      <nav class="navbar block lg:flex">
        <div class="social hidden lg:flex">
          <a
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/simonmgarrett/"
            class="social-icons mr-6 no-underline"
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
            class="social-icons mr-6 no-underline"
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
            class="social-icons no-underline"
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

        <div class="flex px-2 mx-auto lg:mx-2 navbar-center">
          <div class="flex items-stretch">
            <a class="mx-8 no-underline smjg-link" href="/"> Home/All </a>
            <a
              class="hidden lg:block mx-8 no-underline smjg-link"
              href="/?content_type=article"
            >
              Articles
            </a>
            <a
              class="hidden lg:block mx-8 no-underline smjg-link"
              href="/?content_type=note"
            >
              Notes
            </a>
            <a class="mx-8 no-underline smjg-link" href="/about"> About </a>
            <a class="mx-8 no-underline smjg-link" href="/contact"> Contact </a>
          </div>
        </div>

        <div class="form-control search hidden lg:block">
          <form action="" method="get" @submit.prevent="doSearch">
            <input
              type="text"
              name="search1"
              placeholder="Search"
              class="search-terms s1 input input-bordered py-2 h-8 rounded-none"
            />
          </form>
        </div>
      </nav>

      <div class="block lg:hidden form-control search">
        <form action="" method="get" @submit.prevent="doSearch">
          <input
            type="text"
            name="search2"
            placeholder="Search"
            class="search-terms s2 input input-bordered py-2 h-8 rounded-none"
          />
        </form>
      </div>
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
      const query1 = document.querySelector('.search-terms.s1').value
      const query2 = document.querySelector('.search-terms.s2').value
      const query = query1 || query2

      // console.log('query', query, 'location.origin', location.origin)

      // Build the query string
      let qs = ''
      if (query) {
        query.split(' ').forEach((item, indx) => {
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

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

@media (max-width: 705px) {
  .header-wrapper {
    & header {
      & .logo {
        font-size: 2rem;
        font-weight: light;
        font-weight: 200;
        letter-spacing: 6px;
      }
    }
  }
}
</style>
