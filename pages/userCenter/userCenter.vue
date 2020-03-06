<template>
	<view class="content">
		<view class="cu-list menu-avatar">
			<view class="cu-item" @click="openLink('mySet')">
				<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
				<view class="content flex-sub">
					<view>名字啊</view>
					<view class="text-gray text-sm flex justify-between">
						西山煤矿总部
					</view>
				</view>
				<uni-icons type="arrowright"></uni-icons>
			</view>
		</view>
		<uni-list class="usCenList">
			<uni-list-item title="我的问题" note="" @click="openLink('myQuestion')"></uni-list-item>
			<uni-list-item title="我的留言" note="" @click="openLink('myLiuyan')"></uni-list-item>
			<uni-list-item title="我的反馈" note="" @click="openLink('myFankui')"></uni-list-item>
			<uni-list-item title="我的收藏" note="" @click="openLink('myCollect')"></uni-list-item>
			<uni-list-item title="帮助" note=""></uni-list-item>
			<uni-list-item title="设置" note="" @click="openLink('mySet')"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			openLink(i) {
				uni.navigateTo({
					url: '../'+i+'/'+i
				})
				this.$forceUpdate()
			}
		},
	}
</script>

<style>
	.cu-avatar {
		width: 120rpx;
		height: 120rpx;
	}
	.cu-list.menu-avatar>.cu-item {
		margin: 36rpx 0;
		padding: 0 30rpx;
		height: 120rpx;
	}
	.cu-list.menu-avatar>.cu-item .content {
		left: 166rpx;
	}
	.uni-icons {
		font-size: 32rpx !important;
		color: #999 !important;
	}
</style>
