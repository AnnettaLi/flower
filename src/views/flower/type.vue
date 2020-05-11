<template>
  <div class="type-page">
    <form action="/home" class="form-search">
      <el-input class="w-80" placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="value"></el-input>
      <el-button type="info" v-if="this.value == ''" plain>搜索</el-button>
      <el-button type="primary" v-else>搜索</el-button>
    </form>
    <div class="list-content">
      <div class="list-item" v-for="item in flowerList" :key="item.id" @click="toDetail(item.id)">
        <img :src="item.src" alt />
        <h2 class="inner-content-title" v-bind:title="item.title">{{item.title}}</h2>
        <div class="list-content-price">
          <div class="money">
            <h2 class="iconfont iconqian1 bold">{{item.price}}</h2>
          </div>
          <div class="sales">
            <h3>销量：{{item.sales}}</h3>
          </div>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";
import tabbar from "../../components/tabbar.vue";

import { Input, Button } from "element-ui";
Vue.use(Input);
Vue.use(Button);

export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    toDetail:function(e){
      console.log(e)
      this.$router.push('/flower/detail/'+e);
    }
  },
  mounted() {
  },
  computed: {
    ...mapState({
      flowerList: state => state.flowerList
    })
  },
  components: { tabbar }
};
</script>

<style lang="less">
@import url(//at.alicdn.com/t/font_1806067_p0w4b1lr16.css);
.type-page {
  width: 100%;
  padding-bottom: 0.5rem;
  .form-search {
    font-size: 0.14rem;
    width: 100%;
    display: flex;
    align-items: center;
    .el-input__inner {
      height: 0.5rem;
      border: none !important;
    }
    .el-button {
      width: 0.7rem;
      height: 0.3rem;
      line-height: 0.09rem;
      // margin-left: 0.3rem;
    }
  }
  .list-content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .list-item {
      width: 50%;
      height: 2.3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      img {
        width: 1.75rem;
        height: 1.75rem;
      }

      .inner-content-title {
        margin-left: 8%;
        width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .list-content-price {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        .money {
          width: 40%;
          color: #f60;
          margin-left: 0.2rem;
        }
        .sales {
          width: 60%;
          color: #a8a8a8;
        }
      }
    }
    h2 {
      font-size: 0.15rem;
    }
    h3 {
      font-size: 0.14rem;
    }
  }
}
</style>