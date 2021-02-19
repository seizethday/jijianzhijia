<template>
  <header class="header">
    <div>
      <div class="logo">
        <div class="logo-img"></div>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/result">效果图</router-link>
          </li>
          <li>
            <router-link to="/ybal">样板案例</router-link>
          </li>
          <li>
            <router-link to="/zxzs">装修知识</router-link>
          </li>
          <li>
            <router-link to="/about">关于我们</router-link>
          </li>
        </ul>
      </nav>
      <div>
        <input type="text" placeholder="搜索关键词" />
        <span>
          <img src="../assets/search.png" alt />
        </span>
      </div>
    </div>
    <!-- 中小屏显示 -->
    <div>
      <div class="list">
        <img src="../assets/gengban.png" alt />
      </div>
      <div>
        <div class="logo-2"></div>
      </div>
      <div>
        <img src="../assets/search.png" alt />
      </div>
    </div>
  </header>
</template>
<style>
.header > div {
  padding: 0 40px;
  display: flex;
  justify-content: flex-start;
}

.header .logo {
  width: 198px;
  height: 81px;
  padding: 10px 0px;
  box-sizing: border-box;
}
.header .logo-img {
  background-image: url(../assets/logo2.webp);
  background-size: 100%;
  background-repeat: no-repeat;
  /* background-position-x: 100px; */
  width: 126px;
  height: 57px;
  margin-left: 40px;
}
.header nav {
  width: 710px;
  height: 81px;
  display: flex;
  align-items: center;
}
.header nav > ul {
  padding: 0 110px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  height: 37px;
  font-size: 14px;
  padding-top: 11px;
}
.header nav > ul > li {
  width: 20%;
}
.header nav > ul > li > a {
  text-decoration: none;
  color: #aaaaaa;
  /* overflow: hidden; */
  white-space: nowrap;
  /* text-overflow: ellipsis; */
}
.header nav > ul > li > a:hover {
  color: #9c9c9c;
}
.header nav > ul > li + li {
  margin-left: 45px;
}
.header > div:nth-child(1) div:nth-child(3) {
  width: 300px;
  height: 81px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 20px;
}
.header div:nth-child(3) input {
  display: block;
  width: 250px;
  height: 22px;
  border: 1px solid #3ec9ad;
  padding: 4px;
  padding-left: 10px;
  outline: none;
  color: #aaaaaa;
}
input::-webkit-input-placeholder {
  color: #aaaaaa;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #aaaaaa;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #aaaaaa;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #aaaaaa;
}

.header div:nth-child(3) span {
  display: block;
  width: 45px;
  height: 32px;
  background-color: #3ec9ad;
  position: relative;
  cursor: pointer;
}
.header div:nth-child(3) span > img {
  width: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/* 中小屏样式 */
.header > div:nth-child(2) {
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 4px 0;
  box-sizing: border-box;
}
.header > div:nth-child(2) .logo-2 {
  background-image: url(../assets/logo1.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 45.31px;
  width: 100px;
  margin: 0 auto;
}
.header > div:nth-child(2) > div:not(:nth-child(2)) {
  width: 45px;
  height: 100%;
  line-height: 60px;
  text-align: center;
}
.header > div:nth-child(2) > div > img {
  width: 20px;
  cursor: pointer;
}
@media (max-width: 576px) {
  .header > div:nth-child(1) {
    display: none;
  }
  .header > div:nth-child(2) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
}
@media (min-width: 576px) {
  .header > div:nth-child(1) {
    display: none;
  }
  .header > div:nth-child(2) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
}
@media (min-width: 768px) {
  .header > div:nth-child(2) {
    display: flex;
  }
}
@media (min-width: 992px) {
  .header > div:nth-child(1) {
    display: flex;
  }
  .header > div:nth-child(2) {
    display: none;
  }
  .header nav > ul > li + li {
    margin-left: 13px;
  }
  .header nav > ul {
    padding: 50px;
  }
}
@media (min-width: 1200px) {
  .header > div:nth-child(1) {
    display: flex;
  }
  .header nav > ul > li + li {
    margin-left: 45px;
  }
  .header nav > ul {
    padding: 80px;
  }
}
</style>
