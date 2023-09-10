<template>
  <div class="flex items-start">
    <div>
      <TheSidebar />
    </div>
    <div class="w-full">
      <TheHeader />
      <div class="mt-4 px-3">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheHeader from "../components/TheHeader.vue";
import TheSidebar from "../components/TheSidebar.vue";
</script>

<style scoped lang="scss"></style>
