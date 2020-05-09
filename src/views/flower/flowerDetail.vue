<template>
  <div class="flower-detail">
    <div class="detail-full" v-for="item in detailList" :key="item.id">
      <img :src="item.src" alt class="detail-banner" />
      <div class="goods-header p-l-r-10">
        <h2>{{item.title}}</h2>
        <span class="iconfont iconqian1 p-t-b-10 bold">{{item.price}}</span>
        <h4>配送费：包邮</h4>
        <div class="goods-info-other p-t-b-5">
          <h4 class="w-20">取货方式</h4>
          <i class="w-65 m-right-5 text-right el-icon-circle-check"></i>
          <h4 class="w-10">快递</h4>
        </div>
      </div>
      <div class="detail-line">
        <div class="line"></div>
        <h2 class="el-icon-picture m-left-5 m-right-5"></h2>
        <h4 class="m-right-5">详情</h4>
        <div class="line"></div>
      </div>
      <h3 class="m-left-10 m-right-10 p-t-b-10 product-detail">产品详情</h3>

      <div class="imgList p-10">
        <div class="imgbox" v-for="i in item.imgList" :key="i.url">
          <img :src="i.url" alt />
        </div>
      </div>
    </div>
    <div class="goods-action">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
         <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import { GoodsAction, GoodsActionIcon, GoodsActionButton,ActionSheet,Stepper} from "vant";
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(ActionSheet);
Vue.use(Stepper);


import { Input, Button } from "element-ui";
Vue.use(Input);
Vue.use(Button);

export default {
  data() {
    return {
      detailList: [],
      show:false,
    };
  },
  methods: {},
  mounted() {
    this.detailList = this.flowerList.filter(
      item => item.id === this.$route.params.id
    );
    console.log(this.detailList);
  },
  computed: {
    ...mapState({
      flowerList: state => state.flowerList
    })
  }
};
</script>

<style lang="less">
@import url(//at.alicdn.com/t/font_1806067_p0w4b1lr16.css);
.flower-detail {
  width: 100%;
  height: 100%;
  
  h2 {
    font-size: 0.16rem;
  }
  h3 {
    font-size: 0.14rem;
  }
  h4 {
    font-size: 0.12rem;
  }
  .detail-full {
    width: 100%;
    height: 100%;
    .detail-banner {
      width: 100%;
      height: 3.75rem;
    }
    .goods-header {
      width: 95%;
      // height: 1.35rem;
      display: flex;
      flex-direction: column;
      h4 {
        color: #666666;
      }
      span {
    font-size: 0.2rem;
    color: #ff7100;
  }
      .goods-info-other {
        display: flex;
        color: #666666;
        i {
          font-size: 0.15rem;
          color: #ff7100;
        }
      }
    }
    .detail-line {
      width: 100%;
      height: 0.38rem;
      background: rgb(244, 244, 244);
      color: #cccccc;
      display: flex;
      justify-content: center;
      align-items: center;

      .line {
        width: 0.46rem;
        height: 0.01rem;
        background-color: #cccccc;
      }
    }
    .product-detail {
      border-bottom: 1px solid rgb(244, 244, 244);
    }
    .imgList {
      width: 95%;
      display: flex;
      flex-direction: column;
      .imgbox {
        width: 100%;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .goods-action{
    width: 100%;
    font-size: 0.12rem;
  }
}
</style>