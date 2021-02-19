<template>
  <div class="index">
    <!-- 轮播图开始 -->
    <div id="carousel">
      <span>
        <img src="../../public/img/left.png" alt />
      </span>
      <span>
        <img src="../../public/img/right.png" alt />
      </span>
      <ul id="ul_imgs" class="transition" style="width: 4700px">
        <li>
          <img
            src="https://575e5b35c4ee7.t73.qifeiye.com/qfy-content/uploads/2017/11/8ff2d6a4af9c8a3de0f7bc1703213132.jpg"
            alt
          />
        </li>
        <li>
          <img
            src="https://575e5b35c4ee7.t73.qifeiye.com/qfy-content/uploads/2017/11/55627b4223b947c23f6afe4345485886.jpg"
            alt
          />
        </li>
      </ul>
      <ul id="dot_ul" class="carousel_dot">
        <li class="active"></li>
        <li></li>
      </ul>
    </div>
    <!-- 轮播图结束 -->
    <!-- 装修流程开始 -->
    <div id="progress">
      <h1>装修流程</h1>
      <span class="index_span">业主权益第一，我们始终保障着业主装修每一步</span>
      <div id="progress_details">
        <ul>
          <li>
            <img src="../../public/img/home.png" alt />
            <p>收房量房</p>
          </li>
          <li>
            <img src="../../public/img/pencil.png" alt />
            <p>设计阶段</p>
          </li>
          <li>
            <img src="../../public/img/shuqian.png" alt />
            <p>材料选购</p>
          </li>
          <li>
            <img src="../../public/img/banshou.png" alt />
            <p>施工阶段</p>
          </li>
          <li>
            <img src="../../public/img/suolian.png" alt />
            <p>竣工验收</p>
          </li>
          <li>
            <img src="../../public/img/shop-cart-.png" alt />
            <p>软装配饰</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 装修流程结束 -->
    <!-- 装修案例开始 -->
    <div id="example">
      <h1>装修案例</h1>
      <span class="index_span">我们累计共为0000位业主提供一站式的装修服务</span>
      <ul>
        <li>
          <router-link to="/">
            <img src="../../public/img/for_example_1.png" alt />
          </router-link>
          <p>
            <router-link to="/">案例展示#1</router-link>
          </p>
          <p class="example_details">
            【北欧家装】180㎡北欧家装｜某某小区
            <br />项目地址： 江苏苏州 <br />项目面积： 1...
          </p>
          <br />
          <p>
            <router-link to="/" class="a_more">MORE</router-link>
          </p>
        </li>
        <li>
          <router-link to="/">
            <img src="../../public/img/for_example_1.png" alt />
          </router-link>
          <p>
            <router-link to="/">案例展示#2</router-link>
          </p>
          <p class="example_details">
            【北欧家装】180㎡北欧家装｜某某小区
            <br />项目地址： 江苏苏州 <br />项目面积： 1...
          </p>
          <br />
          <p>
            <router-link to="/" class="a_more">MORE</router-link>
          </p>
        </li>
        <li>
          <router-link to="/">
            <img src="../../public/img/for_example_1.png" alt />
          </router-link>
          <p>
            <router-link to="/">案例展示#3</router-link>
          </p>
          <p class="example_details">
            【北欧家装】180㎡北欧家装｜某某小区
            <br />项目地址： 江苏苏州 <br />项目面积： 1...
          </p>
          <br />
          <p>
            <router-link to="/" class="a_more">MORE</router-link>
          </p>
        </li>
        <li>
          <router-link to="/">
            <img src="../../public/img/for_example_2.png" alt />
          </router-link>
          <p>
            <router-link to="/">案例展示#4</router-link>
          </p>
          <p class="example_details">
            【北欧家装】180㎡北欧家装｜某某小区
            <br />项目地址： 江苏苏州 <br />项目面积： 1...
          </p>
          <br />
          <p>
            <router-link to="/" class="a_more">MORE</router-link>
          </p>
        </li>
        <li>
          <router-link to="/">
            <img src="../../public/img/for_example_2.png" alt />
          </router-link>
          <p>
            <router-link to="/">案例展示#5</router-link>
          </p>
          <p class="example_details">
            【北欧家装】180㎡北欧家装｜某某小区
            <br />项目地址： 江苏苏州 <br />项目面积： 1...
          </p>
          <br />
          <p>
            <router-link to="/" class="a_more">MORE</router-link>
          </p>
        </li>
        <li>
          <router-link to="/">
            <img src="../../public/img/for_example_2.png" alt />
          </router-link>
          <p>
            <router-link to="/">案例展示#6</router-link>
          </p>
          <p class="example_details">
            【北欧家装】180㎡北欧家装｜某某小区
            <br />项目地址： 江苏苏州 <br />项目面积： 1...
          </p>
          <br />
          <p>
            <router-link to="/" class="a_more">MORE</router-link>
          </p>
        </li>
      </ul>
    </div>
    <!-- 装修案例结束 -->
    <!-- 装修案例开始 -->
    <div class="zxal">
      <h2>装修案例</h2>
      <h3>海量效果图为业主提供更多灵感</h3>
      <div class="more-imgs">
        <ul>
          <li v-for="(img, i) of alImgs" :key="i">
            <router-link to="/">
              <img :src="require('../../public/img/' + img)" alt />
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-link class="btn-imgs" to="javascript:;"
          >浏览更多装修案例→</router-link
        >
      </div>
    </div>
    <!-- 设计师团队开始 -->
    <div id="designers">
      <h1 class="animate__animated animate__jello">设计师团队</h1>
      <span class="index_span">我们累计共为0000位业主提供一站式的装修服务</span>
      <div id="designers_details">
        <div>
          <img src="../../public/img/designer1.jpg" alt />
          <div class="text">
            <span>JOJO</span>
            <span>优秀设计师</span>
            <div>
              <span>经验:8年</span>
              <span>作品:3件</span>
            </div>
            <div>
              <router-link to="/">查看Ta的案例</router-link>
            </div>
          </div>
        </div>
        <div>
          <img src="../../public/img/designer2.jpg" alt />
          <div class="text">
            <span>JOJO</span>
            <span>优秀设计师</span>
            <div>
              <span>经验:8年</span>
              <span>作品:3件</span>
            </div>
            <div>
              <router-link to="/">查看Ta的案例</router-link>
            </div>
          </div>
        </div>
        <div>
          <img src="../../public/img/designer3.jpg" alt />
          <div class="text">
            <span>JOJO</span>
            <span>优秀设计师</span>
            <div>
              <span>经验:8年</span>
              <span>作品:3件</span>
            </div>
            <div>
              <router-link to="/">查看Ta的案例</router-link>
            </div>
          </div>
        </div>
        <div>
          <img src="../../public/img/designer4.jpg" alt />
          <div class="text">
            <span>JOJO</span>
            <span>优秀设计师</span>
            <div>
              <span>经验:8年</span>
              <span>作品:3件</span>
            </div>
            <div>
              <router-link to="/">查看Ta的案例</router-link>
            </div>
          </div>
        </div>
        <div>
          <img src="../../public/img/designer5.jpg" alt />
          <div class="text">
            <span>JOJO</span>
            <span>优秀设计师</span>
            <div>
              <span>经验:8年</span>
              <span>作品:3件</span>
            </div>
            <div>
              <router-link to="/">查看Ta的案例</router-link>
            </div>
          </div>
        </div>
        <div>
          <img src="../../public/img/designer6.jpg" alt />
          <div class="text">
            <span>JOJO</span>
            <span>优秀设计师</span>
            <div>
              <span>经验:8年</span>
              <span>作品:3件</span>
            </div>
            <div>
              <router-link to="/">查看Ta的案例</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 设计师团队结束 -->
    <!-- 评论栏目开始 -->
    <div id="user_discuss">
      <h1 class="animate__animated animate__jello">业主评论</h1>
      <span class="index_span">聆听业主的声音使我们不断的进步</span>
      <div>
        <ul>
          <li>
            <img src="../../public/img/default_avatar.jpg" alt />
            <span
              >业主AAA评论：双击这里或者点击编辑按钮修改文本内容，您可以添加图标按钮图片等常用元素，还可以为下方幽灵按钮添加相应的超链接；双击这里或者点击编辑按钮修改文本内容.</span
            >
          </li>
          <li>
            <img src="../../public/img/default_avatar.jpg" alt />
            <span
              >业主AAA评论：双击这里或者点击编辑按钮修改文本内容，您可以添加图标按钮图片等常用元素，还可以为下方幽灵按钮添加相应的超链接；双击这里或者点击编辑按钮修改文本内容.</span
            >
          </li>
          <li>
            <img src="../../public/img/default_avatar.jpg" alt />
            <span
              >业主AAA评论：双击这里或者点击编辑按钮修改文本内容，您可以添加图标按钮图片等常用元素，还可以为下方幽灵按钮添加相应的超链接；双击这里或者点击编辑按钮修改文本内容.</span
            >
          </li>
          <li>
            <img src="../../public/img/default_avatar.jpg" alt />
            <span
              >业主AAA评论：双击这里或者点击编辑按钮修改文本内容，您可以添加图标按钮图片等常用元素，还可以为下方幽灵按钮添加相应的超链接；双击这里或者点击编辑按钮修改文本内容.</span
            >
          </li>
          <li>
            <img src="../../public/img/default_avatar.jpg" alt />
            <span
              >业主AAA评论：双击这里或者点击编辑按钮修改文本内容，您可以添加图标按钮图片等常用元素，还可以为下方幽灵按钮添加相应的超链接；双击这里或者点击编辑按钮修改文本内容.</span
            >
          </li>
          <li>
            <img src="../../public/img/default_avatar.jpg" alt />
            <span
              >业主AAA评论：双击这里或者点击编辑按钮修改文本内容，您可以添加图标按钮图片等常用元素，还可以为下方幽灵按钮添加相应的超链接；双击这里或者点击编辑按钮修改文本内容.</span
            >
          </li>
        </ul>
      </div>
      <div>
        <div>家装快速报价</div>
        <div>
          <div>
            <input type="text" placeholder="您的姓名" />
          </div>
          <div>
            <input type="text" placeholder="您的电话" />
          </div>
          <div>
            <input type="text" placeholder="房屋面积(m²)" />
          </div>
          <button>免费获取装修报价</button>
        </div>
      </div>
    </div>
    <!-- 评论栏目结束 -->
    <!-- footer -->
    <co-brands></co-brands>
    <version></version>
  </div>
