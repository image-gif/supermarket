<template>
  <div class="nav_bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang = "less" scoped>
.nav_bar {
  /* position: fixed; */
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
  color: #fff;
  .left {
    width: 60px;
    /* background-color: lightcoral; */
  }
  .center {
    flex: 1;
    text-align: center;
    /* background-color: pink; */
  }
  .right {
    width: 60px;
    /* background-color: lightcoral; */
  }
}
</style>