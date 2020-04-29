<template>
  <div class="list">
    <div class="content">
      <div class="cagegory">
        <h2 :class="change=='redList'? 'active':''" @click="changeDetail(redList)">red</h2>
        <h2 :class="change=='blackList'? 'active':''" @click="changeDetail(blackList)">black</h2>
        <h2 :class="change=='blueList'? 'active':''" @click="changeDetail(blueList)">blue</h2>
        <h2 :class="change=='yellowList'? 'active':''" @click="changeDetail(yellowList)">yellow</h2>
      </div>
      <div class="content-detail">
        <div class="every" v-for="item in defaultList" :key="item.id">
          <div class="img"></div>
          <div class="every-detail">{{item.id}}</div>
          <div>{{item.mainName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      change: "redList",
      defaultList: [],
      redList: [
        {
          id: "1",
          mainName: "red",
          money: "90",
          detail: "musbdfvjb",
          img: ""
        },
        {
          id: "2",
          mainName: "pone",
          money: "90",
          detail: "musbdfvjb"
        },
        {
          id: "3",
          mainName: "pone",
          money: "90",
          detail: "musbdfvjb"
        },
        {
          id: "4",
          mainName: "pone",
          money: "90",
          detail: "musbdfvjb"
        },
        {
          id: "5",
          mainName: "pone",
          money: "90",
          detail: "musbdfvjb"
        }
      ],
      yellowList: [
        {
          id: "1",
          mainName: "yellow",
          money: "90",
          detail: "musbdfvjb",
          img: ""
        },
        {
          id: "2",
          mainName: "pone",
          money: "90",
          detail: "musbdfvjb"
        }
      ],
      blueList: [
        {
          id: "1",
          mainName: "blue",
          money: "90",
          detail: "musbdfvjb",
          img: ""
        },
        {
          id: "2",
          mainName: "pone",
          money: "90",
          detail: "musbdfvjb"
        }
      ],
      blackList: [
        {
          id: "1",
          mainName: "black",
          money: "90",
          detail: "musbdfvjb",
          img: ""
        },
        {
          id: "2",
          mainName: "pone",
          money: "90",
          detail: "musbdfvjb"
        }
      ]
    };
  },

  methods: {
    changeDetail: function(val) {
      console.log(val);
      this.defaultList = [];
      this.defaultList = val.concat();
      this.change = val;
      console.log(this.change, "0000")
    }
  },
  mounted() {
    this.defaultList = this.redList.concat();
    console.log(this.defaultList);
  }
};
</script>

<style>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
}
.cagegory {
  width: 20%;
}
.cagegory h2 {
  font-size: 16px;
  background-color: #ece3e3;
  text-align: center;
  height: 40px;
  border-radius: 9px;
  line-height: 40px;
  font-weight: 400;
  border-bottom: 1px solid #bdb5b5;
}
.content-detail {
  width: 80%;
  display: flex;
  flex-direction: column;
}
.every {
  height: 80px;
  display: flex;
  border-bottom: 1px solid #000;
}
.img {
  width: 30%;
  background-color: teal;
}
.every-detail {
  width: 70%;
  background-color: #faa9a9;
}
.active {
  background-color: #333;
  color: red;
}
</style>