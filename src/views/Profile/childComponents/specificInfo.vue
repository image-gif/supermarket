<template>
  <div class="specific-info">
    <li>
      <span></span>
      <div>我的消息</div>
    </li>
    <li>
      <span></span>
      <div>积分商城</div>
    </li>
    <li>
      <span></span>
      <div>会员卡</div>
    </li>
    <li>
      <span></span>
      <div>购物车</div>
    </li>
    <li>
      <span></span>
      <div>收藏</div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'SpecificInfo',
}
</script>

<style lang="less" scoped>
.specific-info {
  margin-top: 10px;
  li {
    display: flex;
    padding: 10px 10px;
    padding-right: 0;
    padding-bottom: 0;
    span {
      text-align: center;
      width: 10%;
    }
    div {
      width: 90%;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>