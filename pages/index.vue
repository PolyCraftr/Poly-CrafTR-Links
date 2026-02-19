<template>
  <div class="glow-capture relative">
    <div class="relative z-10">
      <!-- Main Content -->
      <div class="flex flex-col mt-10 items-center">
        <ImageComponent />
        <p class="text-text text-center text-2xl mt-3 font-bold">{{ user.name }}</p>
        <p class="text-text text-center text-lg mt-2">{{ user.role }}</p>
      </div>

      <div class="flex flex-col mt-8 items-center">
        <LinkComponent v-for="link in user.links" :key="link" :link="link" />
      </div>

      <div class="flex items-center justify-center gap-3 mt-1">
        <IconsComponent v-for="icon in user.icons" :key="icon" :icon="icon" />
      </div>
    </div>

    <!-- Glow Overlay -->
    <div class="glow-overlay absolute inset-0 pointer-events-none z-0" style="--glow-color: #7c3aed"></div>
  </div>
</template>

<script setup>
import user from '../user.json'

useSeoMeta({
  title: user.seoTitle,
  description: user.seoDescription,
  image: user.seoImage,
  ogTitle: user.seoTitle,
  ogDescription: user.seoDescription,
  ogImage: user.seoImage,
})

</script>

<style scoped>

</style>
