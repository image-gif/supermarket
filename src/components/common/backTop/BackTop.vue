<template>
  <div class="backtop">
    <img src="@/assets/img/top.png"
         alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
}
</script>

<style lang="less" scoped>
.backtop {
  img {
    z-index: 999;
    position: absolute;
    bottom: 60px;
    right: 10px;
    width: 50px;
    height: 50px;
  }
}
</style>