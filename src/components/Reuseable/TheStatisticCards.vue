<template>
  <div
    class="card-wrap p-8 mt-4"
    :style="`background: ${props.config.bgColor}`"
  >
    <div class="flex justify-between">
      <div>
        <p class="text-[#333] font-bold text-lg">{{ props.config.name }}</p>
        <p class="text-[#333] font-bold text-lg">Сегодня</p>
        <p class="text-[#333] font-normal text-base">7 дней</p>
        <p class="text-[#333] font-normal text-base">30 дней</p>
      </div>
      <div>
        <div class="flex flex-col justify-end items-center">
          <p class="text-[#333] font-medium text-base underline mb-2">
            Подробнее
          </p>
          <img :src="props.config.image" alt="" class="inner-img mb-4" />
        </div>
        <div class="">
          <p class="text-[#333] font-bold text-lg text-end">Выписано 0</p>
          <p class="text-[#333] font-bold text-lg text-end">Бронирований 0</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["config"]);
const imageSource = computed((link) => {
  return new URL(`../../assets/images${link}.svg`, import.meta.url).href;
});
</script>

<style lang="scss" scoped>
.card-wrap {
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
  .inner-img {
    transition: all 0.3s;
  }
}
.card-wrap:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  .inner-img {
    transform: scale(1.2);
  }
}
</style>
