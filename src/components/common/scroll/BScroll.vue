<template>
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    // 数据更新时，刷新scroll的延时
    refreshDelay: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      scroll: null,
    }
  },

  mounted() {
    // 在确保DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },

  methods: {
    initScroll() {
      if (!this.$refs.wrapper) return
      // 创建实例对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, //解除默认静止的设置
        mouseWheel: true,
        // 这里是上下弹性效果的设置
        bounce: {
          top: false,
          // bottom: false,
        },
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
        //上拉刷新时所需属性
        pullUpLoad: true,
      })
      // 监听事件设置，处理函数

      // 监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position)
        this.$emit('onscroll', position)
      })
      //
      this.scroll.on('pullingUp', () => {
        // console.log('上拉加载')
        this.$emit('PullingUp')
      })
    },

    refresh() {
      // 代理better-scroll的refresh()
      this.scroll && this.scroll.refresh()
    },
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    },
  },
  //
}
</script>

<style lang="less" scoped>
// .content {
//   // height: 300px;
// }
</style>