<template>
  <div class="goods-item">
    <img :src="goodItem.img">
    <div class="text">
      <div class="text-title">{{goodItem.title}}</div>
      <div>
        <span class="text-price">{{goodItem.price.toFixed(2)}}</span>&nbsp;
        <span class="text-fav">{{goodItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CateGoodsListItem',
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  mounted() {
    // console.log(this.goodItem)
  },
}
</script>

<style  scoped>
.goods-item {
  width: 48%;
  padding-bottom: 2px;
}
img {
  width: 100%;
  border-radius: 5%;
}

.text {
  width: 100%;
  font-size: 12px;
  text-align: center;
  position: relative;
}
.text-title {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-price {
  color: rgb(221, 73, 73);
}
.text-fav {
  /* color: red; */
  position: relative;
  display: inline-block;
  margin-left: 14px;
}
.text-fav:before {
  content: '';
  position: absolute;
  background-color: blue;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url('../../../assets/img/collect.svg') 0 0/14px 14px;
}
</style>