</template>
<style>
/* 大屏 */
.index > div.real-time-info {
  width: 100%;
  height: 753px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  position: relative;
  /* justify-content: center; */
}
.index > div.real-time-info > h2 {
  font-size: 26px;
  color: #333333;
  padding-top: 60px;
  padding-bottom: 10px;
}
.index > div.real-time-info > div:nth-child(2) {
  font-size: 13px;
  color: #bababa;
  padding-bottom: 30px;
}
.index > div.real-time-info > div:nth-child(4) a {
  display: block;
  line-height: 21px;
  font-size: 14px;
  padding: 8px 40px;
  text-decoration: none;
  color: #bcbcbc;
  border: 1px solid #bcbcbc;
}
.index > div.real-time-info > div:nth-child(4) a:hover {
  color: #928f8f;
  border-color: #928f8f;
}
.index > div.real-time-info > div:nth-child(3) {
  height: 410px;
  width: 88.222%;
  padding-top: 22px;
  position: relative;
  box-sizing: border-box;
}
.index > div.real-time-info .lunbo > div:nth-child(1) {
  width: 100%;
  height: 278px;
  background-color: #fff;
}
.index > div.real-time-info .lunbo > div:nth-child(2) {
  height: 382px;
  width: 200px;
  position: absolute;
  top: 0;
  left: 60px;
  background-color: #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}
.index > div.real-time-info .lunbo > div:nth-child(2) > div:nth-child(2) {
  height: 82px;
}
.index .title {
  font-size: 16px;
  color: #444;
  width: 180px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 20px;
}
.index .time {
  text-align: center;
  font-size: 12px;
  color: #ccc;
  margin-top: 10px;
}
.index > div.real-time-info .lunbo > .problem {
  position: absolute;
  top: 0;
  padding-left: 310px;
  padding-right: 30px;
  padding-top: 90px;
  font-size: 12px;
  color: rgb(175, 173, 173);
  height: 200px;
  transition: all 0.5s ease;
}
.index > div.real-time-info .lunbo > .problem:hover {
  padding-left: 370px;
}

.index > div.real-time-info .lunbo > span {
  display: block;
  border: 0.5px solid black;
  width: 218px;
  position: absolute;
  top: 95px;
  left: 60px;
  z-index: 1;
  transition: all 0.5s ease;
}
.index > div.real-time-info .lunbo > .problem:hover + span {
  left: 130px;
}
.index > div.real-time-info .prev,
.index > div.real-time-info .next {
  display: block;
  width: 40px;
  height: 40px;
  background: #dbdbdb;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 66%;
  border-radius: 4px;
}
.index > div.real-time-info .prev:hover,
.index > div.real-time-info .next:hover {
  background-color: #c9c7c7;
}
.index > div.real-time-info .prev {
  background-image: url(../assets/prev.png);

  left: 80px;
  top: 40%;
  z-index: 10;
}
.index > div.real-time-info .next {
  background-image: url(../assets/next.png);

  right: 80px;
  top: 40%;
  z-index: 10;
}
/* 大屏结束 */
/* 中小屏 */
.index > div.real-time-info2 {
  width: 80%;
  margin: 0 auto;
  /* 上边距要删除 */
  margin-top: 60px;
  text-align: center;
}
.index > div.real-time-info2 img {
  width: 100%;
}
.index > div.real-time-info2 h2 {
  font-size: 26px;
  color: #333333;
  padding-top: 60px;
  padding-bottom: 10px;
}
.index > div.real-time-info2 > div:nth-child(2) {
  font-size: 13px;
  color: #bababa;
  padding-bottom: 30px;
}
.index > div.real-time-info2 .bottom {
  height: 60px;
}
.index > div.real-time-info2 .container {
  margin-bottom: 10px;
  background-color: #f4f4f4;
}
.index > div.real-time-info2 .title {
  text-align: center !important;
  width: 100%;
}
@media (max-width: 576px) {
  .index > div.real-time-info {
    display: none;
  }
  .index > div.real-time-info2 {
    display: block;
  }
}
@media (min-width: 576px) {
  .index > div.real-time-info {
    display: none;
  }
  .index > div.real-time-info2 {
    display: block;
  }
}
@media (min-width: 768px) {
  .index > div.real-time-info {
    display: none;
  }
}
@media (min-width: 992px) {
  .index > div.real-time-info {
    width: 100%;
    display: flex;
  }
  .index > div.real-time-info2 {
    display: none;
  }
}
@media (min-width: 1200px) {
}
.btn-imgs {
  width: 130px;
  display: block;
  line-height: 21px;
  font-size: 14px;
  padding: 8px 20px;
  text-decoration: none;
  color: #bcbcbc;
  border: 1px solid #bcbcbc;
  margin: 0 auto;
}
.btn-imgs:hover {
  color: #928f8f;
  border-color: #928f8f;
}
.zxal {
  text-align: center;
  margin-bottom: 60px;
}
.zxal > h2 {
  font-size: 26px;
  color: #333333;
  padding-top: 60px;
  padding-bottom: 20px;
}
.zxal > h3 {
  font-size: 13px;
  color: #bababa;
  padding-bottom: 20px;
}
.zxal > .more-imgs > ul {
  padding: 10px 60px 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* transition: all 1s linear; */
}
.zxal > .more-imgs > ul > li {
  flex-basis: 23.333%;
  padding: 5px;
  box-sizing: border-box;
  transition: all 0.5s ease;
}
.zxal > .more-imgs > ul > li img {
  /* transition: all 1s linear; */
  width: 100%;
}
@media (max-width: 576px) {
  .zxal > .more-imgs > ul > li {
    flex-basis: 100%;
  }
}
@media (min-width: 576px) {
  .zxal > .more-imgs > ul > li {
    flex-basis: 50%;
  }
}
@media (min-width: 768px) {
  .zxal > .more-imgs > ul > li {
    flex-basis: 25%;
  }
}
@media (min-width: 992px) {
  .zxal > .more-imgs > ul > li {
    flex-basis: 25%;
  }
}
/* 业主评论 */
.commentBox > .comm-title {
  width: 100%;
  text-align: center;
}
.commentBox > .comm-title h2:nth-child(1) {
  font-size: 26px;
}
.commentBox > .comm-title h2:nth-child(2) {
  margin-top: 20px;
  color: #bababa;
  font-size: 13px;
}
.commentBox > .comment {
  display: flex;
  width: 100%;
  padding: 50px 80px;
}
.comment > .left {
  flex-basis: 60%;
}
.comment > .left > div {
  display: flex;
}
.comment > .left > div:not(:last-child) {
  margin-bottom: 15px;
}
.comment > .left img {
  width: 50px;
  vertical-align: middle;
  margin-right: 10px;
}
.comment > .left span {
  font-size: 13px;
  color: #887f7f;
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
}
#progress,
#example,
#designers,
#user_discuss {
  text-align: center;
}
#progress,
#example,
#designers,
#user_discuss > h1 {
  font-size: 26px;
  color: #333333;
  padding-top: 60px;
  padding-bottom: 10px;
}
ul {
  list-style: none;
}

