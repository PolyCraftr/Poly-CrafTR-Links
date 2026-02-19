<template>
  <Html class="bg-secondary">
    <div class="min-h-screen flex flex-col">
      <!-- Page Content -->
      <div class="container mx-auto selection:bg-primary mb-6 p-4 flex-1">
        <slot />
      </div>

      <!-- Footer -->
      <footer class=" fixed bottom-0 left-0 right-0 z-10 text-white text-sm text-center p-4">
        &copy; {{ year }} {{ user.name }}. All rights reserved.
      </footer>
    </div>
  </Html>
</template>


<script setup>
import user from '../user.json';

const year = new Date().getFullYear();

</script>

<style  scoped>

</style>