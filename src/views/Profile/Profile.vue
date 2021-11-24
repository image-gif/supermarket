<template>
  <div class="profile">
    <nav-bar class="mynavbar">
      <span slot="center">个人中心</span>
    </nav-bar>
    <login-register></login-register>
    <person-info></person-info>
    <specific-info></specific-info>
  </div>
</template>

<script>
// 导入navBar组件
import NavBar from 'components/common/navBar/NavBar'
// 导入上端登录和注册组件
import loginRegister from './childComponents/login-register'
// 导入中间用户个人信息组件
import PersonInfo from './childComponents/PersonInfo.vue'
// 导入下部具体信息组件
import SpecificInfo from './childComponents/specificInfo'
export default {
  name: 'CartProfile',
  components: {
    NavBar,
    loginRegister,
    PersonInfo,
    SpecificInfo,
  },
}
</script>

<style lang="less" scoped>
.profile {
  .mynavbar {
    background-color: pink;
    font-weight: 700;
  }
}
</style>