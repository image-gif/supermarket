<template>
  <div class="log-reg">
    <div class="left">
      <img src="@/assets/img/logo.png"
           alt="头像">
      <div class="content">
        <span class="text">登录/注册</span>
        <br>
        <span class="tip">暂未绑定手机</span>
      </div>
    </div>
    <div class="right">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginRegister',
}
</script>

<style lang="less" scoped>
.log-reg {
  display: flex;
  width: 100%;
  padding: 0 10px;
  background-color: pink;
  .left {
    display: flex;
    align-items: center;
    width: 90%;
    height: 60px;
    img {
      border: 1px solid #ccc;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: lightblue;
    }
    .content {
      margin-left: 15px;
      color: #fff;
      .text {
        font-size: 14px;
      }
      .tip {
        font-size: 12px;
      }
    }
  }
  .right {
    width: 10%;
    height: 60px;
    line-height: 60px;
    color: #fff;
    text-align: center;
    span {
      font-size: 26px;
    }
  }
}
</style>