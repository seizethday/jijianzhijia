<template>
  <div class="article">
    <!-- 文章内容 -->
    <div class="content">
      <!-- 文章标题 -->
      <h3 class="article-header">案例展示#8</h3>
      <div v-for="item of 3" :key="item">
        <!-- 图片 -->
        <div class="article-img">
          <img src="https://ccdn.goodq.top/caches/31d77848c79d76c10027e5f47157bcf2/aHR0cHM6Ly81NzVlNWIzNWM0ZWU3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDYvNzViYjYwMTM5ZGQ0Y2Y3YzFlYjE4NGM2ZWE2NDFiYzUtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="">
        </div>
        <span class="article-words">
          応损捠捡换攳，攴朰朲朳枛朸桸桹桺奿妀。夲夳夵壱売壳圢圤圥圦圧！圩圪囡団囤囥咍咎，咐咑厺厼厽桻桼忝忞帄帇帉帊峢；峣峤屴屵屶屷宓宔宖忟忡，忢忣忥忦忨 忩忪忬忭忮忯忰。忱忲忳忴念忶汹忸忹忺忻忼忾忿怂，怃怄怅怆怇怈怉怊怋怌怍怏怐怑怓怔，怗怘怙怚怛怞怟怡怢怣怤怦怩怫怬怭。怮怯怰，怲怳怴怵怶怷怸怹怺怼悙怿。
        </span>
      </div>
    </div>
  </div>
</template>

<style  scoped>
  .content{
    margin: 0 auto;
    width: 55%;
    border:1px solid  rgba(221,221,221,1);
    padding: 0 100px;
  }
  .article-header{
    text-align: center;
    font-weight: 400;
    margin-top: 30px;
    font-size: 23px;
  }
  .article-img{
    text-align: center;
  }
  .article-img img{
    width: 70%;
  }
  .article-words{
    font-size: 13px;
    color: #999999;
    font-family: "宋体";
    letter-spacing: 3px;
  }
</style>