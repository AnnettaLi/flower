<template>
  <div class="flower-detail">
    <div class="detail-full" v-for="item in detailList" :key="item.id">
      <img :src="item.src" alt class="detail-banner" />
      <div class="goods-header">
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

      <div class="imgList">
        <div class="imgbox" v-for="i in item.imgList" :key="i.url">
          <img :src="i.url" alt />
        </div>
      </div>
    </div>
    <div class="goods-action">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="goShoppingCar" />

        <van-goods-action-icon v-if="star" icon="star" text="未收藏" @click="starFlower" />
        <van-goods-action-icon v-else icon="star" text="已收藏" color="#ff5000" @click="starFlower" />

        <van-goods-action-button type="warning" text="加入购物车" @click="addBuyCar" />
        <van-goods-action-button type="danger" text="立即购买" @click="buyModal" />
      </van-goods-action>
    </div>
    <van-action-sheet
      style="color:red;overflow:normal"
      v-model="showBuyCarModal"
      v-for="item in detailList"
      :key="item.id"
    >
      <div class="page-bottom-dialog">
        <div class="dialog-goods-header">
          <div class="dialog-img">
            <img :src="item.src" alt />
          </div>
          <span class="iconfont iconqian1 p-t-b-10 bold">{{item.price}}</span>
          <i class="el-icon-circle-close p-t-b-10" @click="closeBuyCarModal"></i>
        </div>
        <div class="buy-num p-10">
          <h3>购买数量</h3>
          <van-stepper v-model="carAmount" />
        </div>
        <h3 class="buyCar-success" @click="successAddCar">加入购物车</h3>
      </div>
    </van-action-sheet>
    <van-action-sheet
      style="color:red;overflow:normal"
      v-model="showBuyModal"
      v-for="item in detailList"
      :key="item.id"
    >
      <div class="page-bottom-dialog">
        <div class="dialog-goods-header">
          <div class="dialog-img">
            <img :src="item.src" alt />
          </div>
          <span class="iconfont iconqian1 p-t-b-10 bold">{{item.price}}</span>
          <i class="el-icon-circle-close p-t-b-10" @click="closeBuyModal"></i>
        </div>
        <div class="buy-num p-10">
          <h3>购买数量</h3>
          <van-stepper v-model="carAmount" />
        </div>
        <h3 class="buyCar-success" @click="goPayMoney">下一步</h3>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  ActionSheet,
  Stepper,
  Sku,
  Toast
} from "vant";
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(ActionSheet);
Vue.use(Stepper);
Vue.use(Sku);
Vue.use(Toast);

import { Input, Button } from "element-ui";
Vue.use(Input);
Vue.use(Button);

export default {
  data() {
    return {
      star: false,
      detailList: [],
      showBuyCarModal: false,
      showBuyModal: false,
      carAmount: "1"
    };
  },
  methods: {
    // 购物车
    goShoppingCar: function() {
      this.$router.push("/buy/car");
    },
    //收藏夹
    starFlower: function() {
      this.star = !this.star;
    },
    // 显示购物车模态框
    addBuyCar: function() {
      this.showBuyCarModal = true;
    },
    // 关闭购物车模态框
    closeBuyCarModal: function() {
      this.showBuyCarModal = false;
    },
    // 加入购物车
    successAddCar: function() {
      Toast.success("添加成功");
      setTimeout(() => {
        this.showBuyCarModal = false;
      }, 500);
      this.shopCarList = this.detailList;
    },
    // 显示购买模态框
    buyModal: function() {
      this.showBuyModal = true;
    },
    // 关闭购买模态框
    closeBuyModal: function() {
      this.showBuyModal = false;
    },
    // 立即购买
    goPayMoney: function() {}
  },
  mounted() {
    this.detailList = [];
    this.detailList = this.flowerList.filter(
      item => item.id === this.$route.params.id
    );
    console.log(this.detailList);
  },
  computed: {
    ...mapState({
      flowerList: state => state.flowerList,
      shopCarList: state => state.shopCarList,
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
      width: 94%;
      padding: 0 3%;
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
      width: 94%;
      padding: 0 3%;
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
  .goods-action {
    font-size: 0.12rem;
  }

  .page-bottom-dialog {
    width: 100%;
    height: 4rem;
    .dialog-goods-header {
      width: 94%;
      margin: 0 3%;
      // height: 0.96rem;
      height: 1.1rem;
      border-bottom: 1px solid #ededed;
      display: flex;
      position: relative;

      .dialog-img {
        position: absolute;
        // bottom: 0.2rem;
        // top: -0.2rem;
        left: 0;
        z-index: 10;
        img {
          margin-top: 0.05rem;
          width: 1rem;
          height: 1rem;
          border: 1px solid #ededed;
          z-index: 10000;
        }
      }
      span {
        padding-left: 1.1rem;
        flex-grow: 1;
      }
      i {
        font-size: 0.22rem;
        color: #67666f;
      }
    }
    .buy-num {
      display: flex;
      color: #333;
      justify-content: space-between;
    }
    .buyCar-success {
      width: 100%;
      height: 0.44rem;
      background: #ff7100;
      color: #fff;
      line-height: 0.44rem;
      display: flex;
      justify-content: center;
      position: fixed;
      bottom: 0;
    }
  }
}
.van-popup,
van-action-sheet {
  overflow: normal !important;
}
</style>