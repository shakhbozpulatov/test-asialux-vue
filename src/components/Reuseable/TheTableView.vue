<template>
  <div>
    <table class="table w-100 bg-white">
      <tr class="t-row">
        <th class="t-head">#</th>
        <th class="t-head">Логин</th>
        <th class="t-head">Роли</th>
        <th class="t-head d-flex align-items-center gap-2">
          Статус
          <div
            class="status-icon green"
            @click="isActiveGreen = !isActiveGreen"
          >
            <img
              v-if="isActiveGreen"
              src="../../assets/icons/active.svg"
              alt=""
            />
          </div>
          <div class="status-icon red" @click="isActiveRed = !isActiveRed">
            <img
              v-if="isActiveRed"
              src="../../assets/icons/active.svg"
              alt=""
            />
          </div>
        </th>
        <th class="t-head">Последний вход в систему</th>
        <th class="t-head"></th>
      </tr>
      <tr class="t-row" v-for="(elem, index) in filterUserData" :key="index">
        <td class="t-data">{{ elem.id }}</td>
        <td class="t-data">{{ elem.login }}</td>
        <td class="t-data">{{ elem.role }}</td>
        <td class="t-data">
          <span
            class="status"
            :class="elem.status == 'Active' ? 'active' : 'inactive'"
            >{{ elem.status }}</span
          >
        </td>
        <td class="t-data">{{ elem.date }}</td>
        <td class="t-data">
          <el-button size="large" circle
            ><el-icon size="large"> <Edit /> </el-icon
          ></el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { Edit } from "@element-plus/icons-vue";
import { ref, computed } from "vue";
const props = defineProps({
  usersData: Array,
});
const filterUserData = computed(() => {
  var ids = props.usersData.reduce((ids, user) => {
    if (isActiveGreen.value && user.status == "Active") {
      ids.push(user);
    }
    if (isActiveRed.value && user.status == "Inactive") {
      ids.push(user);
    }
    return ids;
  }, []);
  return ids;
});
const isActiveGreen = ref(true);
const isActiveRed = ref(true);
</script>

<style lang="scss" scoped>
@import "../../scss/style.scss";
.table {
  border-radius: 6px;
  .t-data,
  .t-head {
    padding: 12px 22px;
  }
  .t-data {
    @include common-text-style(14px, 500, normal);
  }
  .status {
    @include common-text-style(14px, 500, normal);
    border-radius: 4px;
  }
  .active {
    color: #064e3b;
    background: #ecfdf5;
  }
  .inactive {
    color: #991b1b;
    background: #fef2f2;
  }
  .t-row {
    border-bottom: 1px solid #e7eaee;
  }
  .status-icon {
    width: 12px;
    height: 12px;
    border: 1px solid #3392ff;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    img {
      position: absolute;
      width: 15px;
      height: 15px;
      top: -4px;
    }
  }
  .green {
    background: #00d37b;
  }
  .red {
    background: #f74c50;
  }
}
</style>
