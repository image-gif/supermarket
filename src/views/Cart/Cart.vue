<template>
  <div class="cart">
    <NavBar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <CartList></CartList>
    <CartBot></CartBot>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import { mapGetters } from 'vuex'

import CartList from './childComponents/CartList'
import CartBot from './childComponents/CartBot'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBot,
  },
  computed: {
    ...mapGetters(['cartLength']),
  },

  methods: {},
}
</script>

<style lang="less" scoped>
.cart {
  .cart-nav {
    background-color: pink;
    // font-weight: 700;
  }
}
</style>