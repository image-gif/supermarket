<template>
  <div class="tab_bar_item">
    <!-- <img src="../assets/img/logo.png"
         alt="">
    <div>首页</div> -->
    <div :style="activeStyle"
         @click="Onchange">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Tabbar_item',
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: 'blue',
    },
  },

  data() {
    return {
      // isactive: true,
    }
  },
  methods: {
    Onchange() {
      // this.$router.replace(this.path)
      this.$router.push(this.path)
      // console.log(this.$route)
    },
  },
  computed: {
    isactive() {
      // console.log(this.$route.path)
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isactive ? { color: this.activeColor } : {}
    },
  },
}
</script>

<style lang="less" scoped>
.tab_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;

  img {
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active {
    color: blue;
  }
}
</style>