<template>
  <div>
    <!-- 暂时不要添加什么在Swiper中 -->
    <Swiper>
      <!-- 这里使用v-for 时，要绑定key值 -->
      <SwiperItem v-for="item in banner"
                  :key="item.title">
        <!-- 这里的herf ,src属性要动态绑定，不然后面的值会被当做字符串 -->
        <a :href="item.link">
          <img :src="item.image"
               @load="loadImg"
               alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  // 自定义属性，
  props: {
    // 父组件向子组件传递数据，自定义属性
    banner: {
      type: Array,
      default: function () {},
    },
  },

  data() {
    return {
      isLoaded: false,
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    loadImg() {
      if (!this.isLoaded) {
        // console.log('loading images')
        this.$emit('loadedImg')
        this.isLoaded = true
      }
    },
  },
}
</script>

<style lang='less' scoped>
</style>