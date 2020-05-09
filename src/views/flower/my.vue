<template>
  <div class="type-page">
    <div class="top-full">
      <img class="m-left-30" src="http://img.zhichiwangluo.com/zc_app_default_photo.png" alt />
      <div class="nickname m-left-20">甜甜圈圈圈圆</div>
      <i class="el-icon-arrow-right m-right-30"></i>
    </div>
    <div class="usercenter-block">
      <h2 class="block-name">电商订单</h2>
      <div class="block-detail">
        <div class="block-item w-25">
          <i style="color:#ff7c5d" class="iconfont icondaifukuan"></i>
          <span>待付款</span>
        </div>
        <div class="block-item w-25">
          <i style="color:#ff7c5d" class="iconfont icondaifahuo"></i>
          <span>待发货</span>
        </div>
        <div class="block-item w-25">
          <i style="color:#ff7c5d" class="iconfont icondaishouhuo-"></i>
          <span>待收货</span>
        </div>
        <div class="block-item w-25">
          <i style="color:#ff7c5d" class="iconfont icondaipingjia"></i>
          <span>待评价</span>
        </div>
      </div>
    </div>
    <div class="usercenter-block">
      <h2 class="block-name">我的工具</h2>
       <div class="block-detail">
        <div class="block-item w-30">
          <i style="color:#ffae00" class="iconfont iconshouhuodizhi"></i>
          <span>收货地址</span>
        </div>
        <div class="block-item w-30">
          <i style="color:#ffae00" class="iconfont icongouwuche"></i>
          <span>购物车</span>
        </div>
        <div class="block-item w-30">
          <i style="color:#ffae00" class="iconfont iconxitongtongzhi"></i>
          <span>系统设置</span>
        </div>
      </div>
    </div>
    <div class="usercenter-block">
      <h2 class="block-name">会员中心</h2>
      <div class="block-detail">
        <div class="block-item w-25">
          <i style="color:#ffcd46" class="iconfont iconhuiyuanqia"></i>
          <span>会员卡</span>
        </div>
        <div class="block-item w-25">
          <i style="color:#ffcd46" class="iconfont iconyouhuiquan"></i>
          <span>优惠券</span>
        </div>
        <div class="block-item w-25">
          <i style="color:#ffcd46" class="iconfont iconjifen"></i>
          <span>积分</span>
        </div>
        <div class="block-item w-25">
          <i style="color:#ffcd46" class="iconfont iconqian"></i>
          <span>储值金</span>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { Carousel, CarouselItem } from "element-ui";
import tabbar from "../../components/tabbar.vue";
Vue.use(CarouselItem);
Vue.use(Carousel);
export default {
  components: { tabbar }
};
</script>

<style lang="less">
@import url(http://at.alicdn.com/t/font_1806067_96wg09fxyde.css);
.type-page {
  width: 100%;
  margin-bottom: 0.5rem;
  .top-full {
    width: 100%;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(http://test.zhichiwangluo.com/zhichi_frontend/static/webapp/images/top_bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    img {
      width: 0.4rem;
      height: 0.4rem;
    }
    .nickname {
      flex-grow: 1;
      font-size: 0.14rem;
    }
    i {
      font-size: 0.12rem;
    }
  }
  .usercenter-block {
    border-top: 0.1rem solid rgb(236, 229, 229);
    color: #333;
    h2 {
      font-size: 0.12rem;
    }
    span {
      font-size: 0.14rem;
    }
    .block-name {
      widows: 100%;
      height: 0.45rem;
      line-height: 0.45rem;
      text-indent: 0.2rem;
      border-bottom: 1px solid rgb(236, 229, 229);
    }
    .block-detail {
      widows: 100%;
      height: 0.85rem;
      display: flex;
      .block-item{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
          i{
              font-size: 0.26rem;
          }
      }
    }
  }
}
</style>