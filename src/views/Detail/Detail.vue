<template>
  <div id="detail">
    <DetailNavBar class="navbar"
                  ref="navbar"
                  @currentIndex="getCurrentIndex"></DetailNavBar>
    <div class="myscroll">
      <BScroll class="Content"
               ref="scroll"
               :pull-up-load="true"
               :scroll-cur-index="currentNavIndex"
               @onscroll="getPosition">
        <!-- <div>{{$store.state.cartList}}</div> -->
        <DetailSwiper :banner="banner"></DetailSwiper>
        <DetailBaseInfo :base-info="goods"></DetailBaseInfo>
        <DetailShopInfo :shop-info="shopInfo"></DetailShopInfo>
        <DetailGoodsInfo :detail-info="detailInfo"
                         @imgLoad="imgLoad"></DetailGoodsInfo>
        <DetailGoodsParams ref="goodsParams"
                           :detail-goods-params="goodsParams"></DetailGoodsParams>
        <DetailCommentData ref="goodsComment"
                           :detail-comment-info="detailCommentData"></DetailCommentData>
        <DetailRecommendInfo ref="goodsRecommend"
                             :goods-recommend="goodsRecommend"></DetailRecommendInfo>
      </BScroll>
    </div>
    <BackTop ref="backTop"
             @click.native="backtop"
             v-show="showBackTop"></BackTop>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    <!-- <Toast></Toast> -->
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
import BackTop from 'components/common/backTop/BackTop'
// 添加独立封装的Toast 组件
// import Toast from 'components/common/toast/Toast'

import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailGoodsParams from './childComponents/DetailGoodsParams'
import DetailCommentData from './childComponents/DetailCommentData'
import DetailRecommendInfo from './childComponents/DetailRecommendInfo'
import DetailBottomBar from './childComponents/DetailBottomBar'
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
    DetailBottomBar,
    BScroll,
    BackTop,
    // Toast组件
    // Toast,
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
      itemOffsetTopList: [],
      // 在导航栏处，记录当前选中的导航选项
      currentNavIndex: 0,
      // 关于Toast的message属性
      mes: '添加商品成功',
      // v-show :
      showBackTop: false,
    }
  },
  created() {
    // console.log(this.$route.params.id)
    this.id = this.$route.params.id
    // 获取商品数据
    getDetailData(this.id).then((res) => {
      // console.log('商品数据')
      // console.log(res.data)
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

      // 获取对应信息块的位置
      // 无法正常获取到对应信息块的位置信息
      // this.itemOffsetTopList.push(0)
      // this.itemOffsetTopList.push(this.$refs.goodsParams.$el.offsetTop)
      // this.itemOffsetTopList.push(this.$refs.goodsComment.$el.offsetTop)
      // this.itemOffsetTopList.push(this.$refs.goodsRecommend.$el.offsetTop)
      // console.log(this.itemOffsetTopList)

      // 同样无法获取正确的位置
      // this.$nextTick(() => {
      //   this.itemOffsetTopList.push(0)
      //   this.itemOffsetTopList.push(this.$refs.goodsParams.$el.offsetTop)
      //   this.itemOffsetTopList.push(this.$refs.goodsComment.$el.offsetTop)
      //   this.itemOffsetTopList.push(this.$refs.goodsRecommend.$el.offsetTop)
      //   console.log(this.itemOffsetTopList)
      // })

      // this.$nextTick(() => {
      //   // this.$refs.scroll.refresh()
      //   // console.log(this.$refs.scroll.scroll.scrollerHeight)
      // })
    })

    // 获取推荐
    getRecommend().then((res) => {
      // console.log('推荐数据')
      // console.log(res)
      this.goodsRecommend = res.data.data.list
    })
  },

  mounted() {
    // 这里也无法获取对应的数据
    // this.itemOffsetTopList.push(0)
    // this.itemOffsetTopList.push(this.$refs.goodsParams.$el.offsetTop)
    // this.itemOffsetTopList.push(this.$refs.goodsComment.$el.offsetTop)
    // this.itemOffsetTopList.push(this.$refs.goodsRecommend.$el.offsetTop)
    // console.log(this.itemOffsetTopList)
  },

  updated() {
    // this.itemOffsetTopList = []
    // this.itemOffsetTopList.push(0)
    // this.itemOffsetTopList.push(this.$refs.goodsParams.$el.offsetTop)
    // this.itemOffsetTopList.push(this.$refs.goodsComment.$el.offsetTop)
    // this.itemOffsetTopList.push(this.$refs.goodsRecommend.$el.offsetTop)
    // console.log(this.itemOffsetTopList)
  },

  methods: {
    //
    imgLoad() {
      this.$refs.scroll.refresh()
      // 待图片加载完后，获取对应信息块的offsetTop
      this.itemOffsetTopList.push(0)
      this.itemOffsetTopList.push(this.$refs.goodsParams.$el.offsetTop - 44)
      this.itemOffsetTopList.push(this.$refs.goodsComment.$el.offsetTop - 44)
      this.itemOffsetTopList.push(this.$refs.goodsRecommend.$el.offsetTop - 44)
      // console.log(this.itemOffsetTopList)
      // console.log(this.$refs.scroll.scroll.scrollerHeight)
    },
    // 这里是对导航栏选项对应商品信息块的滚动处理
    getCurrentIndex(value) {
      // console.log(value)
      // console.log(this.$refs.scroll)
      // console.log(this.itemOffsetTopList[value])
      this.$refs.scroll.scroll.scrollTo(0, -this.itemOffsetTopList[value], 500)
    },
    // 这里是在对获取的滚动位置进行导航栏栏处理处理
    getPosition(position) {
      const pos = -position.y
      this.showBackTop = pos > 1000
      const arr = this.itemOffsetTopList
      // arr[0]< pos < arr[1] : 导航选项在商品处
      // arr[1]< pos < arr[2] : 导航选项在参数处
      // arr[2] < pos < arr[3] : 导航选项在评价处
      //  arr [3] < pos : 导航选项在推荐处
      for (let i = 0; i < arr.length; i++) {
        if (
          this.currentNavIndex !== i &&
          ((pos >= arr[i] && pos < arr[i + 1]) ||
            (i === arr.length - 1 && pos >= arr[i]))
        ) {
          // console.log(i)
          this.currentNavIndex = i
          // console.log(this.$refs.navbar.currentIndex)
          this.$refs.navbar.currentIndex = this.currentNavIndex
        }
      }
    },
    //回到顶部
    backtop() {
      // console.log()
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      console.log(this.$refs.scroll)
      // console.log('ok')
    },

    addToCart() {
      // console.log(this.detailInfo)
      const product = {}
      // console.log(this.goods)
      product.img = this.banner[0]
      product.title = this.goods.title
      product.price = this.goods.realPrice
      product.desc = this.goods.descs
      product.id = this.id
      // console.log(this)
      // console.log(this.$store)

      // mutations
      // this.$store.commit('addToCart', product)
      // actions,  dispatch 可以返回 一个 promise 对象
      this.$store.dispatch('addCart', product).then((res) => {
        // this.show = true
        // this.mes = res
        // // console.log(res)
        // setTimeout(() => {
        //   this.show = false
        // }, 1000)
        // console.log(this.$toast)
        this.$toast.show(res, 1000)
      })
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
    // position: relative;
    // top: 44px;
    // bottom: 49px;
    height: calc(100vh - 44px - 49px);
    // 这是关键所在，解决当在navbar或tabBar上滑动时，不让页面滚动
    overflow: hidden;
    // position: relative;
    // top: 44px;
  }
}
</style>