<template>
  <div id="detailNavBar">
    <NavBar class="navbar">
      <div slot="left">
        <img src="@/assets/img/back.svg"
             @click="imgClick">
      </div>
      <div slot="center"
           class="center">
        <div class="item"
             v-for="(item,index) in titles"
             :key='index'
             :class="{active: currentIndex === index}"
             @click="itemClick(index)">
          <span>{{item}}</span>
        </div>
      </div>

    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar,
  },
  props: {
    scrollCurIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      //
      currentIndex: 0,
    }
  },

  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('currentIndex', index)
    },
    imgClick() {
      // 返回上一级
      this.$router.back()
    },
  },
}
</script>

<style lang="less" scoped>
.navbar {
  color: #000;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  img {
    // 图片与文字垂直居中
    vertical-align: middle;
    margin-left: 15px;
  }
  .center {
    display: flex;
    .item {
      flex: 1;
      font-size: 13px;
    }
    .active {
      color: pink;
      span {
        padding-bottom: 4px;
        border-bottom: 2px solid pink;
      }
    }
  }
}
</style>