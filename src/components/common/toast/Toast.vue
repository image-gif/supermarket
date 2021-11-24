<template>
  <div class="toast"
       v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  name: 'Toast',

  data() {
    return {
      isShow: false,
      message: 'hie',
    }
  },

  methods: {
    show(message, duration) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, duration)
    },
  },
}
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  color: #fff;
  padding: 8px 10px;
  background-color: rgba(0, 0, 0, 0.7);
  // transform: translate 在这里主要是调节位置
  transform: translate(-50%, -50%);
  z-index: 999;
}
</style>