<template>
  <div class="partent">
    <el-input v-model="topInput" placeholder="请输入内容"></el-input>
    <el-button type="success" @click="submit" circle>提交</el-button>
    <div class="father-box">
      <span class="father" v-for="item in ylist" :key="item">
        {{ item }}
      </span>
    </div>
    <children class="children" :qqqqqqqqqq="list" @aaaaaaa="fuzhi"></children>
  </div>
</template>

<script>
import Vue from "vue";
import children from "../../components/children.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { Input, Button } from "element-ui";
Vue.use(Input);
Vue.use(Button);

export default {
  data() {
    return {
      topInput: "",
      list: [],
      ylist: [],
    };
  },
  methods: {
    ...mapMutations([]),
    submit() {
      this.list.push(this.topInput);
      this.topInput = "";
    },
    fuzhi(val) {
      console.log(val);
      this.ylist = val;
    },
  },

  mounted() {},
  watch: {},
  computed: {
    ...mapState({}),
    ...mapGetters([]),
  },
  components: { children },
};
</script>

<style lang='less'>
.partent {
  font-size: 0.18rem;
  padding: 0.1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  button {
    width: 60px;
  }
  .father-box{
      display: flex;
      flex-direction: column;
  }
  .father {
    line-height: 0.18rem;
    font-size: 0.18rem;
    border: 1px solid #333;
    border-radius: 0.9rem;
    margin-top: 0.1rem;
    padding: 0.1rem;
  }
  .children {
    margin-top: 5%;
    background: teal;
  }
}
</style>
