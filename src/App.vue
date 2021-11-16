
<template>
  <div id="app">
    <router-view></router-view>
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