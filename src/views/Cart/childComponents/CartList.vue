<template>
  <div class="cart-list">
    <!-- <p>this is Cart List</p> -->
    <BScroll class="content"
             ref="scroll"
             :pull-up-load="true">
      <CartListItem v-for="(item,index) in cartList"
                    :key="item.id"
                    :itemInfo="item"
                    :itemindex="index"
                    @loadImg="loading"></CartListItem>
    </BScroll>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BScroll from 'components/common/scroll/BScroll'

import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  components: {
    CartListItem,
    BScroll,
  },

  computed: {
    ...mapGetters(['cartList']),
    // 将数组反向，使得加入购物车的商品中，最新加入的商品在最上方
    // 这样反转会对数组进行打乱，不能这样使用
    // newCartList() {
    //   return this.cartList.reverse()
    // },
  },

  Updated() {},
  methods: {
    loading() {
      // this.$refs.scroll.refresh()
    },
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style lang="less" scoped>
.cart-list {
  // height: calc(100% - 44px - 49px - 40px);
  height: calc(100vh - 44px - 49px - 40px);
  // height: 100vh;
  overflow: hidden;
  .content {
    height: 100%;
    // height: calc(100% - 44px - 49px);
  }
}
</style>