<template>
  <a
    :href="props.link.url"
    target="_blank"
    class="w-11/12 max-w-[500px]"
    rel="noopener noreferrer"
  >
    <div
      ref="glowCard"
      :class="{'shadow' : user.useShadow}"
      class="cursor-pointer hover:rotate-[2deg] glow-capture relative transition-all duration-300 border-2 bg-secondary mb-3 border-white/10 rounded-full py-4 px-2.5 overflow-hidden"
    >
      <!-- Translucent Background -->
      <div class="absolute inset-0 bg-white/5 rounded-full pointer-events-none"></div>

      <!-- Main Content -->
      <div class="relative text-center z-10 text-text flex items-center">
        <img
          class="w-10 h-10 absolute object-cover rounded-full"
          :src="props.link?.image"
          alt="Link image"
        />
        <div class="text-center w-full">
          <span class="text-center">{{ props.link?.name }}</span>
        </div>
      </div>

      <!-- Glow Overlay -->
      <div class="glow-overlay" />
    </div>
  </a>
</template>

<script setup>
import { onMounted, ref } from "vue";
import user from "../user.json";

const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
});

const glowCard = ref(null);

onMounted(() => {
  const el = glowCard.value;
  const overlay = el.querySelector(".glow-overlay");

  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlay.style.setProperty("--glow-x", `${x}px`);
    overlay.style.setProperty("--glow-y", `${y}px`);
    overlay.style.setProperty("--glow-opacity", "1");
  });

  el.addEventListener("mouseleave", () => {
    overlay.style.setProperty("--glow-opacity", "0");
  });
});
</script>

<style scoped>
.glow-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  user-select: none;
  opacity: var(--glow-opacity, 0);
  transition: opacity 0.4s ease;
  will-change: mask-image, opacity;

  /* Custom radial glow with CSS variables */
  mask-image: radial-gradient(
    25rem 25rem at var(--glow-x, 50%) var(--glow-y, 50%),
    var(--glow-color, theme("colors.primary")) 0%,
    transparent 60%
  );
  -webkit-mask-image: radial-gradient(
    25rem 25rem at var(--glow-x, 50%) var(--glow-y, 50%),
    var(--glow-color, theme("colors.primary")) 0%,
    transparent 60%
  );

  background-color: var(--glow-color, theme("colors.primary"));
}
</style>
