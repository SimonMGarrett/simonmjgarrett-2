<template>
  <footer
    class="
      footer
      block
      text-gray-700 text-center
      font-light
      w-full
      tracking-widest
      subpixel-antialiased
    "
  >
    <div class="block mb-8 text-gray-800 text-center">
      <!-- FIND OUT MORE -->
      <span class="m-0 px-3 py-0 inline-block">
        <a
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/simon-garrett-768b0010/"
          class="social-icons font-extralight mr-3 no-underline"
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
          href="https://www.facebook.com/simonmgarrett/"
          class="social-icons font-extralight mr-3 no-underline"
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
          href="https://github.com/SimonMGarrett"
          class="social-icons font-extralight no-underline"
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

    {{ new Date().getFullYear() }}
    &nbsp;&nbsp;|&nbsp;&nbsp; SIMON MJ GARRETT &nbsp;&nbsp;|&nbsp;&nbsp; a
    <a class="inline-block" href="https://bertramandbean.com">BERTRAM+BEAN</a>
    adventure
  </footer>
</template>

<script>
import { BNBIcon } from 'bertramandbean-component-library'
import { mdiFacebook, mdiLinkedin, mdiGithub } from '@mdi/js'

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
    }
  },
}
</script>

<style scoped>
footer {
  text-align: center;
  opacity: 0.75;
  font-size: 14px;
  padding: 2rem;
}
</style>
