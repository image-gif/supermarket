<template>
  <Tabbar>
    <TabbarItem path="/home"
                activeColor="blue">
      <img src="@/assets/img/logo.png"
           alt="">
      <div>首页</div>
    </TabbarItem>
    <TabbarItem path="/category"
                activeColor="red">
      <img src="@/assets/img/logo.png"
           alt="">
      <div>目录</div>
    </TabbarItem>
    <TabbarItem path="/cart"
                activeColor="green">
      <img src="@/assets/img/logo.png"
           alt="">
      <div>购物车</div>
    </TabbarItem>
    <TabbarItem path="/profile"
                activeColor="pink">
      <img src="@/assets/img/logo.png"
           alt="">
      <div>我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
import Tabbar from 'components/common/tabBar/Tabbar'
import TabbarItem from 'components/common/tabBar/Tabbar_item'
export default {
  name: 'mianItem',
  components: {
    Tabbar,
    TabbarItem,
  },
}
</script>

<style lang = "less" scoped>
</style>