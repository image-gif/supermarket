<template>
  <div class="mycategory">
    <!-- {{leftList}} -->
    <ul>
      <li v-for="(item, index) in leftList"
          :key="index"
          :class="{active: index === isclicked}"
          @click="onClick(item, index)">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftCategory',
  props: {
    leftList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      isclicked: 0,
    }
  },
  methods: {
    onClick(item, index) {
      this.isclicked = index //点击目录产生active样式
      // console.log(index)
      const obj = {
        maitKey: item.maitKey,
        index,
      }
      this.$emit('leftonclicked', obj)
    },
  },
}
</script>

<style lang="less" scoped>
.mycategory {
  ul {
    display: flex;
    flex-direction: column;
    height: 100%;

    li {
      display: flex;
      flex: 1;
      justify-content: space-evenly;
      align-items: center;
    }
    .active {
      color: pink;
      border-bottom: 2px solid pink;
    }
  }
}
</style>