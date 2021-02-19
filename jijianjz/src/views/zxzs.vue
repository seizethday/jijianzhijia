<template>
  <div class="renovation" >
    <!-- 文章内容 -->
    <div class="content">
      <div  v-for="(item,key) of number" :key="key" >
        <div class="content-each">
          <!-- 大div下图片 -->
          <router-link title="餐厅装饰画选什么?精品山水国画装饰美景多多" to="/zxnr">
            <img class="content-img" src="https://ccdn.goodq.top/caches/31d77848c79d76c10027e5f47157bcf2/aHR0cHM6Ly81NzVlNWIzNWM0ZWU3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDUvYjNhOGI5YWUyOTZiZTcyYTgzYzg0NGY1ZTQ0ZDQzMmQtMjAweDEzMy05MC53ZWJw.webp" alt="">
          </router-link>
          <!-- 大div下文字说明 -->
          <div class="explain">
            <router-link title="餐厅装饰画选什么?精品山水国画装饰美景多多" to="/zxnr">餐厅装饰画选什么?精品山水国画装饰美景多多</router-link>
            <p class="article-time">发表日期:2017-03-17</p>
            <p>能想象一下一块圆形的黑金属在一点钟方向向着八点钟的位子以闪电的弧度裂开然后黑金属两瓣分别上下稍微分离的感觉吗？</p>
            
          </div>
          <!-- 大div下文字说明 -->
        </div>
        <router-link class="read-txt" title="餐厅装饰画选什么?精品山水国画装饰美景多多" to="/zxnr">
            阅读正文
        </router-link>
      </div>
    </div>
    <!-- 文章内容结束 -->
  </div>
</template>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }

  @media (max-width:575px){ 
    .renovation{
      width: 100%;
      max-width:1200px;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
    }
    .content{
      width:100%;
      margin-left: 5%;
      transition: ease;
    }
    .content-each{
      display: flex;
      flex-direction:column;
      margin:30px 30px 0 30px;
      border-bottom: 1px dotted #a5a5a5;
    }
    .content-each a{
      margin:0 auto;
    }
    .content-img{
      margin:0 auto;
      text-align:center;
      width: 200px;
      height: 140px;
    }
    .explain{
      color: #b5b5b5;
      font-size: 12px;
    }
    .explain p{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .article-time{
      color: #686868;
    }
    .explain :first-child{
      display: inline-block;
      text-decoration: none;
      color: #3a3a3a;
      font-size: 18px;
      margin-bottom: 5px;
    }
    .read-txt{
      display: none;
      text-decoration: none;
      text-align: end;
      color: #3ec9ad;
      margin-top: 70px;
    }
  }
  @media(min-width:576px){
    .renovation{
      width: 100%;
      max-width:1200px;
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
    }
    .content{
      width:67%;
      margin-left: 5%;
      transition: ease;
    }
    .content-each{
      display: flex;
      margin:30px 30px 0 30px;
      height: 200px;
    }
    .content-img{
      display: none;
    }
    .explain{
      margin-left: 30px;
      color: #b5b5b5;
      font-size: 12px;
    }
    .explain p{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .article-time{
      color: #686868;
    }
    .explain :first-child{
      display: inline-block;
      text-decoration: none;
      color: #3a3a3a;
      font-size: 18px;
      margin-bottom: 5px;
    }
    .read-txt{
      display: none;
      text-decoration: none;
      text-align: end;
      margin-right: 30px;
      color: #3ec9ad;
      font-size: 12px;
      border-bottom: 1px dotted #a5a5a5;
    }
  }
  @media(min-width:768px){
    .content-img{
      display: block;
      width: 200px;
      height: 140px;
    }
    .read-txt{
      display:block;
    }
  }
  @media(min-width:992px){
    
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


// .renovation{
//     width: 100%;
//     max-width:1200px;
//     display: flex;
//     flex-wrap: wrap;
//     margin: 0 auto;
//   }
//   .content{
//     width:67%;
//     margin-left: 5%;
//     transition: ease;
//   }
//   .content-each{
//     display: flex;
//     margin:30px 30px 0 30px;
//     height: 200px;
//     border-bottom: 1px dotted #a5a5a5;
//   }
//   .content-img{
//     width: 200px;
//     height: 140px;
//   }
//   .explain{
//     margin-left: 30px;
//     color: #b5b5b5;
//     font-size: 12px;
//   }
//   .explain p{
//     margin-top: 10px;
//     margin-bottom: 10px;
//   }
//   .article-time{
//     color: #686868;
//   }
//   .explain :first-child{
//     display: inline-block;
//     text-decoration: none;
//     color: #3a3a3a;
//     font-size: 18px;
//     margin-bottom: 5px;
//   }
//   .explain :last-child{
//     display: block;
//     text-decoration: none;
//     text-align: end;
//     color: #3ec9ad;
//     margin-top: 70px;
//   }
</script>
