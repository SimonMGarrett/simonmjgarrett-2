<template>
  <div class="app">
    <TheHeader />
    <div class="content-wrapper">
      <Nuxt />
      <TheFooter />
    </div>
  </div>
</template>

<style scoped>
.app {
  background-color: #f9f8f7;

  & .content-wrapper {
    position: relative;
    z-index: 1;
    padding-top: 18rem;
    min-height: 100vh;
  }
}
</style>
