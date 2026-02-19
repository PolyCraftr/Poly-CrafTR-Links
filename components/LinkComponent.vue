<template>
  <a
    :href="link.url"
    target="_blank"
    class="w-full flex items-center p-4 rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:bg-[#594572]/25 hover:scale-105 hover:shadow-[0_0_20px_rgba(89,69,114,0.3)]"
  >
    <img :src="getImageUrl(link.image)" alt="icon" class="w-8 h-8 mr-4 object-contain" />
    
    <span class="text-lg font-medium text-white">{{ link.name }}</span>
  </a>
</template>

<script setup>
// Props tanımını tek ve temiz bir şekilde yapıyoruz 🛠️
const props = defineProps({
  link: Object
});

const config = useRuntimeConfig();

const getImageUrl = (imageName) => {
  if (!imageName) return '';
  const base = config.app.baseURL.replace(/\/$/, '');
  const cleanName = imageName.replace(/^\//, '');
  return `${base}/${cleanName}`;
};
</script>