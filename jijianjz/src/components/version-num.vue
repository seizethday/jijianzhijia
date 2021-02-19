<template>
  <footer>
    <ul>
      <li>Powered by QFY 版权所有 ©2010-2016</li>
      <li>地址：江苏省苏州市工业园区金鸡湖大道00号</li>
      <li>苏ICP备00010001号</li>
    </ul>
  </footer>
</template>
<style>
  footer>ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 116px;
    padding: 0 0 20px;
    font-size: 12px;
    color: #808080;
    background-color: #c1c1c1;
  }
  footer>ul>li{
    margin-bottom: 10px;
    letter-spacing: 2px;
  }
  footer>ul>li:not(:last-child){
    letter-spacing: 2px;
  }
</style>
