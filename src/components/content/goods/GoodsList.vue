<template>
  <div class="goodsContainer">
    <GoodsListItem v-for="(item, index) in goods"
                   :key="index"
                   :goodsItem="item"
                   class="item"></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  components: {
    GoodsListItem,
  },
}
</script>

<style lang = "less" scoped>
.goodsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style> 