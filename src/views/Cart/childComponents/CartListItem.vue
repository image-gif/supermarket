<template>
  <div class="cart-item flex">
    <div class="item-left flex">
      <!-- <input type="checkbox"
             class="check"
             :id="'checkbox'+ itemInfo.id">
      <label :for="'checkbox'+ itemInfo.id">
        <img :src="itemInfo.img"
             class="item-img">
      </label> -->
      <CheckBox :isCheck="itemInfo.checked"
                @click.native="onClick"></CheckBox>
      <img :src="itemInfo.img"
           class="item-img"
           @load="imgload">
    </div>
    <div class="item-right">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="good-info flex">
        <span class="price">￥{{itemInfo.price}}</span>
        <span>{{itemInfo.checked}}</span>
        <span>{{itemindex}}</span>
        <span>x{{itemInfo.count}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import CheckBox from 'components/common/checkBox/CheckBox'
export default {
  name: 'CartListItem',
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      },
    },
    itemindex: {
      type: Number,
    },
  },
  components: {
    CheckBox,
  },
  methods: {
    onClick() {
      this.itemInfo.checked = !this.itemInfo.checked
      // // console.log('onClick')
    },
    imgload() {
      this.$emit('loadImg')
    },
  },
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}
.cart-item {
  padding: 10px;
  border-bottom: 1px solid #ececec;
  .item-left {
    width: 40%;
    align-items: center;
    // .check {
    //   width: 15px;
    //   height: 15px;
    //   overflow: hidden;
    //   // border: 1px solid #ececec;
    //   border-radius: 100%;
    // }
    // input[type='checkbox']:checked {
    //   // visibility: hidden;
    //   background: url('../../../assets/img/check_active.png') no-repeat center;
    //   background-size: cover;
    //   // box-shadow: 0 0 0 3px hotpink;
    // }
    .item-img {
      width: 90px;
      height: 109px;
      overflow: hidden;
      border: 1px solid #ececec;
      margin: 0 4px;
      border-radius: 6px;
      vertical-align: middle;
    }
  }
  .item-right {
    width: 60%;
    position: relative;
    .item-title {
      width: 100%;
      font-size: 14px;
    }
    .good-info {
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      .price {
        color: #f9cd0b;
      }
    }
  }
}
</style>