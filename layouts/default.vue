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
    padding-top: 6rem;
  }
}
</style>
