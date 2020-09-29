<template>
  <div class="shopping-car">
    <div class="car-title">
      <h2 class="p-10">购物车</h2>
      <i class="p-10 el-icon-setting"></i>
    </div>
    <van-tabs bind:change="onChange">
      <van-tab title="全部">
        <div class="shop-list">
          <van-card num="2" tag="标签" price="10.00" desc="描述信息" title="商品标题">
            <view slot="footer">
              <van-button size="mini">按钮</van-button>
              <van-button size="mini">按钮</van-button>
            </view>
          </van-card>
        </div>
      </van-tab>
      <van-tab title="快递"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import { GoodsAction, Tabs, Tab, Card } from "vant";
Vue.use(GoodsAction);
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(Card);

export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  computed: {
    ...mapState({
      flowerList: state => state.flowerList,
      shopCarList: state => state.shopCarList
    })
  }
};
</script>

<style lang="less">
.shopping-car {
  width: 100%;
  .car-title {
    width: 100%;
    height: 0.5rem;
    border-bottom: 0.07rem solid rgb(236, 229, 229);
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 0.24rem;
    }
    i {
      font-size: 0.16rem;
    }
  }
}
</style>