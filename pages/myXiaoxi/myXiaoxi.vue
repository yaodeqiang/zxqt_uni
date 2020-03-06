<template>
	<view class="content">
		<view class="xxTypeBox flexBox">
			<text :class="currentInd==1?'cur':''" @click="onClickItem('1')">未回答问题</text>
			<text :class="currentInd==2?'cur':''" @click="onClickItem('2')">已回答问题</text>
		</view>
		<!-- 未回答问题 暂无消息 -->
		<view v-if="currentInd == 0" class="cu-card dynamic no-card tzWuxx">
			<image src="../../static/tzIcon_zwxx.png" mode=""></image>
			<text>暂无任何消息</text>
		</view>
		<!-- 未回答问题 -->
		<view v-if="currentInd == 1">
			<view class="cu-card dynamic no-card">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
							<view class="content flex-sub">
								<view>西山煤矿小张</view>
								<view class="text-gray text-sm flex justify-between">
									2020年1月10日 &nbsp;&nbsp;09:34
								</view>
							</view>
						</view>
					</view>
					<view class="text-content quesXq-content" style="max-height: max-content;">
						集团领导到机电厂调研契约化管理工作室作秀？
					</view>
					<view class="xxCard">
						<view class="xxCa-ywt flexBox between">
							<view class="xxYwt-image"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode=""></image></view>
							<view class="xxYwt-int ellipsis-2">
								<text>西山煤矿小王</text>：
								人与人之间的交情必须建立在相互的基础上。
							</view>
						</view>
						<view class="xxCa-hfInput">
							<input type="text" value="" placeholder="回复西山煤矿小张" />
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 已回答问题 -->
		<view v-if="currentInd == 2">
			<view class="cu-card dynamic no-card">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
							<view class="content flex-sub">
								<view>西山煤矿小张</view>
								<view class="text-gray text-sm flex justify-between">
									2020年1月10日 &nbsp;&nbsp;09:34
								</view>
							</view>
						</view>
					</view>
					<view class="text-content quesXq-content" style="max-height: max-content;">
						集团领导到机电厂调研契约化管理工作室作秀？
					</view>
					<view class="xxCard">
						<view class="xxCa-ywt flexBox between">
							<view class="xxYwt-image"><image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode=""></image></view>
							<view class="xxYwt-int ellipsis-2">
								<text>西山煤矿小王</text>：
								我们礼尚往来，人与人之间的交情必须建立在相互的基础上。
							</view>
						</view>
						<view class="xxCa-hfRecord">
							<view class="xxYwt-int">
								<text>西山煤矿小王</text>：
								集团领导到机电厂调研契约化管理工作是作秀？
							</view>
							<view class="xxYwt-int">
								<text>西山煤矿小王</text> 回复 <text>西山煤矿小张</text>：
								并不是
							</view>
						</view>
						<view class="xxCa-hfInput">
							<input type="text" value="" placeholder="回复西山煤矿小张" />
						</view>
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
				currentInd: 1,
			}
		},
		methods: {
			onClickItem(i) {
				this.currentInd = i
			},
		}
	}
</script>

<style>

</style>
