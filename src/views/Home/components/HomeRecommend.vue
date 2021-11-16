<template>
  <div>
    <div class="recommend">
      <div v-for="item in recommend"
           :key="item.title"
           class="item">
        <a :href="item.link">
          <img :src="item.image"
               alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommend: {
      type: Array,
      default: function () {},
    },
  },
}
</script>

<style lang = "less" scoped>
.recommend {
  display: flex;

  box-shadow: 0 10px 1px rgba(66, 66, 66, 0.1);
  .item {
    flex: 1;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    margin: 10px 0 20px 0;

    a img {
      width: 65px;
      height: 65px;
      margin-bottom: 10px;
    }
  }
}
</style>