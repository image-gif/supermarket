<template>
  <div class="info-param"
       v-if="Object.keys(detailGoodsParams).length !== 0">
    <table v-for="(item_table,index_table) in detailGoodsParams.sizes"
           :key="index_table">
      <tr v-for="(item_tr,index_tr) in item_table"
          :key="index_tr">
        <td v-for="(item_td,index_td) in item_tr"
            :key="index_td">{{item_td}}</td>
      </tr>
    </table>
    <table class="detailInfo-param">
      <tr v-for="(info,index) in detailGoodsParams.infos"
          :key="index">
        <td class="detailInfo-param-key">{{info.key}}</td>
        <td class="detailInfo-param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img"
         v-if="detailGoodsParams.image.length !== 0">
      <img :src="detailGoodsParams.image">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsParams',
  props: {
    detailGoodsParams: {
      type: Object,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="less" scoped>
.info-param {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  table {
    width: 100%;
    // 合并边线
    border-collapse: collapse;
    tr {
      height: 42px;
      td {
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      }
    }
  }
  .detailInfo-param {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    .detailInfo-param-key {
      // 当value的数据较多时，会挤压key，这里给key一个固定宽度，防止被挤压
      width: 95px;
    }
    .detailInfo-param-value {
      color: #eb4868;
    }
  }
  .info-img {
    img {
      width: 100%;
    }
  }
}
</style>