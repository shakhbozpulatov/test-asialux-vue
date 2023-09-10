<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup></script>

<style lang="scss">
body {
  background: #f5faff;
}
.el-radio-button__inner {
  width: 100% !important;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 700 !important;
}
.avia-tickets {
  .select-trigger {
    .el-input__wrapper {
      padding: 10px;
    }
  }
}
.over-height {
  .el-input__wrapper {
    padding: 6px 20px !important;
    height: 50px !important;
    width: 100% !important;
    .el-input__inner {
      font-size: 16px;
    }
  }
}
.input {
  .el-input__wrapper {
    padding: 10px 12px;
  }
}
</style>
