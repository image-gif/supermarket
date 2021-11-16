<template>
  <div class="home">
    <NavBar class="home-nav"></NavBar>
    <HomeSwiper :banner="banner"></HomeSwiper>
    <HomeRecommed :recommend="recommend"></HomeRecommed>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from './components/HomeSwiper'
import HomeRecommed from './components/HomeRecommend'

import { getMultiData } from '@/network/homerequest.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommed,
  },
  data() {
    return {
      banner: [],
      recommend: [],
    }
  },

  //created
  created() {
    // 请求多条数据
    getMultiData().then((res) => {
      // console.log(res)
      // console.log(res.data.data.banner.list)
      this.banner = res.data.data.banner.list
      console.log(res.data.data.recommend.list)
      this.recommend = res.data.data.recommend.list
    })
  },
}
</script>

<style lang="less" scoped>
.home-nav {
  background-color: pink;
}
</style>