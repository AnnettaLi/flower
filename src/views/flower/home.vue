<template>
  <div class="home-page">
    <div class="block">
      <el-carousel height="2rem">
        <el-carousel-item v-for="item in imgList" :key="item.src">
          <img :src="item.src" alt="图片加载失败" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="prefer border-top">
      <div class="prefer-left">
        <h2 class="p-10">同城专人配送</h2>
        <span class="m-left-20">2小时</span>
        <img
          src="http://img.zhichiwangluo.com/zcimgdir/thumb/t_15325888325b597320677bb.png"
          alt="图片加载失败"
        />
      </div>
      <div class="prefer-right">
        <div class="prefer-up">
          <div class="week">
            <h2 style="color: #13B3E7">每周优惠</h2>
            <span>特惠鲜花限时抢</span>
          </div>
          <div class="week-img">
            <img
              src="http://img.zhichiwangluo.com/zcimgdir/album/file_5b5974a6cffbd.png"
              alt="图片加载失败"
            />
          </div>
        </div>
        <div class="prefer-down">
          <div class="coupon">
            <h2 style="color: #FF7100">优惠卷领取</h2>
            <span>领取最新优惠</span>
          </div>
          <div class="coupon-img">
            <img
              src="http://img.zhichiwangluo.com/zcimgdir/album/file_5b5974ef228f2.png"
              alt="图片加载失败"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="imgbox">
      <div class="imgbox-img" @click="toDetail(7)">
        <img
          class="imgbox-bg"
          src="http://img.zhichiwangluo.com/zcimgdir/album/file_5aa73c534159b.png"
          alt="图片加载失败"
        />
        <img
          class="imgbox-banner"
          src="http://img.zhichiwangluo.com/zcimgdir/album/file_5aa73b316f212.png"
          alt="图片加载失败"
        />
      </div>
      <div class="imgbox-title" @click="toDetail(7)">
        <h2>玫瑰</h2>
        <h3>有关爱情</h3>
        <h3>If u love someone</h3>
      </div>
    </div>
    <div class="titlebox">
      <div class="titlebox-title"  @click="toDetail(5)">
        <h2>绣球</h2>
        <h3>希望</h3>
        <h3>Two see the world</h3>
      </div>
      <div class="titlebox-img"  @click="toDetail(5)">
        <img
          class="titlebox-bg"
          src="http://img.zhichiwangluo.com/zcimgdir/album/file_5aa76fcc5712d.png"
          alt="图片加载失败"
        />
        <img
          class="titlebox-banner"
          src="http://img.zhichiwangluo.com/zcimgdir/album/file_5aa7711e104cd.png"
          alt="图片加载失败"
        />
      </div>
    </div>
    <div class="imgbox">
      <div class="imgbox-img"  @click="toDetail(4)">
        <img
          class="imgbox-bg"
          src="http://img.zhichiwangluo.com/zcimgdir/album/file_5aa73c534159b.png"
          alt="图片加载失败"
        />
        <img
          class="imgbox-banner"
          src="http://img.zhichiwangluo.com/zcimgdir/album/file_5aa748b309053.png"
          alt="图片加载失败"
        />
      </div>
      <div class="imgbox-title" @click="toDetail(4)">
        <h2>芍药</h2>
        <h3>殿春</h3>
        <h3 class="m-right-30">Be distressed at parting</h3>
      </div>
    </div>
    <div class="titlebox">
      <div class="titlebox-title" @click="toDetail(3)">
        <h2>郁金香</h2>
        <h3>殿春</h3>
        <h3 class="m-left-30">Be distressed at parting</h3>
      </div>
      <div class="titlebox-img" @click="toDetail(3)">
        <img
          class="titlebox-bg"
          src="http://img.zhichiwangluo.com/zcimgdir/album/file_5aa76fcc5712d.png"
          alt="图片加载失败"
        />
        <img
          class="titlebox-banner"
          src="http://img.zhichiwangluo.com/zcimgdir/album/file_5aa7703ba494d.png"
          alt="图片加载失败"
        />
      </div>
    </div>
    <div class="foot border-top">
      <img
        src="https://cdn.jisuapp.cn/static/jisuapp_editor/images/new-zhichi-default-full.png"
        alt="图片加载失败"
      />
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
import tabbar from'../../components/tabbar.vue'
Vue.use(CarouselItem);
Vue.use(Carousel);

