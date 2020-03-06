<template>
	<view class="content">
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
			</view>
		</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goInfo() {
				uni.navigateTo({
					url: '../fankuiInfo/fankuiInfo',
				});
			},
		}
	}
</script>

<style>
	.cu-card.dynamic { padding-bottom: 30rpx;}
</style>

