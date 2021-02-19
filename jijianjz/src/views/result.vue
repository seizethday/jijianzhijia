<template>
  <div id="container">
    <!-- //头部标题开始 -->
    <div class="big-background">
      <div class="">
        <div class="top_title">
          <span>
            效果图库为您带来更多家装灵感
          </span>
        </div>
      </div>
    </div>
    <!-- 头部标题结束 -->
    <!-- 图片部分开始 -->
    <div class="big-background margin-bottom">
      <div class="body_page">
        <div class="page_image" v-for="(item,key) of img" :key="key">
        <router-link to="javascript:;">
          <img :src="item.image">
        </router-link>
      </div>
      </div>
    </div>
    <!-- 图片部分结束 -->
    <!-- 商标部分开始 -->
    <div class="big-background brands_background">
      <div class="brands_body">
        <div class="page_brands" v-for="(item,key) of formData.brands" :key="key">
        <img :src="require('../assets/brands/'+item)">
        </div>
      </div>
    </div>
    <!-- 商标部分结束 -->
    <!-- 脚部开始 -->
    <div class="big-background foot_background">
      <div class="foot">
        <span>Powered by QFY 版权所有 ©2010-2016</span>
      </div>
      <div class="foot">
        <span>地址：江苏省苏州市工业园区金鸡湖大道00号</span>
      </div>
      <div class="foot">
        <span>苏ICP备00010001号</span>
      </div>
    </div>
    <!-- 脚部开始 -->

  </div>
</template>
<style scoped>
*{
  margin: 0;
  padding: 0;
  transition: all ease .6s;
}

.big-background{
  width: 100%;
  background-color: transparent;
  font: 14px;
  word-spacing: normal;
  color: #8d9095;
  font-family: "微软雅黑",Helvetica,Arial,Verdana,sans-serif;
  font-style: normal;
  font-weight: normal;
  box-sizing: border-box;
  padding: 0 7%;
  float: left;
}
.margin{
  margin: 0 auto;
}
.top_title{
    position: relative;
    line-height: 1.5em;
    width:100%;
    background-color: #f4f4f4;
    background-position: left top;
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-bottom: 26px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 0;
    padding-left: 0;
    border-radius: 0px;
  }
  .top_title span{
    display: block;
    font-size: 16px;
    letter-spacing: 1px;
    color: #808080;
    text-align: center;
  }
  .body_page{
    width: 100%;
    background-color: #ffffff;
    margin: 0 auto;
    margin-bottom: 26px;
  }
  .margin-bottom{
    margin-bottom:80px ;
  }
  .page_image{
    width: 25%;
    padding:0 5px;
    margin: 0 0 10px;
    box-sizing: border-box;
    float: left;
    transition: initial 1s;
  }
  
  .page_image img{
    display: inline-block;
    width: 100%;
    max-width: 100%; 
    height: 14vw;
    vertical-align:middle;
  }
  
@media screen and (min-width:1200px){
  .page_image{
    width: 25%;
    padding:0 5px;
    margin: 0 0 10px;
    box-sizing: border-box;
    float: left;
  }
  .page_image img{
    display: inline-block;
    width: 100%;
    max-width: 100%; 
    height: 14vw;
    vertical-align:middle;
    transform:all linear .5s;
  }
}
@media screen and (max-width:992px){
    .top_title{
      margin-bottom: 15px;
    }
    .page_image{
    width: 33.3333333%;
    padding:0 4px;
    margin: 0 0 8px;
    box-sizing: border-box;
    float: left;
  }
  .page_image img{
    display: inline-block;
    width: 100%;
    max-width: 100%; 
    height: 14vw;
    vertical-align:middle;
  }
}
@media screen and (max-width:768px){
    .top_title{
      margin-bottom: 10px;
    }
    .page_image{
    width: 50%;
    padding:0 3px;
    margin: 0 0 7px;
    box-sizing: border-box;
    float: left;
  }
  .page_image img{
    display: inline-block;
    width: 100%;
    max-width: 100%; 
    height: 25vw;
    vertical-align:middle;
  }
}
.brands_body{
  width: 95%;
  margin: auto auto ;
  padding: 40px 0 40px 0 ;
}
@media screen and (min-width:1200px){
    .page_brands{
    width: 16.666666%;
    padding:0 40px;
    margin: 0 0 10px;
    box-sizing: border-box;
    float: left;
  }
  .page_brands img{
    display: inline-block;
    width: 100%;
    max-width: 100%; 
    filter: grayscale(1);
    transition: filter 2s;
  }
  .page_brands img:hover{
    display: inline-block;
    width: 100%;
    max-width: 100%; 
    filter: grayscale(0);
  }
}
@media screen and (min-width:992px)and (max-width:1199px){
    .page_brands{
    width: 25%;
    padding:0 40px;
    margin: 0 0 10px;
    box-sizing: border-box;
    float: left;
  }
  .page_brands img{
    display: inline-block;
    width: 80%;
    max-width: 80%; 
    filter: grayscale(1);
    transition: filter 2s;
  }
  .page_brands img:hover{
    display: inline-block;
    width: 80%;
    max-width: 80%; 
    filter: grayscale(0);
  }
  .margin-bottom{
    margin-bottom:50px ;
  }
}
@media screen and (min-width:768px)and (max-width:992px){
    .page_brands{
    width: 25%;
    padding:0 40px;
    margin: 0 0 10px;
    box-sizing: border-box;
    float: left;
  }
  .page_brands img{
    display: inline-block;
    width: 70%;
    max-width: 70%; 
    filter: grayscale(1);
    transition: filter 2s;
  }
  .page_brands img:hover{
    display: inline-block;
    width: 70%;
    max-width: 70%; 
    filter: grayscale(0);
  }
  .margin-bottom{
    margin-bottom:40px ;
  }
}
@media screen and (max-width:768px){
    .page_brands{
    width: 50%;
    padding:0 40px;
    margin: 0 0 10px;
    box-sizing: border-box;
    float: left;
  }
  .page_brands img{
    display: inline-block;
    width: 70%;
    max-width: 70%; 
    filter: grayscale(1);
    transition: filter 2s;
  }
  .page_brands img:hover{
    display: inline-block;
    width: 70%;
    max-width: 70%; 
    filter: grayscale(0);
  }
  .margin-bottom{
    margin-bottom:30px ;
  }
}
.brands_background{
  background: #f7f7f7 ;
}
.foot_background{
  background: #c1c1c1 none repeat center top;
  padding: 20px 0 20px 0;
}
.foot_wap{
  min-height: 10px;
  margin: 50px ;
}
.foot{
  width: 80%;
  margin: auto auto ;
  font-family: arial;
  letter-spacing: 1px;
  font-size: 12px;
  text-align: center;
  color: #808080;
}
.foot span{
  line-height: 1.5rem;
}


</style>
<script>
export default {
  data(){
    return{
      img:'',
      formData: {
        brands:[
          "sanxing.jpg",
          "laoban.jpg",
          "geli.jpg",
          "haier.jpg",
          "kohler.jpg",
          "midea.jpg",
          "mitsu.jpg",
          "panasonic.jpg",
          "siemens.jpg",
          "toto.jpg",
          "yinghua.jpg",
        ]
        }
      }
      
  },
  mounted(){
    this.axios.get("/result").then(res=>{
      this.img=res.data.results;
    })
  }
}
</script>