<template>
  <div class="header-wrapper shadow-lg">
    <header class="tramlined">
      <div class="logo mt-4">DR. SIMON MJ GARRETT</div>
      <div class="strapline text-gray-400">
        Developer . Writer . Ex-academic . Partner . Dad
      </div>

      <hr class="mt-4 w-1/2 mx-auto" />

      <nav class="navbar">
        <div class="social">
          <a
            rel="noopener"
            target="_blank"
            href="https://www.facebook.com/bertramandbean/"
            class="social-icons mr-6"
            title="facebook"
          >
            <bnb-icon
              :path-info="icons.mdiFacebook"
              class="text-gray-400"
              height="32"
              width="32"
            />
          </a>
          <a
            rel="noopener"
            target="_blank"
            href="https://twitter.com/BertramAndBean"
            class="social-icons svg-white mr-6"
            title="twitter"
          >
            <bnb-icon
              :path-info="icons.mdiLinkedin"
              class="text-gray-400"
              height="32"
              width="32"
            />
          </a>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.instagram.com/bertramandbean/"
            class="
              social-icons
              svg-white
              mr-2
              umami--click--instagram-social-button
              ga--click--instagram-social-button
            "
            title="instagram"
          >
            <bnb-icon
              :path-info="icons.mdiGithub"
              class="text-gray-400"
              height="32"
              width="32"
            />
          </a>
        </div>

        <div class="hidden px-2 mx-2 navbar-center lg:flex">
          <div class="flex items-stretch">
            <a class="mx-8 text-gray-500 hover:underline hover:text-gray-700">
              Home
            </a>
            <a class="mx-8 text-gray-500 hover:underline hover:text-gray-700">
              Portfolio
            </a>
            <a class="mx-8 text-gray-500 hover:underline hover:text-gray-700">
              About
            </a>
            <a class="mx-8 text-gray-500 hover:underline hover:text-gray-700">
              Contact
            </a>
          </div>
        </div>

        <div class="form-control search">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered py-2 h-8 rounded-none"
          />
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
    }
  }
}
</style>
