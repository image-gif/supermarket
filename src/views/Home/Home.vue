<template>
  <div id="home"
       class="wrapper">
    <NavBar class="home-nav">
      <div slot='center'>购物街</div>
    </NavBar>
    <TabControl :list="['流行','精选','新品']"
                class="homeTabControl2"
                ref="tabControl2"
                @changeIndex="getIndex"
                :class="{fixed: isFixed}"
                v-show="isFixed"></TabControl>
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @onscroll="getPosition"
            @PullingUp="getPullingUp">
      <HomeSwiper :banner="banner"
                  @loadedImg="getoffsetTop"></HomeSwiper>
      <HomeRecommed :recommend="recommend"></HomeRecommed>
      <HomeFeature></HomeFeature>
      <TabControl :list="['流行','精选','新品']"
                  class="homeTabControl"
                  ref="tabControl1"
                  @changeIndex="getIndex"
                  :class="{fixed: isFixed}"></TabControl>
      <GoodsList :goods="goods[this.currentIndex].list"></GoodsList>
    </Scroll>
    <BackTop v-show="isShowBackTop"
             @click.native="OnClick"></BackTop>
    <!-- <ul>
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
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
      <li>51</li>
      <li>52</li>
      <li>53</li>
      <li>54</li>
      <li>55</li>
      <li>56</li>
      <li>57</li>
      <li>58</li>
      <li>59</li>
      <li>60</li>
      <li>61</li>
      <li>62</li>
      <li>63</li>
      <li>64</li>
      <li>65</li>
      <li>66</li>
      <li>67</li>
      <li>68</li>
      <li>69</li>
      <li>70</li>
      <li>71</li>
      <li>72</li>
      <li>73</li>
      <li>74</li>
      <li>75</li>
      <li>76</li>
      <li>77</li>
      <li>78</li>
      <li>79</li>
      <li>80</li>
      <li>81</li>
      <li>82</li>
      <li>83</li>
      <li>84</li>
      <li>85</li>
      <li>86</li>
      <li>87</li>
      <li>88</li>
      <li>89</li>
      <li>90</li>
      <li>91</li>
      <li>92</li>
      <li>93</li>
      <li>94</li>
      <li>95</li>
      <li>96</li>
      <li>97</li>
      <li>98</li>
      <li>99</li>
      <li>100</li>
    </ul> -->
  </div>

</template>

<script>
// 公共组件
import NavBar from 'components/common/navBar/NavBar'
import TabControl from 'components/common/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/BScroll'
import BackTop from 'components/common/backTop/BackTop'

// home专有组件
import HomeSwiper from './components/HomeSwiper'
import HomeRecommed from './components/HomeRecommend'
import HomeFeature from './components/HomeFeature'

//axios请求数据
import { getMultiData, getGoodsInfo } from '@/network/homerequest.js'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommed,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      //商品数据
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      //确定当前tabControl 被点击的对象
      currentIndex: 'pop',
      // 显示backTop的判断
      isShowBackTop: false,
      //offsetTop
      tabControlHeight: 0,
      //tabControl吸顶判断
      isFixed: false,
    }
  },

  //created
  created() {
    // 请求多条数据
    getMultiData().then((res) => {
      // console.log(res)
      // console.log(res.data.data.banner.list)
      this.banner = res.data.data.banner.list
      // console.log(res.data.data.recommend.list)
      this.recommend = res.data.data.recommend.list
    })
    // 初始时就获取各tabControl下的数据
    this.getInfo('pop')
    this.getInfo('new')
    this.getInfo('sell')
  },

  //
  mounted() {
    //获取TabControl的offsetTop
    // 所有组件都有$el属性，用于获取组件中的元素
    // 这里得出的offsetTop是不准确的，原因是图片的异步加载，
    // mounted中，此时图片可能没有完全加载进出，导致计算出来的高度不准确
    // console.log(this.$refs.tabControl.$el.offsetTop)
  },

  methods: {
    // 发起axios请求
    getInfo(type) {
      // console.log(this.goods[type])
      const page = this.goods[type].page + 1
      getGoodsInfo(type, page).then((res) => {
        // console.log(res.data.data.list)
        // Array.push(...item) <-- 可变参数
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        // console.log(this.$refs.scroll.scroll)
        setTimeout(() => {
          this.$refs.scroll.scroll.finishPullUp()
        }, 2000)
        // 调用bsscroll的更新
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      })
    },

    //对子组件发送的数据进行处理
    getIndex(index) {
      // console.log(index)
      // this.currentIndex =
      switch (index) {
        case 0:
          this.currentIndex = 'pop'
          break
        case 1:
          this.currentIndex = 'sell'
          break
        case 2:
          this.currentIndex = 'new'
      }
      // console.log(index)
      this.$refs.tabControl1.CurrentIndex = index
      this.$refs.tabControl2.CurrentIndex = index
    },

    getPosition(position) {
      // console.log(-position.y),
      this.isShowBackTop = -position.y > 540
      //
      this.isFixed = -position.y > this.tabControlHeight
    },
    // 组件BackTop被点击时，
    OnClick() {
      // console.log(this.$refs.scroll.scroll)
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },

    // 上拉刷新
    getPullingUp() {
      // console.log('上拉刷新')
      // this.$refs.scroll.scroll.finishPullUp()
      this.getInfo(this.currentIndex)

      // setTimeout(() => {
      //   this.$refs.scroll.scroll.finishPullUp()
      // }, 2000)
    },

    getoffsetTop() {
      // console.log(this.$refs.tabControl1.$el.offsetTop)
      this.tabControlHeight = this.$refs.tabControl1.$el.offsetTop
    },
  },

  destroyed() {
    // console.log('销毁home')
  },
}
</script>

<style  scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: pink;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}

.homeTabControl2 {
  position: relative;
  z-index: 999;
}
</style>