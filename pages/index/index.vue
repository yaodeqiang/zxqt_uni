<template>
	<view class="content">
		<view class="zz" :class="hotOpen?'cur':''"></view>
		<uni-nav-bar class="indNav" left-icon="arrowleft" @clickLeft="back">
			<view class="indNav-tab flexBox jusCenter">
				<view class="indNavTabItem cur">
					推荐
					<view class="indNavLine"></view>
				</view>
				<view class="indNavTabItem flexBox" @click="goHot">
					热榜
					<view class="indNavLine"></view>
				</view>
				<view class="indNav-sub flexBox around" :class="hotOpen?'cur':''">
					<button class="cur" type="default" @click="goHot">全部热榜</button>
					<button type="default" @click="goHot">热门问题</button>
					<button type="default" @click="goHot">热门知识</button>
				</view>
			</view>
			<view class="indNav-usCen fr" @click="goUserCenter"><image src="../../static/logo.png" mode=""></image></view>
		</uni-nav-bar>
		<view class="indSearch flexBox between">
			<uni-search-bar placeholder="请输入您要搜索的内容" bgColor="#EEEEEE" @confirm="search" cancelButton="none" class="indSearchInput"/>
			<view class="indSea-icon flexBox">
				<navigator url="../wdzl/wdzl" class="indSea-link">
					<image src="../../static/icon_fk.png" mode=""></image>
				</navigator>
				<navigator url="../myXiaoxi/myXiaoxi" class="indSea-link">
					<image src="../../static/icon_xiaoxi.png" mode=""></image>
					<view class="grid-dot">
						<uni-badge text="2" type="error" size="small" />
					</view>
				</navigator>
			</view>
		</view>
		<view class="indNotice">
			<view class="indNoticPoint indNotPoi-z1"></view>
			<view class="indNoticPoint indNotPoi-z2"></view>
			<view class="indNoticPoint indNotPoi-y1"></view>
			<view class="indNoticPoint indNotPoi-y2"></view>
			<view class="indNotic-tit">集团公告</view>
			<view class="indNotic-con">
				<!-- <rich-text v-text="111"></rich-text> -->
				<text>针对职工杨某某提的问题，解决公告如下：</text>
				<text style="text-indent: 2em;">2019.12.24日某某提出的问题，我们经过研究，认为他的看法合乎常理，所以上下班时间调整为早8点到晚6点。</text>
			</view>
		</view>
		<view class="cu-card dynamic no-card">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view>西山煤矿小张</view>
							<view class="text-gray text-sm flex justify-between">
								西山煤矿事业部
							</view>
						</view>
						<uni-tag text="已解决" type="primary" size="small" circle="true" inverted="true"></uni-tag>
					</view>
				</view>
				<view class="text-content uni-ellipsis" @click="goInfo">
					集团领导到机电厂调研契约化管理工作室作秀？
				</view>
				<view class="grid flex-sub padding-lr col-3 grid-square" @click="goInfo">
					<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
					</view>
					<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
					</view>
					<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
					</view>
				</view>
				<view class="indTjCard-gf uni-flex" @click="goInfo">
					<view class="indTjGf-tit">官方</view>
					<view class="indTjGf-con ellipsis-2">
						集团公司领导到机电厂调研契约化管理工作是审核约束化管理。
					</view>
				</view>
				<view class="indTjCard-cz flexBox between">
					<text @click="goInfo">两小时前</text>
					<view class="indTj-zan flexBox" @click="goInfo">
						<uni-icons type="chat"></uni-icons>
						<text>102</text>
					</view>
					<view class="indTj-zan flexBox" :class="checkList[0]?'indTj-zanCur':''" @click="favClick(0)">
						<uni-icons type="hand-thumbsup"></uni-icons>
						<text v-if="checkList[0]">已点</text>
						<text v-else>点赞</text>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-card dynamic no-card">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view>西山煤矿小张</view>
							<view class="text-gray text-sm flex justify-between">
								西山煤矿事业部
							</view>
						</view>
						<uni-tag text="解决中" type="error" size="small" circle="true" inverted="true"></uni-tag>
					</view>
				</view>
				<view class="text-content uni-ellipsis" @click="goInfo">
					集团领导到机电厂调研契约化管理工作室作秀？
				</view>
				<view class="grid flex-sub padding-lr col-1">
					<video class="bg-img only-img" src="https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4" controls hand-thumbsup="url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"></video>
					</view>
				</view>
				<view class="indTjCard-gf uni-flex" @click="goInfo">
					<view class="indTjGf-tit">官方</view>
					<view class="indTjGf-con ellipsis-2">
						集团公司领导到机电厂调研契约化管理工作是审核约束化管理。
					</view>
				</view>
				<view class="indTjCard-cz flexBox between">
					<text @click="goInfo">2019年12月12日</text>
					<view class="indTj-zan flexBox" @click="goInfo">
						<uni-icons type="chat"></uni-icons>
						<text>102</text>
					</view>
					<view class="indTj-zan flexBox" :class="checkList[1]?'indTj-zanCur':''" @click="favClick(1)">
						<uni-icons type="hand-thumbsup"></uni-icons>
						<text v-if="checkList[1]">已点</text>
						<text v-else>点赞</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentInd:0,
				hotOpen:false,
				checkList: [false,false,false,false]
			}
		},
		onLoad() {
			
		},
		methods: {
			favClick(i) {
				this.checkList[i] = !this.checkList[i]
				this.$forceUpdate()
			},
			goInfo() {
				uni.navigateTo({
					url: '../questionInfo/questionInfo',
				});
			},
			goUserCenter() {
				uni.navigateTo({
					url: '../userCenter/userCenter'
				});
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			goHot(){
				uni.navigateTo({
					url: '../index-hot/index-hot',
				});
			},
			favClick(index) {
				this.checkList[index] = !this.checkList[index]
				this.$forceUpdate()
			}
		},
	}
</script>

<style>
	
</style>
