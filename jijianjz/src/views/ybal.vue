<template>
  <div class="case" >
    <!-- 左边大div开始 -->
    <div class="left-div">
      <div class="left-each" v-for="(item,key) of number" :key="key" >
        <div class="left-smalldiv">
          <!-- 左边大div下图片 -->
          <router-link to="ybnr">
            <img class="left-img" src="https://ccdn.goodq.top/caches/31d77848c79d76c10027e5f47157bcf2/aHR0cHM6Ly81NzVlNWIzNWM0ZWU3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDUvZDhkYzRmMzdjNTdmMWI2YjVkYzIzZWVkZWRiZDk4MjctMjIweDE0MC05MC53ZWJw.webp" alt="">
          </router-link>
          <!-- 左边大div下说明 -->
          <div class="left-explain">
            <router-link to="ybnr">案例展示#8</router-link>
            <p>【北欧家装】180㎡北欧家装｜某某小区</p>
            <p>项目地址：江苏苏州</p>
            <p>项目面积：180m2</p>
            <p>项目时间：2016</p>
            <p>项目说明：简洁之美，明快清新的家</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 左边大div结束 -->
    <!-- 右边大div开始 -->
    <div class="right-div">
      <div class="right-each" v-for="(item,key) of number" :key="key">
        <div class="right-smalldiv">
          <router-link to="/zxnr">
            <img class="right-img" src="https://ccdn.goodq.top/caches/31d77848c79d76c10027e5f47157bcf2/aHR0cHM6Ly81NzVlNWIzNWM0ZWU3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDUvYjNhOGI5YWUyOTZiZTcyYTgzYzg0NGY1ZTQ0ZDQzMmQtNDAweDMwMC05MC53ZWJw.webp" alt="">
          </router-link>
          <router-link class="right-a" to="/">餐厅装饰画选什么?精品山水国画装饰美景多多</router-link>
        </div>
      </div>
    </div>
    <!-- 右边大div结束 -->
  </div>
</template>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  @media (max-width:576px) {
    .case{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
    }
    .left-div{
      width:100%;;
      border:1px solid  rgba(221,221,221,1);
      transition: ease;
    }
    .left-smalldiv{
      display: flex;
      flex-flow: column;
      margin:30px 30px 0 30px;
      height: 300px;
      border-bottom: 1px dotted #a5a5a5;
    }
    .left-img{
      width: 220px;
      height: 140px;
      margin-left: 30px;
    }
    .left-explain{
      margin-left: 30px;
      color: #b5b5b5;
      font-size: 12px;
    }
    .left-explain p{
      margin-bottom: 5px;
    }
    .left-explain :first-child{
      display: inline-block;
      text-decoration: none;
      color: #666666;
      font-size: 16px;
      margin-bottom: 5px;
    }
    .right-div{
      margin: 0;
      width:100%;
      background-color: #f5f5f5;
    }
    .right-each{
      width:100%;
    }
    .right-smalldiv{
      margin-top:100px;
      border-bottom: 1px dotted #b5b5b5;
    }
    .right-img{
      display:block;
      margin:0 auto;
      width: 400px;
      height: 300px;
    }
    .right-a{
      display:block;
      text-decoration: none;
      text-align:center;
      font-size: 13px;
      color: #666666;
      text-overflow: ellipsis;
      white-space: nowrap; 
      overflow: hidden;
      margin-bottom:20px
    }
  }  
  @media (min-width:576px) {
    .case{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
    }
    .left-div{
      width:100%;
      border:1px solid  rgba(221,221,221,1);
      transition: ease;
      margin:0 30px;
    }
    .left-smalldiv{
      display: flex;
      margin:30px 30px 0 30px;
      height: 200px;
      border-bottom: 1px dotted #a5a5a5;
    }
    .left-img{
      width: 220px;
      height: 140px;
    }
    .left-explain{
      margin-left: 30px;
      color: #b5b5b5;
      font-size: 12px;
    }
    .left-explain p{
      margin-bottom: 5px;
    }
    .left-explain :first-child{
      display: inline-block;
      text-decoration: none;
      color: #666666;
      font-size: 16px;
      margin-bottom: 5px;
    }
    .right-div{
      width:100%;
      background-color: #f5f5f5;
      margin:0 30px;
    }
    .right-each{
      width:100%;
    }
    .right-smalldiv{
      text-align: center;
      border-bottom: 1px dotted #a5a5a5;
    }
    .right-img{
      margin-top: 30px;
      width:400px;
      height:300px;
    }
    .right-a{
      display:block;
      text-decoration: none;
      font-size: 13px;
      color: #666666;
      text-overflow: ellipsis;
      white-space: nowrap; 
      overflow: hidden;
    }
  }
  @media  (min-width:992px){
    .case{
      max-width:1280px;
    }
    .left-div{
    width:67%;
    margin-left: 5%;
    }
    .right-div{
    margin-left: 10px;
    width:20%;
    max-width:300px;
    }
    .right-smalldiv{
    display: flex;
    flex-flow: column;
    margin:30px 30px 0 30px;
    border-bottom: 1px dotted #b5b5b5;
    }
    .right-img{
      margin-top:0;
      width: 100%;
      height: 100%;
      max-width:220px;
      max-height:165px
    }
    .right-a{
      margin-top:10px;
    }
  } 

  
</style>

<script>
export default {
  data(){
    return{
      number:[1,2,2,3,4,]
    }
  }
}
</script>
