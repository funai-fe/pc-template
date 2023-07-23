<template>
	<div class="index-container">
		<header-nav ref="ele"></header-nav>

		<div @click="scrollToTop" :class="['scroll-to-top', showScrollToTop ? 'show' : '']">
			<el-button type="info" icon="el-icon-top" circle></el-button>
		</div>

		<div id="home" class="glide">
			<div class="glide__track" data-glide-el="track">
				<div class="glide__slides">
					<div class="glide__slide">
						<!-- 主文案 -->
						<div class="slide-caption">
							<p class="firsr-line">更好的 FUN AI 体验，获得即时答案</p>
							<p class="second-line">寻找创意灵感并学习新知识</p>
							<p class="third-line">发挥 AI 的无限力量。自定义角色、即时答案、文件阅读、图像生成、语言翻译润色等</p>
							<div class="btn-group">
								<div class="use-btn">开始使用</div>
								<p class="source-address">开源地址</p>
							</div>
						</div>
						<!-- 背景图 -->
						<img :src="topBg" alt="">
					</div>
				</div>
			</div>
		</div>

		<div class="fixed-icon icon-bczj">
			<img class="icon" src="@/assets/index/image_bczj.png" alt="">
			<div class="text">编程专家</div>
		</div>
		<div class="fixed-icon icon-ylzs">
			<img class="icon" src="@/assets/index/image_ylzs.png" alt="">
			<div class="text">医疗助手</div>
		</div>
		<div class="fixed-icon icon-cyfb">
			<img class="icon" src="@/assets/index/image_cyfb.png" alt="">
			<div class="text">创意风暴</div>
		</div>
		<div class="fixed-icon icon-fyzj">
			<img class="icon" src="@/assets/index/image_fyzj.png" alt="">
			<div class="text">翻译专家</div>
		</div>

		<div class="content-wrapper">
			<section id="main-wrapper" class="main-wrapper read-file-wrapper">
				<p class="title1">文件阅读</p>
				<p class="intro">上传文件，询问有关您文件的任何问题，并在几秒钟内获得易于理解的答案，可以快速从文档中提取、定位、汇总信息</p>
				<div class="content-box" id="animation-obj">
					<div class="left-area">
						<div class="sub-row">
							<img class="sub-icon" src="@/assets/index/icon_danwenjian.png" alt="">
							<div class="sub-col">
								<p class="sub-title">单文件阅读</p>
								<div class="text">
									<span>&nbsp;·&nbsp;</span>
									<span>上传研究论文、书籍、手册等！询问有关您的文件的任何问题，
										并在几秒钟内获得易于理解的答案</span>
								</div>
								<div class="text">
									<span>&nbsp;·&nbsp;</span>
									<span>启动线程以提出后续问题，让 AI 澄清或扩展响应</span>
								</div>
								<div class="text">
									<span>&nbsp;·&nbsp;</span>
									<span>上传文件并与其聊天！每个文件集都是一个定制的数据库，您
										可以通过对话轻松获取知识</span>
								</div>
								<div class="read-btn">开始使用</div>
							</div>
						</div>
						<div class="sub-row">
							<img class="sub-icon" src="@/assets/index/icon_duowenjian.png" alt="">
							<div class="sub-col">
								<p class="sub-title">多文件阅读</p>
							</div>
						</div>
					</div>
					<img class="right-area-img" src="@/assets/index/image_danwenjian.png" alt="">
				</div>
			</section>
			<section id="main-wrapper" class="main-wrapper">
				<p class="title1">AI画图</p>
				<p class="intro">想象你的梦想。从文本创建人工智能图像。只需一句话，让你的文字变成画作</p>
				<div class="content-box" id="animation-obj">
					<img class="ai-img" src="@/assets/index/image_AIhuatu.png" alt="">
					<div class="ai-content">
						<p class="ai-text">想象你的梦想</p>
						<p class="ai-text">从文本创建人工智能图像</p>
						<div class="ai-btn">开始使用</div>
					</div>
				</div>
			</section>
			<section id="main-wrapper" class="main-wrapper game-wrapper">
				<p class="title1">冒险游戏</p>
				<p class="intro">想象你的梦想。从文本创建人工智能图像。只需一句话，让你的文字变成画作</p>
				<div class="content-box" id="animation-obj">
					<div class="game-btn">开始使用</div>
					<img class="game-img" src="@/assets/index/image_maoxianyouxi.png" alt="">

				</div>
			</section>

			<section id="main-wrapper" class="main-wrapper language-wrapper">
				<p class="title1">语言专家</p>
				<p class="intro">
					人工智能驱动的语言翻译工具，让翻译更简单。强大的智能纠错功能，自动检测输入文本中的错别字及拼写错误并给出修改建议</p>
				<div class="content-box" id="animation-obj">
					<div class="left-area">
						<div class="sub-row">
							<img class="sub-icon" src="@/assets/index/icon_danwenjian.png" alt="">
							<div class="sub-col">
								<p class="sub-title">智能翻译</p>
								<div class="text">
									<span>&nbsp;·&nbsp;</span>
									<span>快得不敢想，最快1分钟返稿，让中英沟通无国界</span>
								</div>
								<div class="text">
									<span>&nbsp;·&nbsp;</span>
									<span>人工智能翻译， 句子、文章、论文、资料翻译首选</span>
								</div>
								<div class="text">
									<span>&nbsp;·&nbsp;</span>
									<span>让您轻松地将文本从一种语言翻译为另一种语言</span>
								</div>
								<div class="read-btn">开始使用</div>
							</div>
						</div>
						<div class="sub-row">
							<img class="sub-icon" src="@/assets/index/icon_duowenjian.png" alt="">
							<div class="sub-col">
								<p class="sub-title">语言润色/语法修改</p>
							</div>
						</div>
					</div>
					<img class="right-area-img" src="@/assets/index/image_yuyanzhuanjia.png" alt="">
					
				</div>
			</section>
		</div>
	</div>
