<template>
  <div>
    <div class="tabcontrol">
      <div v-for="(item,index) in list"
           :key="index"
           class="item"
           :class="{active: index === CurrentIndex}"
           @click="onClick(index)">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    list: {
      type: Array,
      default: function () {},
    },
  },
  data() {
    return {
      CurrentIndex: 0,
    }
  },
  methods: {
    onClick(index) {
      this.CurrentIndex = index
      // 向父组件发送数据
      this.$emit('changeIndex', index)
    },
  },
}
</script>

<style lang='less' scoped>
.tabcontrol {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  z-index: 999;

  background-color: #fff;

  .item {
    flex: 1;
  }
  .active {
    color: pink;
    span {
      padding-bottom: 4px;
      border-bottom: 2px solid pink;
    }
  }
}
</style> 