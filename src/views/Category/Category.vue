<template>
  <div class="category">
    <nav-bar class="mynavbar">
      <span slot="center">商品分类</span>
    </nav-bar>

    <div class="category-info">
      <left-category class="left"
                     :leftList="leftCategory"
                     @leftonclicked='leftOnClicked'></left-category>
      <div class="myright">
        <!-- tab-control -->
        <tab-control class="tab-ctrl2"
                     ref="tabControl2"
                     :list="['流行','新款','精选']"
                     :class="{fixed: isFixed}"
                     @changeIndex="getChange"
                     v-show="isFixed"></tab-control>

        <BScroll @onscroll="getPosition"
                 :pull-up-load="true"
                 class="content"
                 :class="{newheight: isFixed}"
                 ref="scroll">
          <!-- 推荐内容 -->
          <category-recommend :recomContentList="categoryRecommendList"></category-recommend>

          <!-- tab-control -->
          <tab-control ref="tabControl"
                       :list="['流行','新款','精选']"
                       :class="{fixed: isFixed}"
                       @changeIndex="getChange"
                       v-show="!isFixed"></tab-control>
          <!-- 主体内容 -->
          <cate-goods-list :itemList="categoryContentList"
                           class="categoodslist"></cate-goods-list>
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
        </BScroll>
      </div>
    </div>
  </div>
</template>

<script>
// 导入navBar 组件
import NavBar from 'components/common/navBar/NavBar'
// 导入better-scroll
import BScroll from 'components/common/scroll/BScroll'
// 导入tabControl 组件
import TabControl from 'components/common/tabControl/TabControl'
// 导入请求接口函数
import {
  getCategory,
  getCategoryInfo,
  getDetailCategoryInfo,
} from '@/network/categoryrequest'
// 导入自己的孩子组件
// 导入左侧分类组件
import leftCategory from './childComponents/leftCategory'
import categoryRecommend from './childComponents/categoryRecommend'
import CateGoodsList from './childComponents/CateGoodsList'

export default {
  name: 'Category',
  components: {
    NavBar,
    BScroll,
    TabControl,
    leftCategory,
    categoryRecommend,
    CateGoodsList,
  },

  data() {
    return {
      leftCategory: [], //保存左侧category
      tabList: ['pop', 'new', 'sell'],
      // 对应目录下的推荐内容
      categoryRecommendList: [],
      // 对应目录下主体数据
      categoryContentList: [],
      // 当前目录索引
      currentIndex: 0,
      // tabControl位置
      TabControlPosition_y: 0,
      // tabControl固定判断
      isFixed: false,
    }
  },
  created() {
    // 获取右侧所需的总数数据，此时还不够详细
    this.getLeftCategory()
    // 获取右侧详细信息
  },

  methods: {
    //点击对应目录时，请求对应数据
    leftOnClicked(obj) {
      // 防止反复请求
      if (this.currentIndex === obj.index) return
      this.currentIndex = obj.index
      // console.log(obj.index)
      // 每次请求后都将tabControl中的索引调到0
      this.$refs.tabControl.CurrentIndex = 0
      this.$refs.tabControl2.CurrentIndex = 0
      //请求对应数据
      this.getsubcategoryInfo(obj.maitKey) //这是对应目录下的推荐数据
      this.getDetailInfo(this.leftCategory[obj.index].miniWallkey, 'pop') //这是对应目录下的主体数据
      // console.log(this.$refs.scroll.scroll.scrollerHeight)
      // this.$refs.scroll.refresh()
      // 点击进入新目录下时，右侧内容滑动到顶部
      this.$refs.scroll.scroll.scrollTo(0, 0, 0)
    },

    // 在methods中定义请求接口函数，然后到created中调用
    // 获取左侧的category
    // 在这里：当进入分类页面时，就开始请求一部分数据
    // 第一类数据是：左侧目录数据；
    // 第二类数据： 右侧对应第一个目录下的推荐内容和主体内容
    //  其中，这里的主体内容为： pop下的内容
    getLeftCategory() {
      getCategory().then((res) => {
        // console.log(res)
        this.leftCategory = res.data.data.category.list
        this.$nextTick(() => {
          // 初始点开分类页面时，自动跳转为第一个目录，主体内容时在pop下
          this.getsubcategoryInfo(this.leftCategory[0].maitKey)
          this.getDetailInfo(this.leftCategory[0].miniWallkey, 'pop')
          // this.$refs.scroll.refresh()
        })
      })
    },
    // 获取对应目录下的数据(推荐数据)
    getsubcategoryInfo(maitKey) {
      getCategoryInfo(maitKey).then((res) => {
        // console.log(res)
        // 通过可变参数的形式，把请求到的数据存入数组中
        this.categoryRecommendList = []
        this.categoryRecommendList = [...res.data.data.list]
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
          // 点击进入新目录下时，右侧内容滑动到顶部
          // this.$refs.scroll.scroll.scrollTo(0, 0, 0)
          // console.log(this.$refs.tabControl)
          this.TabControlPosition_y = this.$refs.tabControl.$el.offsetTop
          // console.log(this.$refs.tabControl)
        })
      })
    },
    // 获取对应目录下的详细信息
    getDetailInfo(maitKey, type) {
      getDetailCategoryInfo(maitKey, type).then((res) => {
        // console.log(res)
        this.categoryContentList = [...res.data]
        this.$nextTick(() => {
          this.$refs.scroll.refresh()
        })
      })
    },

    getPosition(position) {
      this.isFixed = this.TabControlPosition_y < -position.y
      // console.log(this.isFixed)
    },
    // 对于tabControl的设置，实现同步点击效果
    getChange(index) {
      // // 当击对应tabConstrol后，请求对应tabControl下的数据
      this.getDetailInfo(
        this.leftCategory[this.currentIndex].miniWallkey,
        this.tabList[index]
      )
      // console.log(this.tabList[index])
      this.$refs.tabControl.CurrentIndex = index
      this.$refs.tabControl2.CurrentIndex = index
    },
  },
}
</script>

<style lang='less' scoped>
.category {
  position: relative;
  height: 100vh;
  width: 100%;
  .mynavbar {
    font-weight: 700;
    background-color: pink;
  }
  .category-info {
    display: flex;
    height: calc(100vh - 44px);
    .left {
      width: 30%;
      height: calc(100vh - 44px - 49px);
      background-color: #f6f6f6;
    }
    .myright {
      width: 70%;
      height: calc(100vh - 44px - 49px);
      .newheight {
        width: 70%;
        height: calc(100vh - 44px - 49px - 40px) !important;
      }
      .content {
        position: absolute;
        width: 70%;
        // height: 100%;
        height: calc(100vh - 44px - 49px);
        overflow: hidden;
        .categoodslist {
          width: 100%;
        }
      }
      .tab-ctrl2 {
        position: relative;
        // z-index: 999;
      }
    }
  }
}
</style>