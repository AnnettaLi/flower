<template>
    <div id="list">
      <p class="data">当前时间：{{gettime}}</p>
      <div class="content" >
        <input class="input" type="text" placeholder="请输入内容" v-model="content">
        <button class="submit" @click="submit">提交</button>
        <br>
        <h3>待办事项：</h3>
        <div class="details" v-for="item in items" :key="item">
          <span>{{item}}</span>
        </div>
      </div>
    </div>  
</template>
<script>
    export default{
        data(){
          return{
              gettime:'',//当前时间
              content:"",
              items: []
          }
        },
        created() {
          this.currentTime();    
        },
        methods:{
          // 提交
          submit(){
            this.items.push(this.content)
            // alert(this.content)
            this.content="";
          },
          // 创建定时器
          currentTime(){
            setInterval(this.getTime,500)
          },
          getTime:function(){
            var _this = this;
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth()+1;
            let dd = new Date().getDate();
            let hh = new Date().getHours();
            let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
            let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
            _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
          }
        }
    }
</script>
<style>
  #list{
    padding: 80px 0;
    text-align: center;
  }
  .data{
    font-size: 22px;
  }
  .input{
    outline:none;
    font-size: 18px;
    border-radius: 4px;
    padding: 5px 9px;
    margin-right: 20px;
    height: 22px;
  }
  .submit{
    outline: none;
    font-size: 16px;
    border-radius: 6px;
    color: #fff;
    background-color: teal;
    padding: 6px 12px;
    border: none;
  }
  h3 {
    margin-left: 50px;
    text-align: left;
    font-size: 18px;

  }
  .details{
    border: 1px solid #666;
    border-collapse:collapse;
    height: 40px;
    margin: 0 20px;
    font-size: 16px;

  }
  .details>span{
    text-align: center;
    line-height: 40px;
  }
</style>