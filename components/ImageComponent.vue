<template>
  <div class="relative w-28 h-28 mx-auto mb-6 group flex items-center justify-center">
    
    <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 z-[-1]"></div>

    <div @mouseleave="flipped = !flipped" @mouseenter="flipped = !flipped" class="relative flip-container w-full h-full">
      <div :class="['flipper', flipped ? 'flipped' : '']">
        <div class="front">
          <img class="w-full h-full object-cover rounded-full border-2 border-white/20" :src="getImageUrl(props.frontImage)" />
        </div>
        <div class="back">
          <img class="w-full h-full object-cover rounded-full border-2 border-white/20" :src="getImageUrl(props.backImage)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({ frontImage: String, backImage: String });
const flipped = ref(false);
const config = useRuntimeConfig();

const getImageUrl = (imageName) => {
  if (!imageName) return '';
  const base = config.app.baseURL.replace(/\/$/, '');
  const cleanName = imageName.replace(/^\//, '');
  return `${base}/${cleanName}`;
};
</script>

<style scoped>
.flip-container { perspective: 1000px; cursor: pointer; }
.flipper { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; }
.flipped { transform: rotateY(180deg); }
.front, .back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; }
.back { transform: rotateY(180deg); }
</style>