</template>
  
<script>
import ScrollReveal from 'scrollreveal'
import Glide from '@/utils/glide/glide.min.js'
import anime from 'animejs';
import HeaderNav from '@/components/Home/nav.vue'
import topBg from '@/assets/index/top_bg@2x.png'
export default {
	name: 'Index',
	components: {
		HeaderNav
	},
	data() {
		return {
			showScrollToTop: false,
			topBg: topBg,
		}
	},
	watch: {
	},
	methods: {
		// 小图标动画
		initFixedIconAnime() {
			anime({
				targets: '.fixed-icon',
				translateY: ['0px', '100px'],
				opacity: [0, 1],
				duration: 300,
				easing: 'easeInOutQuad',
				delay: anime.stagger(300, { start: 1000 }),
			});
		},

		// 首页top 大背景主动画
		initMainAnime() {
			const glide = new Glide(".glide", {
				swipeThreshold: false,
				perView: 1, // 设置每次只显示一个项目
			});

			const captionsEL = document.querySelectorAll(".slide-caption");
			// 获取轮播执行前后 状态值
			glide.on(["mount.after", "run.after"], () => {
				const caption = captionsEL[glide.index]; // 返回当前轮播的下标来获取captionsEL对应的标题
				anime({
					targets: caption.children,
					opacity: [0, 1],
					duration: 400, // 动画执行时间 执行函数-线性 
					easing: "linear",
					delay: anime.stagger(400, { start: 300 }),
					translateY: [anime.stagger([40, 10]), 0]  // 从下方移动到上方
				});
			});

			// 轮播前还原透明度为0 这样每次轮播时都有动画效果
			glide.on("run.before", () => {
				document.querySelectorAll(".slide-caption > *").forEach(el => {
					el.style.opacity = 0;
				});
			});
			glide.mount();
			glide.disable();
		},

		// 内容区域动画（文件阅读、AI画图、冒险游戏、语言专家、）
		initContentAnime() {
			const sr = ScrollReveal();
			// 定义一个通用的配置项 
			const staggeringOption = {
				// 延迟300毫秒出现 从下到上 有50像素的移动 动画执行500毫秒 动画函数
				delay: 800,
				distance: "50px",
				duration: 500,
				easing: "ease-in-out",
				origin: "bottom",
			}
			// 滑动时动画效果 引入配置项 把所有属性都拿出来 加上一个新的属性 
			sr.reveal("#animation-obj", { ...staggeringOption, interval: 350 });
		},

		handleScroll() {
			this.$refs.ele.handleScroll()

			if (window.pageYOffset > 1000) {
				this.showScrollToTop = true;
			} else {
				this.showScrollToTop = false;
			}
		},

		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth", // 添加此选项可实现平滑滚动效果
			});
		}
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
		this.$nextTick(() => {
			// 首页top背景动画
			this.initMainAnime()

			// 首页top背景图标动画
			this.initFixedIconAnime()

			//内容动画(暂时关闭)
			// this.initContentAnime()
		})

	}
}
</script>
<style lang="scss" scoped>
$primary-color: #61baf1;
$text-color-lightest: #e7e9ec;
$text-color-darker: #000B58;
$text-color-dark-gray: #000B58;

