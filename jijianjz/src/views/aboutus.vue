<template>
  <div>
    <div class="about_body_background">
      <div class="about_background">
				<div class="about_page_body">
					<div class="article_page">
						<div class="title">
							<div class="about_title">关于我们</div>
							<span class="header_sbutitle">ABOUT</span>
						</div>
						<div class="div_blank"></div>
						<span class="article">某某家装有限公司是一家大型现代化装饰企业，历经十余年的发展与资源整合，集团已形成由工装、家装双引擎联合驱动的全产业链发展模式，致力为客户带去超高性价比的一站式装饰体验。</span>
						<div class="div_blank"></div>
						<span class="article">作为一家具有社会责任感和企业荣誉感的装饰企业，成立至今集团坚持以人为本、诚信经营，以引领行业发展为己任，多次实现设计领域的创新与工艺方面的突破。集团拥有工程设计与施工二级资质以及一批身经百战经验丰富的服务团队，并通过信息化移动平台对所有施工工程进行实时、实地的监控管理，全程保障工程质量和进 度，从而实现客户利益最大化。</span>
						<div class="div_blank"></div>
						<span class="article">公司以“成就客户、互利共 赢”为经营理念。并以为客户提供高、精、专的装饰装修服务为宗旨。成立至今已为上万个客户提供专业化解决方案，我们始终坚持精品发展战略，走专业化道路。在商业工装领域提出“营销型装饰设计”先进理念，在家装领域着力推出“体验式”服务，受到业内广泛的好评和赞誉。未来我们将进一步整合资源、提升服务，打造中国最具影响力装饰品牌。</span>
						<div class="div_blank"></div>
						<ul class="icon_list">
							<li class="li_icon">
								<span class=""></span>
							</li>
							<li class="li_icon">
								<span style="background-position:-16px -96px"></span>
							</li>
							<li class="li_icon">
								<span style="background-position:-128px -96px"></span>
							</li>
							<li class="li_icon">
								<span  style="background-position:-64px -96px"></span>
							</li>
							<li class="li_icon">
								<span  style="background-position:-80px -96px"></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
    </div>
  </div>
</template>
<style scoped>
*{
	margin: 0;
	padding: 0;
	transition: all ease .6s;
}
.about_body_background {
  height: 692.8px;
  width: 100%;
  background-image: url(https://ccdn.goodq.top/caches/31d7784…/aHR0cHM6Ly81NzVlNWIzNWM0ZWU3LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDUvZTNlMWM0NmE5OWI2MmNjOTlmN2RiYzgxZDZiMjU4OTYtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  background-position: 0 0%;
	box-sizing: border-box;
	position: relative;
}
.about_background{
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.4);
}
.div_blank{
	width: 100%;
	height: 25px;
}
.title{
	background-repeat: no-repeat;
	margin-top: 0px;
	margin-bottom: 0px;
	padding: 0px 15px 20px 0px;
}
.about_title{
	font-family: 微软雅黑;
	font-size: 24px;
	font-weight: normal;
	font-style: normal;
	color: #ffffff;
	padding: 0 0 5px 0;
	display: block;
	padding: 0 0 5px 0;
}
.about_page_body{
	width: 80%;
	padding: 0 40px;
	margin: auto auto;
	position: absolute;
	width: 100%;
	left: 5%;
	top: 12%;
	bottom: 0;
}
.article_page{
	width: 50%;
	height: auto;
}
@media screen and (min-width:992px)and (max-width:1199px){
	.about_page_body{
	width: 100%;
	padding: 0 40px;
	margin: auto auto;
	position: absolute;
	width: 100%;
	left: 4%;
	top: 10%;
	bottom: 0;
	}
}
@media screen and (min-width:768px)and (max-width:991px){
	.about_page_body{
	width: 80%;
	padding: 0 40px;
	margin: auto auto;
	position: absolute;
	width: 100%;
	left: 2%;
	top: 5%;
	bottom: 0;
	}
	.article_page{
	width: 80% !important;
	height: auto;
}
}
@media screen and (min-width:0px)and (max-width:767px){
	.about_page_body{
	width: 80%;
	padding: 0 40px;
	margin: auto auto;
	position: absolute;
	width: 100%;
	left: 1%;
	top: 3.5%;
	bottom: 0;
	}
	.article_page{
	width: 80% !important;
	height: auto;
}
	.about_title{
		font-size: 18px;
	}
}

.header_sbutitle{
	font-family: arial;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    color: #ffffff;
    display: block;
    padding: 2px;
}
.article{
	letter-spacing: 1px;
	margin-bottom: 0;
	font-family: 微软雅黑;
	font-style: normal;
	font-weight: normal;
	word-spacing: normal;
	line-height: 1.5em;
	font-size: 12px;
	color: #FFFFFF;
}
.icon_list{
	display: inline block;
}
.icon_list{
    text-align: match-parent;
		list-style: none;
    list-style-image: none;
}
.icon_list span{
	background-image: url(https://f.goodq.top/FeiEditor/images/icon/social_icon_16x16.png);
    background-position-y:-96px;
    background-repeat: no-repeat;
    height: 16px;
    width: 16px;
    display: inline-block;
		margin-right: 20px;
		float: left;
}
</style>