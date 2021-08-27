<template>
  <div>
    <VueSlickCarousel :settings="carouselSettings" :arrows="true" :dots="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
  </div>
</template>

<script>

  import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },

    data() {
      return {
        carouselSettings: {
          "centerMode": true,
          "centerPadding": "20px",
          "focusOnSelect": true,
          "infinite": true,
          "slidesToShow": 1,
          "speed": 500
        }
      }
    },
  }
</script>