img {
	width: 100%;
}

.index-container {
	position: relative;
}

.fixed-icon {
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 99;

	.icon {
		width: 51px;
		height: 51px;
	}

	&.icon-bczj {
		left: 45px;
		top: 226px;
	}

	&.icon-cyfb {
		left: 157px;
		top: 394px;
	}

	&.icon-fyzj {
		right: 122px;
		top: 307px;
	}

	&.icon-ylzs {
		right: 45px;
		top: 172px;
	}

	.text {
		width: 90px;
		height: 38px;
		transform: scale(.5);
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
		border-radius: 24px;
		font-size: 12px;
		font-family: PingFangSC-Medium, PingFang SC;
		color: #000B58;
	}
}

// 回到顶部按钮
.scroll-to-top {
	display: none;
	position: relative;
	z-index: 300;

	&.show {
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		position: fixed;
		bottom: 60px;
		right: 30px;
	}
}

// 首页背景
.glide {
	position: relative;
	top: -62px;
	/* 抵消导航菜单的高度 */
	z-index: 50;
	cursor: auto;
}

.glide__slide img,
.glide__slide video {
	width: 100vw;
	height: 100vh;
	object-fit: cover;
}

.slide-caption {
	position: absolute;
	z-index: 70;
	color: $text-color-lightest;
	text-align: center;
	max-width: 60vw;
}

.glide__slide {
	display: flex;
	align-items: center;
	justify-content: center;
}

.slide-caption>* {
	opacity: 0;
}

.slide-caption .firsr-line {
	margin-top: 142px;
	color: #FFFFFF;
	font-size: 35px;
	font-family: PingFangSC-Semibold, PingFang SC;
}

