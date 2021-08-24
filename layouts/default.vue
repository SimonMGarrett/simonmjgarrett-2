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
  background-color: #f7f7f7;

  & .content-wrapper {
    position: relative;
    z-index: 1;
    padding-top: 12rem;
  }
}
</style>
