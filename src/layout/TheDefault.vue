<template>
  <div>
    <div v-if="screenWidth > 820" class="flex items-start">
      <div>
        <TheSidebar class="!fixed top-0 left-0 z-[99]" />
      </div>
      <div
        :class="configStore.isOpenSidebar ? 'openSidebar' : ''"
        class="w-full"
      >
        <TheHeader />
        <div class="mt-4 px-3">
          <RouterView />
        </div>
      </div>
    </div>
    <div v-else class="w-100">
      <p class="text-center text-[28px] font-bold mt-[200px] text-[#333]">
        Cайт на данный момент работает только в десктопном режиме
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import TheHeader from "../components/TheHeader.vue";
import TheSidebar from "../components/TheSidebar.vue";
import { useConfigStore } from "../stores/config";

const screenWidth = ref(window.innerWidth);

// Function to update the screen width
const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

// Watch for changes in window.innerWidth
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
const configStore = useConfigStore();
</script>

<style scoped lang="scss">
.openSidebar {
  padding-left: 250px;
}
</style>
