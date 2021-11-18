
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainItem></MainItem>
  </div>
</template>

<script>
import MainItem from 'components/content/MainItem/'
export default {
  name: 'App',
  components: {
    MainItem,
  },
}
</script>

<style lang = "less" scoped>
@import './assets/CSS/base.css';
</style>