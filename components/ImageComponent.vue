<template>
  <div @mouseleave="flipped = !flipped" @mouseenter="flipped = !flipped" class="flip-container w-28 h-28">
    <div :class="['flipper', flipped ? 'flipped' : '']">
      <div class="front">
        <img
          class="w-28 h-28 object-cover rounded-full"
          :src="getImageUrl(props.frontImage)"
          alt="User Image"
        />
      </div>
      <div class="back">
        <img
          class="w-28 h-28 object-cover rounded-full"
          :src="getImageUrl(props.backImage)"
          alt="Back Image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  frontImage: String,
  backImage: String
});

const flipped = ref(false);

const config = useRuntimeConfig();

const getImageUrl = (imageName) => {
  return config.app.baseURL + imageName;
};
</script>

<style scoped>
.flip-container {
  perspective: 1000px;
  cursor: pointer;
}
.flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flipped {
  transform: rotateY(180deg);
}
.front, .back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
.back {
  transform: rotateY(180deg);
}
</style>