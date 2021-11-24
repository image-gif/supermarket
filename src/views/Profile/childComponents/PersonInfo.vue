<template>
  <div class="private-info">
    <div class="left height">
      <div>
        <span>
          <i>0.00</i>&nbsp;元</span>
        <br>
        <span>我的余额</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="center height">
      <div>
        <span><i>0</i>&nbsp;个</span>
        <br>
        <span>我的优惠</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="right height">
      <div>
        <span><i>0</i>&nbsp;分</span>
        <br>
        <span>我的积分</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonInfo',
}
</script>

<style lang="less" scoped>
.private-info {
  width: 100%;
  height: 70px;
  box-shadow: 0 6px 1px rgba(100, 100, 100, 0.1);
  display: flex;
  justify-content: space-around;
  padding: 0 5px;
  .height {
    display: flex;
    align-items: center;
    text-align: center;
    span {
      font-size: 12px;
      i {
        font-style: normal;
        color: #ff5f3e;
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
  .line {
    height: 70px;
    width: 1.5px;
    background-color: #efefef;
  }
}
</style>