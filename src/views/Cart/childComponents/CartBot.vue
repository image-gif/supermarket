<template>
  <div class="cart-bot flex">
    <div class="bot-left flex">
      <CheckBox :isCheck="isChecked"
                @click.native="onClick"></CheckBox>
      <span>全选</span>
    </div>
    <div class="bot-right flex">
      <div class="content-right">
        <span class="text">合计:</span>
        <span class="common-style symbol">￥</span>
        <span class="common-style price">{{TotalPrice}}</span>
      </div>
      <span class="calculate">结算({{CheckedLength}})</span>
    </div>
  </div>
</template>

<script>
import CheckBox from 'components/common/checkBox/CheckBox'

import { mapGetters } from 'vuex'
export default {
  name: 'CartBot',
  computed: {
    ...mapGetters(['cartList']),
    TotalPrice() {
      // return
      // 使用累加器 reduce
      //筛选符合条件的元素，并放到新的数组中 ，filter
      //arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
      return this.cartList
        .filter((item) => {
          return item.checked
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0)
        .toFixed(2)
    },
    CheckedLength() {
      return this.cartList.filter((item) => item.checked).length
    },
    isChecked: {
      get() {
        if (this.cartList.length === 0) return false
        // 由于 filter 会遍历整个数组，所以在性能上还有点不足
        // return this.cartList.filter((item) => !item.checked).length === 0
        // 找到符合条件的元素，并返回第一个符合条件的元素
        return !this.cartList.find((item) => !item.checked)
      },
      // 为了可以修改isChecked而专门设置set
      set(val) {},
    },
  },
  components: {
    CheckBox,
  },
  methods: {
    onClick() {
      this.isChecked = !this.isChecked
      console.log('ok')
      // 直接这样写会造成混乱
      // this.cartList.forEach((item) => (item.checked = !item.checked))
      // 必须做判断先
      if (this.isChecked)
        this.cartList.forEach((item) => (item.checked = false))
      else this.cartList.forEach((item) => (item.checked = true))
    },
  },
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}
.cart-bot {
  // bottom: 49px;
  height: 40px;
  padding: 0 5px;
  border: 1px solid #ccc;
  // background-color: pink;
  justify-content: space-between;
  .bot-left {
    width: 30%;
    align-items: center;

    span {
      margin-left: 8px;
    }
  }
  .bot-right {
    .content-right {
      // 文字内容垂直居中
      line-height: 40px;

      // 对 ‘合计’这个文本的编辑
      .text {
        font-size: 13px;
      }
      // 价格的相同样式编辑
      .common-style {
        color: rgb(236, 73, 9);
      }
      // ￥的编辑
      .symbol {
        font-size: 12px;
      }
      // 价格 的编辑
      .price {
        font-size: 20px;
      }
    }
    // calculate
    .calculate {
      width: 60px;
      height: 30px;
      line-height: 30px;
      margin-top: 4px;
      text-align: center;
      color: #fff;
      background-color: rgb(236, 73, 9);
      border-radius: 15px;
    }
  }
}
</style>