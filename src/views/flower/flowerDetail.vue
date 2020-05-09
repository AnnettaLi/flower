<template>
  <div class="flower-detail">
    <div class="detail-full" v-for="item in detailList" :key="item.id">
      <img :src="item.src" alt class="detail-banner" />
      <div class="goods-header p-10">
        <h2>{{item.title}}</h2>
        <span>{{item.price}}</span>
        <h4>配送费：包邮</h4>
        <div class="goods-info-other">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";

import { Input, Button } from "element-ui";
Vue.use(Input);
Vue.use(Button);

export default {
  data() {
    return {
      detailList: []
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
.flower-detail {
  width: 100%;
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
    .detail-banner {
      width: 100%;
      height: 3.75rem;
    }
  }
}
</style>