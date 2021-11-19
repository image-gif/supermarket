<template>
  <!-- 有数据时才有DOM元素 -->
  <div v-if="Object.keys(detailInfo).length !== 0"
       class="goods-info">
    <!-- 商品描述信息 -->
    <div class="info-desc">
      <!-- 开始 -->
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <!-- 结束 -->
      <div class="end"></div>
    </div>
    <!-- 关键信息 -->
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <!-- 以列表形式暂展示的信息 -->
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list"
           :key="index"
           :src="item"
           @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0,
    }
  },
  methods: {
    imgLoad() {
      // console.log('Loading images')
      if (++this.counter === this.imagesLength) {
        // console.log('加载')
        this.$emit('imgLoad')
      }
    },
  },

  watch: {
    detailInfo() {
      // 获取图片数量
      this.imagesLength = this.detailInfo.detailImage[0].list.length
    },
  },
}
</script>

<style lang="less" scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  // description
  .info-desc {
    padding: 0 15px;
    .start,
    .end {
      position: relative;
      width: 90px;
      height: 1px;
      background-color: #a3a3a5;
    }
    .start {
      float: left;
    }
    .end {
      float: right;
    }
    .start::before,
    .end::after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background-color: #333;
      bottom: 0;
    }
    .end::after {
      right: 0;
    }
    .desc {
      padding: 15px 0;
      font-size: 14px;
    }
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list {
    img {
      width: 100%;
    }
  }
}
</style>