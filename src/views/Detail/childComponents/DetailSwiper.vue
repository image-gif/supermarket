<template>
  <div>
    <!-- <div class="swiper"> -->
    <!-- <Swiper :style="{height: 269+'px'}"> -->
    <Swiper class="mySwiper">
      <SwiperItem v-for="(item,index) in banner"
                  :key="index">
        <img :src="item">
      </SwiperItem>
    </Swiper>
    <!-- </div> -->
  </div>
</template>

<script>
// 导入swiper组件
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'DetailSwiper',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
}
</script>

<style lang = "less" scoped>
.mySwiper {
  height: 300px;
  overflow: hidden;
}
</style>