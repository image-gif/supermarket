<template>
  <div class="check-box"
       :class="{box: !isCheck}">
    <img src="@/assets/img/check_active.png"
         v-show="isCheck">
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    isCheck: {
      type: Boolean,
      default: true,
    },
  },

  // data() {
  //   return {
  //     isClick: false,
  //   }
  // },
}
</script>

<style lang="less" scoped>
.check-box {
  width: 21px;
  height: 21px;

  img {
    width: 20px;
    height: 20px;
  }
}
.box {
  border-radius: 50%;
  border: 2px solid #aaa;
}
</style>