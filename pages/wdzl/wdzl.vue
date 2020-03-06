<template>
	<view class="content">
		<uni-collapse :accordion="true" class="wdzlType flexBox between">
			<uni-collapse-item v-for="item in accordion" :key="item.id" :title="item.title" :show-animation="item.animation">
				<view class="wdzlTy-content">
					<text v-for="item2 in item.content">{{ item2 }}</text>
				</view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="cu-card dynamic no-card">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
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
						<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
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
				accordion: [{
						id: 0,
						title: '公司产业',
						content: ['公司产业1','公司产业2','公司产业3'],
						animation: true
					},
					{
						id: 1,
						title: '问题类型',
						content: ['问题类型1','问题类型2','问题类型3'],
						animation: true
					},
					{
						id: 2,
						title: '专业类型',
						content: ['专业类型1','专业类型2','专业类型3'],
						animation: true
					},
					{
						id: 3,
						title: '筛选',
						content: ['全部问答','精选问答','历史问答'],
						animation: true
					}
				],
				checkList: [false,false,false,false]
			}
		},
		methods: {
			favClick(i) {
				this.checkList[i] = !this.checkList[i]
				this.$forceUpdate()
			},
			onNavigationBarButtonTap(e) {
				uni.navigateTo({
					url: '../tiwen/tiwen',
				});
			},
			goInfo() {
				uni.navigateTo({
					url: '../questionInfo/questionInfo',
				});
			},
		}
	}
</script>

<style>
	
</style>
