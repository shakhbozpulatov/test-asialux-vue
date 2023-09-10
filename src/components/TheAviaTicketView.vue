<template>
  <div class="avia-tickets w-100">
    <div v-if="props.typeDirection === 'oneWay'">
      <TheOneWayView />
    </div>
    <div v-if="props.typeDirection === 'roundTrip'">
      <TheRoundTripView />
    </div>
    <div v-if="props.typeDirection === 'multiCity'">
      <TheMultiCityView />
    </div>
    <div
      v-if="moreDetailBtn && props.typeDirection !== 'multiCity'"
      class="flex mb-6"
    >
      <div class="w-[25%]">
        <el-input class="input" v-model="input" placeholder="Период" />
      </div>
      <div class="w-[25%]">
        <el-input class="input" v-model="input" placeholder="Тип" />
      </div>
      <div class="over-height w-[25%]">
        <el-input class="input" v-model="input" placeholder="Класс" />
      </div>
      <div class="over-height w-[25%]">
        <el-input class="input" v-model="input" placeholder="Цена до, UZS" />
      </div>
    </div>

    <span @click="moreDetailBtn = !moreDetailBtn" class="cursor-pointer">
      <span
        class="more flex gap-3 items-center justify-end"
        v-if="!moreDetailBtn"
      >
        <span class="m-0">Подробнее</span>
        <el-icon><ArrowDown /></el-icon>
      </span>
      <span v-else class="hide flex gap-3 items-center justify-end">
        <span class="m-0">Скрыть</span>
        <el-icon><ArrowUp /></el-icon>
      </span>
    </span>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ArrowDown, ArrowUp } from "@element-plus/icons-vue";
import TheOneWayView from "./Directions/TheOneWayView.vue";
import TheRoundTripView from "./Directions/TheRoundTripView.vue";
import TheMultiCityView from "./Directions/TheMultiCityView.vue";

const props = defineProps({
  typeDirection: String,
});
const datepicker = ref("");
const value = ref("");

let searchData = reactive({
  adult: 1,
  children: 0,
  infant: 0,
  orderClass: "E",
  directions: [
    {
      departure_code: null,
      arrival_code: null,
      date: null,
    },
  ],
});
const input = ref("");
const moreDetailBtn = ref(false);
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.pas-menu-btn,
// .search-btn {
//   padding: 24px 10px;
//   font-size: 15px;
//   span {
//     text-align: center;
//   }
// }
// .passanger-menu {
//   .content-dropdown {
//     max-width: 240px;
//     width: 100%;
//     .person-type {
//       .title {
//         font-size: 20px;
//       }
//       .subtitle {
//         font-size: 12px;
//         color: #aaa;
//       }
//     }
//   }
// }
.more {
  font-size: 14px;
  font-weight: 700;
  color: #3392ff;
}
.hide {
  color: #aaa;
  font-size: 14px;
  font-weight: 700;
}
</style>
