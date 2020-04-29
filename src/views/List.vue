<template>
  <div class="list">
    <div class="content">
      <div class="cagegory">
        <h2 :class="this.change === 'redList' ? 'active':''" @click="changeDetail('redList')">red</h2>
        <h2 :class="this.change=== 'blackList' ? 'active':''" @click="changeDetail('blackList')">black</h2>
        <h2 :class="this.change=== 'blueList'? 'active':''" @click="changeDetail('blueList')">blue</h2>
        <h2 :class="this.change=== 'yellowList'? 'active':''" @click="changeDetail('yellowList')">yellow</h2>
      </div>
      <div class="content-detail">
        <div class="every" v-for="item in defaultList" :key="item.id">
          <div class="img"></div>
          <div class="every-detail">{{item.mainName}}</div>
          <!-- <div>{{item.mainName}}</div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      change: 'redList',
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
          mainName: "dsf",
          money: "90",
          detail: "musbdfvjb"
        },
        {
          id: "3",
          mainName: "rg",
          money: "90",
          detail: "musbdfvjb"
        },
        {
          id: "4",
          mainName: "bnrn",
          money: "90",
          detail: "musbdfvjb"
        },
        {
          id: "5",
          mainName: "szc",
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
          mainName: "hyu",
          money: "90",
          detail: "musbdfvjb"
        }
      ],
      blueList: [
        {
          id: "1",
          mainName: "iy,",
          money: "90",
          detail: "musbdfvjb",
          img: ""
        },
        {
          id: "2",
          mainName: "yu",
          money: "90",
          detail: "musbdfvjb"
        },
        {
          id: "4",
          mainName: "yu",
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
          mainName: "i,my",
          money: "90",
          detail: "musbdfvjb"
        },
        {
          id: "3",
          mainName: "black",
          money: "90",
          detail: "musbdfvjb",
          img: ""
        },
        {
          id: "4",
          mainName: "i,my",
          money: "90",
          detail: "musbdfvjb"
        }
      ]
    };
  },

  methods: {
    changeDetail: function(val) {
      this.change = val;
      if(val == "redList"){
        this.defaultList = this.redList.concat();
      }else if(val == "blackList"){
        this.defaultList = this.blackList.concat();
      }
      else if(val == "blueList"){
        this.defaultList = this.blueList.concat();
      }
      else if(val == "yellowList"){
        this.defaultList = this.yellowList.concat();
      }else{
        this.defaultList = this.redList.concat();
      }
      // console.log(val);
      // this.defaultList = [];
      // this.defaultList = val.concat();
      // this.change = val;
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
.test {
  color: #f66;
}
.test:checked {
  color: yellow !important;
}
.test:active::after {
  color: blue !important;
}
.active {
  background-color: #333;
  color: red;
  background: green !important;
}
</style>