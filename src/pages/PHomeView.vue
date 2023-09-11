<template>
  <div class="home">
    <TheSearchView />
    <div class="row">
      <div class="col-md-8">
        <div class="adv-wrap mt-4">
          <div class="row">
            <div class="col-md-6">
              <p class="text mb-3">У вас пока нет договоров</p>
              <div class="mb-3">
                <p class="text m-0">Общий остаток</p>
                <p class="text upper m-0">Нет данных</p>
              </div>
              <div>
                <p class="text m-0">Кредитная линия</p>
                <p class="text upper m-0">Нет данных</p>
              </div>
            </div>
            <div class="col-md-6">
              <img src="../assets/images/adv.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        v-for="(elem, index) in statisticsCards"
        :key="index"
        class="col-md-4"
      >
        <TheStatisticCards :config="elem" />
      </div>
    </div>
  </div>
</template>

<script setup>
import TheStatisticCards from "../components/Reuseable/TheStatisticCards.vue";
import TheSearchView from "../components/TheSearchView.vue";
import { reactive } from "vue";

const statisticsCards = reactive([
  {
    name: "Авиаперелеты",
    image: new URL("../assets/images/avia-img.svg", import.meta.url),
    bgColor: `linear-gradient(110deg, #feecb3 2.68%, rgba(254, 236, 179, 0.5) 98.74%);`,
  },
  {
    name: "Чартеры",
    image: new URL("../assets/images/avia-img.svg", import.meta.url),
    bgColor: `linear-gradient(110deg, #BAE2E9 2.68%, rgba(186, 226, 233, 0.50) 98.74%);`,
  },
  {
    name: "Туры",
    image: new URL("../assets/images/tur-img.svg", import.meta.url),
    bgColor: `linear-gradient(110deg, #FEEAEC 2.68%, rgba(254, 234, 236, 0.50) 98.74%);`,
  },
  {
    name: "Отели",
    image: new URL("../assets/images/hotel-img.svg", import.meta.url),
    bgColor: `linear-gradient(110deg, #CCE4FF 2.68%, rgba(204, 228, 255, 0.50) 98.74%);`,
  },
]);
</script>

<style lang="scss" scoped>
.adv-wrap {
  padding: 40px;
  border-radius: 20px;
  background: #fff;
  .text {
    color: #999;
    font-size: 16px;
    font-weight: 600;
  }
  .upper {
    font-size: 18px;
  }
}
</style>
