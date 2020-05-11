<template>
  <div class="shopping-car">
    <div class="car-title">
      <h2 class="p-10">购物车</h2>
      <i class="p-10 el-icon-setting"></i>
    </div>
    <div class="car-list"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import { GoodsAction } from "vant";
Vue.use(GoodsAction);

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