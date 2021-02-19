<template>
  <div class="article">
    <!-- 文章内容 -->
    <div class="content">
      <!-- 文章标题 -->
      <h3 class="article-header">餐厅装饰画选什么?精品山水国画装饰美景多多</h3>
      <!-- 发表时间 -->
      <p class="publicationtime">2017-03-17 16:58</p>
      <span class="article-words">
        客户：先谢谢你了，能想象一下一块圆形的黑金属在一点钟方向向着八点钟的位子以闪电的弧度裂开然后黑金属两瓣分别上下稍微分离的感觉吗？<br>
        设计狮：您这个好复杂啊，有草图吗？<br>
        客户：不好意思，刚才在忙，这个我画了n+1遍也没画出来<br>
        设计狮：……<br>
        <br>
        <br>
        朋友：设计师会经常加班么?<br>
        我：这么说吧，凌晨4点钟，还在大街上活动的只有三种：狗、醉汉、设计师；早上7点 钟，大街上活动的只有二种：上班族和买完早餐继续加班的设计师…… <br>
        <br>
        <br>
        设计狮生命不能承受之重：<br>
        收藏PNG用的时候发现背景是白色、Adobe Photoshop CC已停止工作、下载的PSD只有一个图层、客户让你在PS里给大象转个身<br>
      </span>
      <router-link to="/zxzs" class="btnBack">返回列表</router-link>
    </div>
  </div>
</template>

<style  scoped>
  .content{
    margin: 0 auto;
    width: 70%;
    padding: 0 50px;
    color: #666666;
  }
  .article-header{
    text-align: center;
    font-weight: 400;
    margin-top: 30px;
    font-size: 25px;
  }
  .publicationtime{
    text-align: center;
    font-size: 16px;
  }
  .article-words{
    font-size: 13px;
    font-family: "宋体";
    letter-spacing: 3px;
  }
  .btnBack{
    display: block;
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
    width: 100px;
    height: 50px;
    border: 2px solid black;
    line-height: 50px;
    text-decoration: none;
    color: #2a2a2a;
    border-radius: 5px;
  }
  .btnBack:hover{
    background: black;
    color: white;
  }
</style>