export default {
  data() {
    return {
      imgList: [
        { src: "http://img.weiye.me/zcimgdir/album/file_58c0b9dc9730b.png" },
        { src: "http://img.weiye.me/zcimgdir/album/file_58c0b9ea53ec1.png" }
      ]
    };
  },
  methods:{
    toDetail:function(val){
      this.$router.push("/flower/detail/"+val)
    }
  },
  components: { tabbar }
};
</script>
<style lang="less" scoped>
.home-page {
  width: 100%;
  height: 100%;
  margin-bottom: 0.5rem;
  h2 {
    font-size: 0.15rem;
  }
  h3 {
    font-size: 0.13rem;
  }
  span {
    font-size: 0.14rem;
  }
  .el-carousel__item img {
    width: 100%;
    height: 2rem;
  }
  .prefer {
    width: 100%;
    height: 1.6rem;
    display: flex;
    .prefer-left {
      width: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      border-right: 1px solid #ededed;
      h2 {
        color: rgb(231, 19, 92);
      }
      span {
        color: #999;
      }
      img {
        width: 1.2rem;
        height: 1.2rem;
        text-align: right;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    .prefer-right {
      width: 50%;
      display: flex;
      flex-direction: column;
      .prefer-up,
      .prefer-down {
        width: 100%;
        height: 50%;
        display: flex;
        .week,
        .coupon {
          width: 65%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          span {
            color: #999;
          }
        }
        .week-img,
        .coupon-img {
          width: 35%;
          display: flex;
          align-items: center;
          img {
            width: 0.5rem;
            height: 0.5rem;
          }
        }
      }
      .prefer-up {
        border-bottom: 1px solid #ededed;
      }
    }
  }
  .border-top {
    border-top: 0.07rem solid rgb(236, 229, 229);
  }
  .imgbox {
    width: 100%;
    height: 1.8rem;
    border-top: 0.01rem solid rgb(236, 229, 229);
    display: flex;
    .imgbox-img {
      width: 65%;
      position: relative;
      .imgbox-bg {
        width: 2rem;
        height: 1.3rem;
        position: absolute;
        top: 0.3rem;
        right: 0;
      }
      .imgbox-banner {
        width: 2.35rem;
        height: 1.3rem;
        position: absolute;
        top: 0.18rem;
        left: 0;
      }
    }
    .imgbox-title {
      width: 35%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-weight: bold;
        margin-bottom: 0.18rem;
        border-bottom: 0.03rem solid #f22;
      }
      h3 {
        color: #666;
        white-space: nowrap;
      }
    }
  }
  .titlebox {
    border-top: 0.01rem solid rgb(236, 229, 229);
    width: 100%;
    height: 1.8rem;
    display: flex;
    .titlebox-img {
      width: 65%;
      position: relative;
      .titlebox-bg {
        width: 2rem;
        height: 1.3rem;
        position: absolute;
        top: 0.3rem;
        left: 0;
      }
      .titlebox-banner {
        width: 2.35rem;
        height: 1.3rem;
        position: absolute;
        top: 0.18rem;
        right: 0;
      }
    }
    .titlebox-title {
      width: 35%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        font-weight: bold;
        margin-bottom: 0.18rem;
        border-bottom: 0.03rem solid #f22;
      }
      h3 {
        color: #666;
        white-space: nowrap;
      }
    }
  }
  .foot {
    height: 1.64rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>