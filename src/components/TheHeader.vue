<template>
  <header class="header d-flex items-center justify-between">
    <div class="flex items-center">
      <div
        @click="configStore.isOpenSidebar = true"
        v-if="!configStore.isOpenSidebar"
        class="burger cursor-pointer"
      >
        <img src="../assets/icons/burger.svg" alt="" />
      </div>
      <p
        v-if="
          $route.name !== 'Сотрудники' &&
          $route.name !== 'Субагенты' &&
          $route.name !== 'Корпорации'
        "
        class="mb-0 current-page"
      >
        {{ $route.name }}
      </p>
      <p v-else class="mb-0 current-page">Пользователи</p>
    </div>
    <img src="../assets/images/logo.svg" alt="" />
    <div>
      <img src="../assets/icons/message.svg" alt="" />
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useConfigStore } from "../stores/config";

const configStore = useConfigStore();
const route = useRoute();
</script>

<style scoped lang="scss">
.header {
  padding: 20px 32px;
  width: 100%;
  background: #fff;
  .burger {
    margin-right: 80px;
  }
  .current-page {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
