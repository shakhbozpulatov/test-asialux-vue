<template>
  <div>
    <div class="flex mb-2">
      <div class="w-[42%] relative flex items-center">
        <div class="w-[50%] relative">
          <el-select
            :fit-input-width="true"
            class="select-input w-100"
            v-model="value"
            placeholder="Откуда"
            filterable
          >
            <el-option-group
              v-for="group in optionsCity"
              :key="group.subtext"
              :label="group.label"
              :value="group.subtext"
            >
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span
                  style="
                    float: right;
                    color: var(--el-text-color-secondary);
                    font-size: 13px;
                  "
                  >{{ item.value }}</span
                >
              </el-option>
            </el-option-group>
          </el-select>
          <img
            class="absolute top-[50%] right-6 translate-y-[-50%]"
            src="../../assets/icons/plane.svg"
            alt=""
          />
        </div>
        <div class="w-[50%] relative">
          <el-select
            :fit-input-width="true"
            class="select-input w-100"
            v-model="value"
            placeholder="Куда"
            filterable
          >
            <el-option-group
              v-for="group in optionsCity"
              :key="group.subtext"
              :label="group.label"
              :value="group.subtext"
            >
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span
                  style="
                    float: right;
                    color: var(--el-text-color-secondary);
                    font-size: 13px;
                  "
                  >{{ item.value }}</span
                >
              </el-option>
            </el-option-group>
          </el-select>
          <img
            src="../../assets/icons/plane.svg"
            class="absolute top-[50%] right-5 translate-y-[-50%] rotate-[80deg]"
            alt=""
          />
        </div>
        <div
          class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
        >
          <img src="../../assets/icons/change-reverse.svg" alt="" />
        </div>
      </div>
      <div class="over-height w-[25%]">
        <el-date-picker
          v-model="roundTrip"
          class="datepicker"
          type="daterange"
          range-separator="To"
          start-placeholder="Когда"
          end-placeholder="Обратно"
          format="DD/MM/YYYY"
          value-format="YYYY-MM-DD"
          size="large"
        />
      </div>
      <div class="flex items-start w-[31%]">
        <div class="w-[50%]">
          <el-dropdown class="passanger-menu w-100" trigger="click">
            <el-button class="pas-menu-btn w-100" type="">
              1 пассажир<el-icon class="el-icon--right"
                ><el-icon><ArrowDown /></el-icon
              ></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <div class="content-dropdown px-3 py-2 w-[300px]">
                  <div
                    class="d-flex align-items-center justify-content-between mb-2"
                  >
                    <div>
                      <h6 class="text-sm font-bold text-[#333] m-0">
                        Взрослые
                      </h6>
                      <p class="text-xs font-bold text-[#333333a8] m-0">
                        Старше 12 лет
                      </p>
                    </div>
                    <div>
                      <el-input-number
                        v-model="searchData.adult"
                        :min="1"
                        :max="10"
                      />
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between mb-2"
                  >
                    <div class="person-type">
                      <h6 class="text-sm font-bold text-[#333] m-0">Дети</h6>
                      <p class="text-xs font-bold text-[#333333a8] m-0">
                        От 2-х до 12 лет
                      </p>
                    </div>
                    <div>
                      <el-input-number
                        v-model="searchData.children"
                        :min="0"
                        :max="10"
                      />
                    </div>
                  </div>
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="person-type">
                      <h6 class="text-sm font-bold text-[#333] m-0">
                        Младенцы
                      </h6>
                      <p class="text-xs font-bold text-[#333333a8] m-0">
                        До 2-х лет
                      </p>
                    </div>
                    <el-input-number
                      v-model="searchData.infant"
                      :min="0"
                      :max="10"
                    />
                  </div>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="w-[50%]">
          <el-button class="search-btn w-100" type="primary">Поиск</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown, ArrowUp } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";

const datepicker = ref("");
const value = ref("");
const roundTrip = ref("");
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
const optionsCity = [
  {
    label: "Стамбул, Турция",
    options: [
      {
        value: "IST",
        label: "Стамбул Новый аэропорт",
      },
      {
        value: "SAW",
        label: "Сабиха Гёкчен",
      },
    ],
  },
  {
    label: "Москва, Россия",
    options: [
      {
        value: "IST",
        label: "Москва, Россия",
      },
      {
        value: "SAW",
        label: "Москва, Россия",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.pas-menu-btn,
.search-btn {
  padding: 24px 10px;
  font-size: 16px;
  font-weight: 700;
  span {
    text-align: center;
  }
}
.passanger-menu {
  .content-dropdown {
    max-width: 240px;
    width: 100%;
    .person-type {
      .title {
        font-size: 20px;
      }
      .subtitle {
        font-size: 12px;
        color: #aaa;
      }
    }
  }
}
</style>
