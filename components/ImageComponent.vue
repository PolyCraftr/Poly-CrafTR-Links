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
  if (!imageName) return '';

  // 1. Nuxt'un ayarlarından baseURL'i alıyoruz (GitHub'da /Poly-CrafTR-Links/ olur)
  const base = config.app.baseURL;
  
  // 2. Eğer isim zaten '/' ile başlıyorsa onu temizleyelim
  const cleanName = imageName.startsWith('/') ? imageName.substring(1) : imageName;
  
  // 3. Base URL ile dosya adını birleştiriyoruz
  // Eğer base '/' ile bitmiyorsa araya bir '/' ekliyoruz
  const separator = base.endsWith('/') ? '' : '/';
  
  return `${base}${separator}${cleanName}`;
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