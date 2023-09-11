<template>
  <div class="flex items-start">
    <div>
      <TheSidebar class="!fixed top-0 left-0 z-[99]" />
    </div>
    <div :class="configStore.isOpenSidebar ? 'openSidebar' : ''" class="w-full">
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
import { useConfigStore } from "../stores/config";

const configStore = useConfigStore();
</script>

<style scoped lang="scss">
.openSidebar {
  padding-left: 250px;
}
</style>
