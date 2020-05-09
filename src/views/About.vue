<template>
  <div class="home-page">
    <div class="block">
      <el-carousel height="100%">
        <el-carousel-item v-for="item in imgList" :key="item.src">
          <img :src="item.src" alt="图片加载失败">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
Vue.use(CarouselItem);
Vue.use(Carousel);

export default {
  data() {
    return {
      imgList: [
        { src: "http://oss.qorosauto.com:9001/qoros/mina/guanzhi5s-hero.jpg" },
        { src: "http://oss.qorosauto.com:9001/qoros/mina/guanzhi5s.jpg" },
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.home-page {
  width: 100%;
  height: 100%;
  .el-carousel__item img {
    width: 100%;
    height: 2rem;
  }
}

</style>