<template>
  <div class="card-wrap p-8 mt-4">
    <div class="flex justify-between">
      <div>
        <p class="text-[#333] font-bold text-lg">{{ props.config.name }}</p>
        <p class="text-[#333] font-bold text-lg">Сегодня</p>
        <p class="text-[#333] font-normal text-base">7 дней</p>
        <p class="text-[#333] font-normal text-base">30 дней</p>
      </div>
      <div>
        <div class="flex flex-col justify-end items-center">
          <p class="text-[#333] font-medium text-base underline">Подробнее</p>
          <img :src="props.config.image" alt="" class="mb-4" />
        </div>
        <div class="mb-2">
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
  background: linear-gradient(
    110deg,
    #feecb3 2.68%,
    rgba(254, 236, 179, 0.5) 98.74%
  );
}
</style>