.second-line {
	margin-top: 34px;
	background: linear-gradient(120deg, #FB60D7 0%, #DC5CFF 19%, #A02FFF 40%, #649BFA 63%, #5F98FA 83%, #44BEFF 100%);
	color: #FFFFFF;
	font-size: 35px;
	line-height: 44px;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.third-line {
	margin-top: 31px;
	font-size: 10px;
	line-height: 14px;
	font-family: PingFangSC-Light, PingFang SC;
	color: #FFFFFF;
}

.btn-group {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.use-btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 128px;
	height: 35px;
	background: #FFFFFF;
	border-radius: 17px;
	font-size: 12px;
	line-height: 44px;
	font-family: PingFangSC-Semibold, PingFang SC;
	color: #000B58;
	cursor: pointer;
	margin-top: 60px;
}

.source-address {
	font-size: 9px;
	font-family: PingFangSC-Medium, PingFang SC;
	color: #FFFFFF;
	margin-top: 12px;
}

// 其他内容区域
.content-wrapper {
	position: relative;
	top: -62px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

section {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 10%;
}

.title1 {
	font-size: 24px;
	font-family: PingFangSC-Semibold, PingFang SC;
	color: #000B58;
	margin-top: 35px;
	line-height: 33px;
	color: $text-color-darker;
}

.intro {
	font-size: 9px;
	font-family: PingFangSC-Light, PingFang SC;
	line-height: 24px;
	margin: 9px 0 19px 0;
	text-align: center;
	color: $text-color-dark-gray;
}

.main-wrapper {
	width: 100%;
	padding-bottom: 32px;
}

.read-file-wrapper {
	background-color: #F9FCFF;
}

.game-wrapper {
	background-color: #FEF8FD;
}

.language-wrapper {
	background-color: #F6F6FD;
}

.content-box {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

/* 阅读文件 */
.left-area {
	flex: 1 1 33.33%;
	max-width: 33.33%;
	padding-top: 37px;
}

.sub-row {
	display: flex;
	padding-bottom: 25px;
}

.left-area .sub-icon {
	width: 21px;
	height: 21px;
	margin-right: 8px;
}

.left-area .sub-col .sub-title {
	font-size: 16px;
	font-family: PingFangSC-Medium, PingFang SC;
	color: #000B58;
	line-height: 19px;
}

.left-area .sub-col .text {
	display: flex;
	font-size: 6px;
	font-family: PingFangSC-Light, PingFang SC;
	color: #6C727F;
	line-height: 17px;
	margin-top: 10px;
}

.read-btn {
	position: relative;
	left: -20px;
	width: 122px;
	height: 48px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000B58;
	border-radius: 35px;
	font-size: 12px;
	font-family: PingFangSC-Medium, PingFang SC;
	color: #FFFFFF;
	margin-top: 25px;
	cursor: pointer;
	animation: smallBtnPulseAnimation 2s infinite;
}

@keyframes smallBtnPulseAnimation {
	0% {
		transform: scale(.5);
	}
	50% {
		transform: scale(.6);
	}
	100% {
		transform: scale(.5);
	}
}

.right-area-img {
	flex: 2 1 66.66%;
	max-width: 66.66%;
}

// AI 画图
.ai-content {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 45%;
}

.ai-text {
	display: flex;
	justify-content: center;
	font-size: 24px;
	font-family: PingFangSC-Semibold, PingFang SC;
	color: #FFFFFF;
	line-height: 33px;
}

.ai-btn {
	max-width: 130px;
	padding: 9px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #FFFFFF;
	border-radius: 35px;
	font-size: 12px;
	font-family: PingFangSC-Medium, PingFang SC;
	color: #000B58;
	margin-top: 30px;
	cursor: pointer;
	animation: pulseAnimation 2s infinite;
}

@keyframes pulseAnimation {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
}

@keyframes smallPulseAnimation {
	0% {
		transform: scale(.5);
	}
	50% {
		transform: scale(.6);
	}
	100% {
		transform: scale(.5);
	}
}


// 冒险游戏
.game-wrapper .content-box {
	flex-direction: column;
	align-items: center;
}

.game-btn {
	max-width: 130px;
	padding: 9px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #000B58;
	border-radius: 35px;
	font-size: 12px;
	font-family: PingFangSC-Medium, PingFang SC;
	color: #FFFFFF;
	margin: 6px 0 38px;
	cursor: pointer;
	animation: pulseAnimation 2s infinite;
}

.game-img {
	max-width: 80%;
}

@media (max-width: 1100px) {}

@media(max-width: 992px) {
	.fixed-icon {
		display: none;
	}
	.slide-caption .firsr-line {
		font-size: 30px;
	}

	.slide-caption .second-line {
		font-size: 30px;
	}

	.left-area {
		flex: 1;
		max-width: 100%;
		padding-top: 5%;
	}

	.right-area-img {
		flex: 1;
		max-width: 100%;
	}
}

@media(max-width: 768px) {}

@media (max-width: 576px) {
	.slide-caption {
		max-width: 75vw;
	}

	.slide-caption .firsr-line {
		font-size: 24px;
	}

	.slide-caption .second-line {
		font-size: 24px;
	}

	section {
		padding: 0 6%;
	}

	.ai-text {
		font-size: 12px;
		line-height: 20px;
	}

	.ai-btn {
		animation: smallPulseAnimation 2s infinite;
		margin-top: 5px;
	}

	.game-img {
		max-width: 100%;
	}
}
</style>
<style>
/* 回到顶部按钮 */
.scroll-to-top .el-icon-top {
	font-weight: 700;
	font-size: 20px;
}
</style>