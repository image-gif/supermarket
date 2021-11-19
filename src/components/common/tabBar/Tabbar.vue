<template>
  <div id="tab_bar">
    <!-- <div class="tab_bar_item">
      <img src="../assets/img/logo.png"
           alt="">
      <div>首页</div>
    </div>
    <div class="tab_bar_item">
      <img src="../assets/img/logo.png"
           alt="">
      <div>关于</div>
    </div>
    <div class="tab_bar_item">
      <img src="../assets/img/logo.png"
           alt="">
      <div>购物车</div>
    </div>
    <div class="tab_bar_item">
      <img src="../assets/img/logo.png"
           alt="">
      <div>我的</div>

    </div> -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
}
</script>

<style lang = 'less' scoped>
#tab_bar {
  display: flex;
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(10, 10, 10, 0.1);
}
</style>