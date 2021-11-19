<template>
  <div class="recommend-info"
       v-if="Object.keys(goodsRecommend).length !== 0">
    <div class="recommend-info-list"
         v-for="(item, index) in goodsRecommend"
         :key="index">
      <img :src="item.image"
           class="recommend-info-img">
      <div class="recommend-info-title">{{item.title}}</div>
      <div>
        <span class="recommend-info-price">{{item.descountPrice}}</span>
        <span>
          <img src="@/assets/img/collect_icon.png"
               class="icon">
          {{item.cfav}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecommendInfo',
  props: {
    goodsRecommend: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="less" scoped>
.recommend-info {
  display: flex;
  padding: 0 8px;
  // 是否允许换行 默认：nowrap
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 4px solid #ececec;
  .recommend-info-list {
    width: 49%;
    margin-top: 6px;
  }
  .recommend-info-title {
    width: 100%;
    font-size: 14px;
    margin: 4px 0;
    // text-overflow CSS 属性确定如何向用户发出未显示的溢出内容信号。
    // 它可以被剪切，显示一个省略号或显示一个自定义字符串。
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .recommend-info-img {
    width: 100%;
    border-radius: 6px;
  }
  .recommend-info-price {
    color: pink;
    margin-right: 6px;
  }
  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: -4px;
  }
}
</style>