#example {
  width: 100%;
}
#example a {
  text-decoration: none;
  color: #4acbb1;
}
#example ul {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
#example ul li {
  border-radius: 5%;
}
#example li img {
  width: 100%;
  border-radius: 5%;
}
#example li > p a {
  font-size: 20px;
}
.example_details {
  font-size: 14px;
  color: gray;
  text-align: left;
  padding-left: 12px;
  padding-top: 10px;
}

#example::before,
#example::after {
  content: "";
  display: table;
}
#example::after {
  clear: both;
}
/* 设计师 */
#designers {
  width: 100%;
  background-color: rgb(238, 236, 236);
}
#designers_details {
  width: 100%;
}
#designers_details > div {
  background-color: rgb(238, 236, 236);
  float: left;
}
#designers_details img {
  width: 50%;
}
.text > span:first-child {
  color: #3ec9ad;
}
.text > span + span {
  display: block;
  color: #333333;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bolder;
}
.text > div {
  margin-bottom: 10px;
}
.text > div span {
  font-size: 16px;
}
.text > div span + span {
  margin-left: 10px;
}
.text > div a {
  display: block;
  font-size: 20px;
  width: 50%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  color: white;
  background-color: #3ec9ad;
  text-decoration: none;
}
@media screen and (max-width: 576px) {
  #carousel {
    display: none;
  }
  #designers_details > div {
    width: 100%;
  }
  #example li {
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin: 10px auto;
    float: left;
    box-shadow: 3px 5px 5px gray;
  }
  #user_discuss {
    display: none;
  }
  #progress_details > ul li {
    float: left;
    width: 38%;
    height: 120px;
    border: 1px solid darkgray;
    transition: all linear 0.5s;
    margin-left: 120px;
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 576px) {
  #carousel {
    display: none;
  }
  #designers_details > div {
    width: 100%;
  }
  #example li {
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin: 10px auto;
    float: left;
    box-shadow: 3px 5px 5px gray;
  }
  #user_discuss {
    display: none;
  }
  #progress_details > ul li {
    float: left;
    width: 38%;
    height: 120px;
    border: 1px solid darkgray;
    transition: all linear 0.5s;
    margin-left: 180px;
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 768px) {
  #carousel {
    display: none;
  }
  #designers_details > div {
    width: 50%;
  }
  #example li {
    box-sizing: border-box;
    display: block;
    width: 40%;
    margin: 10px auto;
    margin-left: 45px;
    float: left;
    box-shadow: 3px 5px 5px gray;
  }
  #user_discuss {
    display: none;
  }
  #progress_details > ul li {
    float: left;
    width: 38%;
    height: 120px;
    border: 1px solid darkgray;
    transition: all linear 0.5s;
    margin-left: 70px;
  }
  #progress {
    width: 100%;
    margin: 100px auto;
  }
}
@media screen and (min-width: 992px) {
  #carousel {
    display: none;
  }
  #designers_details > div {
    width: 33.33333333333333%;
  }
  #example li {
    box-sizing: border-box;
    display: block;
    width: 27%;
    margin: 10px auto;
    margin-left: 45px;
    float: left;
    box-shadow: 3px 5px 5px gray;
  }
  #user_discuss {
    display: none;
  }
  #progress_details > ul li {
    float: left;
    width: 13%;
    height: 120px;
    border: 1px solid darkgray;
    transition: background-color linear 0.5s;
  }
  #progress_details > ul li ~ li {
    margin-left: 20px;
  }
  #progress {
    width: 100%;
    margin: 100px auto;
  }
}
@media screen and (min-width: 1200px) {
  #carousel {
    display: block;
  }
  #example li {
    box-sizing: border-box;
    display: block;
    width: 27%;
    margin: 10px auto;
    margin-left: 45px;
    float: left;
    box-shadow: 3px 5px 5px gray;
  }
  #user_discuss {
    display: block;
  }
  #progress_details > ul li ~ li {
    margin-left: 30px;
  }
  #progress {
    width: 100%;
  }
}
#user_discuss {
  position: relative;
  float: left;
  width: 100%;
  position: relative;
}
#user_discuss > div {
  width: 70%;
}
#user_discuss > div ul {
  width: 90%;
  padding-left: 30px;
}
#user_discuss > div ul li {
  height: 80px;
  line-height: 30px;
  font-size: 16px;
  margin-bottom: 10px;
}
#user_discuss > div ul img {
  width: 80px;
  float: left;
}
#user_discuss > div:last-child {
  width: 30%;
  position: absolute;
  top: 120px;
  right: 0;
}
#user_discuss > div:last-child > div:first-child {
  background-color: #4acbb1;
  color: white;
  font-weight: bold;
  height: 60px;
  line-height: 60px;
  font-size: 18px;
}
#user_discuss > div:last-child div:last-child div {
  width: 80%;
  height: 30px;
  margin: 10px auto;
  padding: 10px;
}
#user_discuss > div:last-child div:last-child div input {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 2px;
  background-color: #ccc;
  border: 0;
  outline: 0;
  font-size: 14px;
  border-radius: 5px;
}
#user_discuss > div:last-child div:last-child button {
  width: 80%;
  height: 50px;
  line-height: 50px;
  border: 0;
  background-color: #4acbb1;
  outline: 0;
  margin-top: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
