<template>
  <div v-if="Object.keys(baseInfo).length !== 0"
       class=baseinfo>
    <div class="info-title">{{baseInfo.title}}</div>
    <div class="info-price">
      <span class="newprice">{{baseInfo.newPrice}}</span>&nbsp;
      <span class="oldprice">{{baseInfo.oldPrice}}</span>
      <span v-if="baseInfo.discount"
            class="discount">{{baseInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="serviceitem"
            v-for="index in baseInfo.services.length-2"
            :key="index">
        <img :src="baseInfo.services[index].icon">
        <span>{{baseInfo.services[index].name}}</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang = "less" scoped>
.baseinfo {
  margin-top: 15px;
  padding: 0 6px;
  /* box-shadow: 0 5px 1px rgba(100, 100, 100, 0.1); */
  border-bottom: 5px solid #f2f5f8;
  .info-title {
    /* font-weight: 700; */
    color: #222;
  }
  .info-price {
    margin-top: 10px;
    .newprice {
      font-size: 24px;
      color: rgb(241, 149, 165);
    }
    .oldprice {
      text-decoration: line-through;
      color: #ccc;
    }
    .discount {
      background-color: rgb(245, 26, 62);
      color: #fff;
      font-size: 12px;
      padding: 2px 5px;
      border-radius: 8px;
      margin-left: 2px;
      /* 使用相对定位 */
      position: relative;
      top: -10px;
    }
  }
  .info-other {
    margin-top: 10px;
    display: flex;
    font-size: 13px;
    color: rgb(160, 158, 158);
    line-height: 30px;
    justify-content: space-around;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }
  .info-service {
    display: flex;
    justify-content: space-around;
    line-height: 60px;
    img {
      width: 14px;
      height: 14px;
      vertical-align: text-top;
    }
    span {
      font-size: 13px;
      color: #333;
    }
  }
}
</style>