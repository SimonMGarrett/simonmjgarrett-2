<template>
  <div class="footer bb-container w-full bg-heron-500">
    <div class="row pb-0">
      <div
        class="
          col-span-12 col-start-1
          md:col-start-3 md:col-span-8
          text-gray-700 text-87 text-center
          font-light
        "
      >
        <span class="relative top-4">{{ new Date().getFullYear() }} -</span>
        <span
          class="
            relative
            top-4
            logo
            font-logoFont font-light
            tracking-widest
            subpixel-antialiased
          "
        >
          SIMON MJ GARRETT
        </span>
      </div>
    </div>
    <div class="row pt-0">
      <div
        class="
          col-span-12 col-start-1
          md:col-start-3 md:col-span-8
          text-gray-700 text-75 text-center
          font-light
        "
      >
        <span
          class="
            relative
            top-4
            logo
            font-logoFont font-light
            tracking-widest
            subpixel-antialiased
          "
        >
          a <a href="https://bertramandbean.com">BERTRAM+BEAN</a> site
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  text-align: center;
  opacity: 0.75;
  font-size: 14px;
  padding: 2rem;
}
</style>
