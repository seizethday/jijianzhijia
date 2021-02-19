<template>
  <main class="co-brands">
    <!-- 品牌合作 -->
    <div>合作品牌</div>
    <div>众多优质品牌为业主提供高品质建材支持</div>
    <div class="brands-logo">
      <ul>
        <li v-for="(img,i) of brandsLogo" :key="i">
          <router-link to="/"><img :src="require('../assets/'+img)"></router-link>
          <!-- <router-link to="/"><img src="../assets/asiemens.webp"></router-link> -->
        </li>
      </ul>
    </div>
  </main>
</template>
<style>
.co-brands{
  display: flex;
  float: left;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #F7F7F7;
  margin-bottom: 50px;
}
  .co-brands>div:nth-child(1){
    font-size: 26px;
    padding: 50px 0 10px
  }
  .co-brands>div:nth-child(2){
    font-size: 13px;
    color: #bababa;
    padding: 0 0 30px 0
  }
  .co-brands>div:nth-child(3)>ul{
    width: 80%;
    display: flex;
    flex-flow: row wrap;
    margin: 0 auto;
  }
  .co-brands>div:nth-child(3)>ul>li{
    flex-basis:16.666% ;
    /* transition: all .3s linear; */
  }
  .co-brands>div:nth-child(3)>ul>li img{
    width: 7.145625rem;
	  height: 3.524375rem;
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter: grayscale(100%);
    transition: filter .5s linear;
    /* filter: gray; */
  }
  .co-brands>div:nth-child(3)>ul>li img:hover{
    -webkit-filter: grayscale(0);
    -moz-filter: grayscale(0);
    -ms-filter: grayscale(0);
    -o-filter: grayscale(0);
    filter: grayscale(0);
    /* filter: gray; */
  }
  @media (max-width: 576px){
    .co-brands>div:nth-child(3)>ul>li{
      /* padding: 10px; */
    flex-basis:100%;
    text-align: center
  }
  .co-brands>div:nth-child(3)>ul>li img{
    width: 314.41px;
    height: 130.44px;
  }
  .co-brands>div:nth-child(3)>ul{
    width: 100%;
  }
  }
  @media (min-width: 576px){
    .co-brands>div:nth-child(3)>ul>li{
    flex-basis:50% ;
    /* padding: 10px; */
  }
  .co-brands>div:nth-child(3)>ul>li img{
    width: 314.41px;
    height: 130.44px;
  }
  .co-brands>div:nth-child(3)>ul{
    width: 100%;
   align-items: center;
   justify-content: center;
  }
  }
  @media (min-width: 768px){
    .co-brands>div:nth-child(3)>ul>li{
    flex-basis:25% ;
    padding: 0;
  }
  .co-brands>div:nth-child(3)>ul>li img{
    width: 8.145625rem;
	  height: 3.524375rem;
  }
  .co-brands>div:nth-child(3)>ul{
    width: 80%;
  }
  }
  @media (min-width: 992px){
    .co-brands>div:nth-child(3)>ul>li{
    flex-basis:16.666% 
  }
  .co-brands>div:nth-child(3)>ul>li img{
    width: 7.145625rem;
	  height: 3.524375rem;
  }
  }
  @media (min-width: 1200px){
    .co-brands>div:nth-child(3)>ul>li{
    flex-basis:16.666% 
  }
  .co-brands>div:nth-child(3)>ul>li img{
    width: 7.145625rem;
	  height: 3.524375rem;
  }
  }
</style>

<script>
export default {
  data(){
    return{
      brandsLogo:['asiemens.webp','boss.webp','fangtai.webp','gehu.webp','haier.webp','koh.web.webp','meidi.jpg','mit.webp','pan.webp','sak.webp','sam.webp','toto.webp']
    }
  }
}
</script>
