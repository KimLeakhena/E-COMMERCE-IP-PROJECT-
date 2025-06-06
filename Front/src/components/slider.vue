<template>
  <div class="w-full max-w-8xl mx-auto mt-6 p-8">
    <div class="relative w-full overflow-hidden rounded-xl shadow-lg bg-white">
      <div class="flex transition-transform duration-500 ease-in-out">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="w-full flex-shrink-0 p-4"
        >
          <slot :slide="slide" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    slides: {
      type: Array,
      required: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      currentSlide: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, this.interval);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>

<style scoped>
.img-wrapper {
  position: relative;
  width: 500%;
  height: 500px;
  overflow: hidden;
}
.slide {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 500px;
  opacity: 0;
  transition: all 0.5s ease;
}
.slide.active {
  left: 0;
  opacity: 1;
}
.btn-container {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