.more_img {
  clear: both;
  margin: 0 auto;
  width: 200px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #cccccc;
  font-size: 12px;
  text-decoration: none;
}
.more_img > a {
  text-decoration: none;
  color: darkgray;
  transition: color linear 0.5s;
}
.more_img > a:hover {
  color: black;
}
/* 案例 */
#progress_details > ul li:hover {
  background-color: #3ec9ad;
}
#progress_details > ul li p {
  font-size: 14px;
  color: darkgray;
}
#progress_details > ul li img {
  width: 70px;
  margin: 20px auto 5px;
}

.index_span {
  display: block;
  font-weight: lighter;
  color: darkgrey;
  font-size: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
}

#progress::before,
#progress::after {
  content: "";
  display: table;
}
#progress::after {
  clear: both;
}
/* 轮播图 */
.carousel_dot {
  width: 100px;
  margin: 0 auto;
  list-style: none;
  position: absolute;
  bottom: 25px;
  left: 50%;
  margin-left: -25px;
}
.carousel_dot > li {
  float: left;
  width: 10px;
  height: 10px;
  background-color: lightblue;
  border-radius: 5px;
  margin: 0 5px;
  cursor: pointer;
}
.carousel_dot > li.active {
  background-color: darkcyan;
}
#carousel {
  width: 100%;
  height: 600px;
  position: relative;
  overflow: hidden;
}
#carousel > span {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
#carousel > span img {
  display: block;
  width: 50px;
  height: 50px;
}
#carousel > span:first-child {
  position: absolute;
  left: 20px;
  top: 270px;
}
#carousel > span + span {
  position: absolute;
  right: 30px;
  top: 270px;
}
#carousel > ul img {
  float: left;
  width: 1349px;
  height: 600px;
}
#ul_imgs.transition {
  transition: all 0.5s linear;
}
#carousel::before,
#carousel::after {
  content: "";
  display: table;
}
#carousel::after {
  clear: both;
}
</style>
<script>
export default {
  data() {
    return {
      alImgs: [
        "zx1.webp",
        "zx2.webp",
        "zx3.webp",
        "zx4.webp",
        "zx5.webp",
        "zx6.webp",
        "zx7.webp",
        "zx8.webp",
      ],
    };
  },
  mounted() {
    var ulImgs = document.getElementById("ul_imgs");
    var dot_ul = document.getElementById("dot_ul");
    var timer = setInterval(() => {
      if (ulImgs.style.marginLeft == "0px") {
        ulImgs.style.marginLeft = "-1400px";
        dot_ul.firstElementChild.className = "";
        dot_ul.lastElementChild.className = "active";
        console.log(1);
      } else {
        ulImgs.style.marginLeft = "0px";
        dot_ul.firstElementChild.className = "active";
        dot_ul.lastElementChild.className = "";
        console.log(2);
      }
    }, 3000);
  },
};
</script>
