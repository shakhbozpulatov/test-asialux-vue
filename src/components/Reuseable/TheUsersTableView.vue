<template>
  <div>
    <p class="title-txt">{{ props.nameUserPage }}</p>
    <div class="search-input-wrap flex items-center mt-4">
      <el-button class="search-btn" type="primary">Искать</el-button>
      <el-input
        v-model="input3"
        placeholder="Логин или ID "
        class="input relative"
      >
        <template #append>
          <el-button>
            <el-icon size="16px"><Plus /></el-icon>
          </el-button>
        </template>
      </el-input>
    </div>
    <div class="mt-7">
      <TheTableView :usersData="users" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search, Plus } from "@element-plus/icons-vue";
import TheTableView from "../Reuseable/TheTableView.vue";

const props = defineProps({
  nameUserPage: {
    type: String,
  },
});
const sortByOptions = function () {
  return this.columns
    .map(({ name, key, sortable }) => sortable && (name || key))
    .filter(Boolean);
};
const input3 = ref("");
const sortBy = "username";
const sortingOrder = "asc";
const users = [
  {
    id: 22822,
    login: "Asialuxe Travel",
    role: "Владелец кабинета",
    status: "Active",
    date: "2021-12-11 14:17:46",
  },
  {
    id: 22823,
    login: "Asialuxe Travel",
    role: "Руководитель",
    status: "Active",
    date: "2021-12-11 14:17:46",
  },
  {
    id: 22824,
    login: "Asialuxe Travel",
    role: "Бухгалтер",
    status: "Inactive",
    date: "2021-12-11 14:17:46",
  },
  {
    id: 22825,
    login: "Asialuxe Travel",
    role: "Оператор отдела продаж",
    status: "Active",
    date: "2021-12-11 14:17:46",
  },
];

const columns = [
  { key: "id", sortable: true, sortingOptions: ["desc", "asc"] },
  { key: "username", sortable: true },
  { key: "name", sortable: true },
  { key: "address.city", name: "city", label: "City", sortable: true },
  { key: "phone" },
];

const sortingOrderOptions = [
  { text: "asc", value: "asc" },
  { text: "desc", value: "desc" },
  { text: "no sorting", value: null },
];
</script>

<style lang="scss" scoped>
@import "../../scss/style.scss";
.title-txt {
  @include common-text-style(18px, 700, normal);
}
.search-input-wrap {
  height: 44px;
  .search-btn {
    height: 100%;
    border-radius: 4px 0 0 4px;
    padding: 12px;
  }
  .input {
    height: 100%;
    border-radius: 0 !important;
    @include common-text-style(12px, 400, 17px);
  }
}
</style>
