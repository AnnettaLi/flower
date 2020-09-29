<template>
  <div class="children">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="success" @click="submit" circle>提交</el-button>
    <div v-for="item in qqqqqqqqqq" :key="item">父组件说：{{item}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  props: ["qqqqqqqqqq"],
  data() {
    return {
       input: "",
      littlelist: [],
    };
  },
  methods: {
    ...mapMutations([]),
     submit() {
      this.littlelist.push(this.input);
      this.input = "";
      this.$emit("aaaaaaa",this.littlelist)
    },
  },

  mounted() {},
  watch: {},
  computed: {
    ...mapState({}),
    ...mapGetters([]),
  },
  components: {},
};
</script>

<style lang='less'>
.children {
  font-size: 0.18rem;
}
</style>
