<template>
  <div class="bottombar">
    <div class="bot-item">
      <p><img src="@/assets/img/icon01.png"></p>
      <p>客服</p>
    </div>
    <div class="bot-item">
      <p><img src="@/assets/img/icon02.png"></p>
      <p>店铺</p>
    </div>
    <div class="bot-item">
      <p><img src="@/assets/img/icon03.png"></p>
      <p>收藏</p>
    </div>
    <div class="cart-btn btn"
         @click="onCartClick">加入购物车</div>
    <div class="buy-btn btn">购买</div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    onCartClick() {
      // console.log('ok')
      this.$emit('addToCart')
    },
  },
}
</script>

<style lang = "less" scoped>
.bottombar {
  position: absolute;
  bottom: 49px;
  display: flex;
  width: 100%;

  /* background-color: pink; */
  .bot-item {
    width: 16%;
    font-size: 12px;
    color: #333;
    text-align: center;
    background-color: #fff;
    img {
      width: 22px;
      height: 22px;
      margin: 4px 0;
      vertical-align: middle;
    }
  }
  .btn {
    width: 26%;
    font-size: 13px;
    line-height: 49px;
    text-align: center;
  }
  .cart-btn {
    background-color: #f9cd0b;
    line-height: 49px;
  }
  .buy-btn {
    color: #fff;
    background-color: pink;
  }
}
</style>