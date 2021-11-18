<template>
  <div>
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :banner="banner"></DetailSwiper>
    <DetailBaseInfo :baseInfo="goods"></DetailBaseInfo>
    <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import { getDetailData, Goods, Shop } from '@/network/detailrequest'

import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
  },

  data() {
    return {
      id: null,
      banner: [],
      goods: {},
      shopInfo: {},
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.id = this.$route.params.id
    getDetailData(this.id).then((res) => {
      console.log(res.data)
      // 轮播图数据
      this.banner = res.data.result.itemInfo.topImages
      // 商品主要信息数据
      this.goods = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      )

      // 商品信息
      this.shopInfo = new Shop(res.data.result.shopInfo)
    })
  },

  destoryed() {
    console.log('销毁')
  },
}
</script>

<style lang = "less" scoped>
</style>