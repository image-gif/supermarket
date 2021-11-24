<template>
  <div class="categoryRecommend">
    <li v-for="(item, index) in recomContentList"
        :key="index"
        class="item-info">
      <img :src="item.image">
      <div class="title">{{item.title}}</div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'categoryRecommend',
  props: {
    recomContentList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  mounted() {
    // console.log();
  },
}
</script>

<style lang="less" scoped>
.categoryRecommend {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 2px;
  border-bottom: 1px solid #ccc;
  .item-info {
    width: 74px;
    height: 74px;
    text-align: center;
    img {
      width: 50px;
      height: 50px;
    }
    .title {
      // CSS：需要加上宽度(width:100px)、超出隐藏（overflow:hidden;）
      // 、强制在同一行显示（white-space: nowrap;）、省略号（text-overflow:ellipsis;）
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 13px;
    }
  }
}
</style>