<template>
  <div id="detail">

    <DetailNavBar class="navbar"></DetailNavBar>
    <BScroll class="Content"
             ref="scroll"
             :pullUpLoad="true">
      <DetailSwiper :banner="banner"></DetailSwiper>
      <DetailBaseInfo :baseInfo="goods"></DetailBaseInfo>
      <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo"
                       @imgLoad="imgLoad"></DetailGoodsInfo>
      <DetailGoodsParams :detailGoodsParams="goodsParams"></DetailGoodsParams>
      <DetailCommentData :detail-comment-info="detailCommentData"></DetailCommentData>
      <DetailRecommendInfo :goodsRecommend="goodsRecommend"></DetailRecommendInfo>
    </BScroll>
  </div>
</template>

<script>
import {
  getDetailData,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from '@/network/detailrequest'
import BScroll from 'components/common/scroll/BScroll'

import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailGoodsParams from './childComponents/DetailGoodsParams'
import DetailCommentData from './childComponents/DetailCommentData'
import DetailRecommendInfo from './childComponents/DetailRecommendInfo'
export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParams,
    DetailCommentData,
    DetailRecommendInfo,
    BScroll,
  },

  data() {
    return {
      id: null,
      banner: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      goodsParams: {},
      detailCommentData: [],
      goodsRecommend: [],
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.id = this.$route.params.id
    // 获取商品数据
    getDetailData(this.id).then((res) => {
      console.log('商品数据')
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

      // 获取商品的详情信息
      this.detailInfo = res.data.result.detailInfo

      // 获取商品详情参数
      this.goodsParams = new GoodsParams(
        res.data.result.itemParams.info,
        res.data.result.itemParams.rule
      )

      // 获取客服评论数据
      this.detailCommentData = res.data.result.rate.list

      // console.log(this.$refs.scroll)
    })

    // 获取推荐
    getRecommend().then((res) => {
      console.log('推荐数据')
      console.log(res)
      this.goodsRecommend = res.data.data.list
    })
  },

  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
    },
  },
}
</script>

<style lang="less" scoped>
#detail {
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
  .navbar {
    position: relative;
    z-index: 999;
    background-color: #fff;
  }
  .Content {
    height: calc(100% - 44px);
  }
}
</style>