<template>
  <div>
    <div class="flex mb-2">
      <div class="w-[46%] relative flex items-center">
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
      <div class="over-height w-[23%]">
        <el-date-picker
          class="w-100"
          v-model="datepicker"
          type="date"
          placeholder="Когда"
          format="DD/MM/YYYY"
          value-format="YYYY-MM-DD"
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
                <div class="content-dropdown px-3 py-2 w-100">
                  <div
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="person-type">
                      <h6 class="title m-0">Взрослые</h6>
                      <p class="subtitle m-0">Старше 12 лет</p>
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
                    class="d-flex align-items-center justify-content-between"
                  >
                    <div class="person-type">
                      <h6 class="title m-0">Дети</h6>
                      <p class="subtitle m-0">От 2-х до 12 лет</p>
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
                      <h6 class="title m-0">Младенцы</h6>
                      <p class="subtitle m-0">До 2-х лет</p>
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
    <div
      v-for="(elem, index) in countMultiCity"
      :key="index"
      class="flex mb-2 relative"
    >
      <div class="w-[66%] flex items-center">
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
      </div>
      <div class="over-height w-[34%]">
        <el-date-picker
          class="w-100"
          v-model="datepicker"
          type="date"
          placeholder="Когда"
          format="DD/MM/YYYY"
          value-format="YYYY-MM-DD"
        />
      </div>
      <div
        v-if="countMultiCity > 1"
        @click="subtractRouteBtn"
        class="cursor-pointer absolute top-[-4px] right-[-4px]"
      >
        <el-icon size="22" color="red"><CircleCloseFilled /></el-icon>
      </div>
    </div>
    <div class="flex mb-6">
      <div class="w-[20%]">
        <el-button @click="addRouteBtn" class="add-route w-100"
          ><el-icon class="mr-2" size="large"><CirclePlusFilled /></el-icon
          >Добавить маршрут
        </el-button>
      </div>
      <div class="w-[20%]">
        <el-input class="input" v-model="input" placeholder="Период" />
      </div>
      <div class="w-[20%]">
        <el-input class="input" v-model="input" placeholder="Тип" />
      </div>
      <div class="over-height w-[20%]">
        <el-input class="input" v-model="input" placeholder="Класс" />
      </div>
      <div class="over-height w-[20%]">
        <el-input class="input" v-model="input" placeholder="Цена до, UZS" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowDown,
  ArrowUp,
  CirclePlusFilled,
  CircleCloseFilled,
} from "@element-plus/icons-vue";
import { ref, reactive } from "vue";

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
let countMultiCity = ref(1);
const addRouteBtn = function () {
  countMultiCity.value++;
};
const subtractRouteBtn = function () {
  countMultiCity.value--;
};
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
.add-route {
  font-size: 14px;
  font-weight: 600;
  color: #3392ff;
  padding: 24px 0;
}
</style>
