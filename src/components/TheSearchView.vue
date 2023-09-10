<template>
  <div class="search">
    <div class="row">
      <div class="col-md-5 search-categ">
        <div class="w-100">
          <el-radio-group v-model="tabTicket" class="tab-wrap">
            <el-radio-button class="tab-item1" label="tur"
              >Туры</el-radio-button
            >
            <el-radio-button class="tab-item1" label="avia"
              >Авиабилеты</el-radio-button
            >
            <el-radio-button class="tab-item1" label="charter"
              >Чартеры</el-radio-button
            >
            <el-radio-button class="tab-item1" label="hotel"
              >Отели</el-radio-button
            >
          </el-radio-group>
        </div>
      </div>
      <div class="col-md-7 search-categ">
        <div class="w-100">
          <el-radio-group v-model="tabDirection" class="tab-wrap">
            <el-radio-button class="tab-item2" label="oneWay"
              >В одну сторону</el-radio-button
            >
            <el-radio-button class="tab-item2" label="roundTrip"
              >Туда и обратно</el-radio-button
            >
            <el-radio-button class="tab-item2" label="multiCity"
              >Сложный маршрут</el-radio-button
            >
            <el-radio-button class="tab-item2" label="freePlace"
              >Наличие мест</el-radio-button
            >
          </el-radio-group>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div v-if="tabTicket === 'tur'">
        <TheTourView />
      </div>
      <div v-if="tabTicket === 'avia'">
        <TheAviaTicketView :typeDirection="tabDirection" />
      </div>
      <div v-if="tabTicket === 'hotel'">
        <TheHotelsView />
      </div>
    </div>
    <!-- <span v-if="flightData.ticketLoading" class="loader"></span> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheAviaTicketView from "./TheAviaTicketView.vue";
// import TheTourView from "./TheTourView.vue";
// import TheHotelsView from "./TheHotelsView.vue";

const tabTicket = ref("avia");
const tabDirection = ref("oneWay");
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: rgba(248, 248, 248, 0.938);
}
.loader::after {
  content: "";
  background: rgb(3, 40, 109);
  width: 96px;
  height: 4.8px;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: hitZak 2s linear infinite alternate;
}

@keyframes hitZak {
  0% {
    left: 0;
    transform: translateX(-1%);
  }
  100% {
    left: 100%;
    transform: translateX(-99%);
  }
}
.search {
  border-radius: 20px;
  background: #cce4ff;
  padding: 20px;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.05);
  .search-categ {
    .tab-wrap {
      width: 100%;
      .tab-item1 {
        width: 24%;
      }
      .tab-item2 {
        width: 25%;
      }
    }
  }
}
</style>
