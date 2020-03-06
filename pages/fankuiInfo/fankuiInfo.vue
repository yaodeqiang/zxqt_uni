<template>
	<view class="content">
		<view class="cu-card dynamic no-card">
			<view class="cu-item shadow">
				<view class="quesXq-title">集团领导到机电厂调研契约化管理工作室作秀？</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
						<view class="content flex-sub">
							<view>西山煤矿小张</view>
							<view class="text-gray text-sm flex justify-between">
								西山煤矿事业部 &nbsp;&nbsp;2020年1月10日
							</view>
						</view>
						<uni-tag text="已解决" type="primary" size="small" circle="true" inverted="true"></uni-tag>
					</view>
				</view>
				<view class="text-content quesXq-content" style="max-height: max-content;">
					<text>集团领导到机电厂调研契约化管理工作室作秀？集团领导到机电厂调研契约化管理工作室作秀？集团领导到机电厂调研契约化管理工作室作秀？</text>
					<text>集团领导到机电厂调研契约化管理工作室作秀？集团领导到机电厂调研契约化管理工作室作秀？集团领导到机电厂调研契约化管理工作室作秀？</text>
				</view>
				<view class="grid flex-sub padding-lr col-3 grid-square" >
					<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
					</view>
					<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
					</view>
					<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
					</view>
				</view>
				<view class="indTjCard-gf uni-flex" >
					<view class="indTjGf-tit">官方</view>
					<view class="indTjGf-con ellipsis-2">
						集团公司领导到机电厂调研契约化管理工作是审核约束化管理。
					</view>
				</view>
				<view class="indTjCard-cz flexBox around quesXq-cz">
					<view class="indTj-zan flexBox jusCenter quesXq-zan" :class="checkList[0]?'cur':''" @click="favClick(0)">
						<uni-icons :type="checkList[0]?'hand-thumbsup-filled':'hand-thumbsup'"></uni-icons>
						<text v-if="checkList[0]">已点赞</text>
						<text v-else>点赞</text>
					</view>
					<view class="indTj-zan flexBox jusCenter quesXq-zan quesXq-sc" :class="checkList[1]?'cur':''" @click="favClick(1)">
						<uni-icons :type="checkList[1]?'star-filled':'star'"></uni-icons>
						<text v-if="checkList[1]">已收藏</text>
						<text v-else>收藏</text>
					</view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
						<view class="content flex-sub">
							<view>西山煤矿小张</view>
							<view class="text-gray text-sm flex justify-between">
								2020年01月10日 09:34
							</view>							
						</view>
					</view>
					<view class="yjInfo-main">
						<view class="yjInfo-hf">期待2020更好的发展。</view>
						<view class="yjInfo-hf-me">
							<text>西山煤矿小王</text>：一定会的，谢谢！
						</view>
					</view>
				</view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
						<view class="content flex-sub">
							<view>西山煤矿小张</view>
							<view class="text-gray text-sm flex justify-between">
								2020年01月10日 09:34
							</view>							
						</view>
					</view>
					<view class="yjInfo-main">
						<view class="yjInfo-hf">期待2020更好的发展。</view>
						<view class="yjInfo-hf-me">
							<text>西山煤矿小王</text>：一定会的，谢谢！一定会的，谢谢！一定会的，谢谢！一定会的，谢谢！一定会的，谢谢！一定会的，谢谢！
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="yjxqZhan"></view>
		<view class="indSearch flexBox between yjxqCaozuo">
			<uni-search-bar placeholder="写评论..." bgColor="#F2F0F0" @confirm="search" cancelButton="none" class="indSearchInput yjxqSearch"/>
			<view class="indSea-icon flexBox">
				<view class="yjxqCz-btn yjxqCz-sc" :class="checkList[2]?'cur':''" @click="favClick(2)">
					<uni-icons :type="checkList[2]?'star-filled':'star'"></uni-icons>
					<text v-if="checkList[2]">取消</text>
					<text v-else>收藏</text>
				</view>
				<view class="yjxqCz-btn" :class="checkList[3]?'cur':''" @click="favClick(3)">
					<uni-icons :type="checkList[3]?'hand-thumbsup-filled':'hand-thumbsup'"></uni-icons>
					<text v-if="checkList[3]">取消</text>
					<text v-else>点赞</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkList: [false,false,false,false]
			}
		},
		methods: {
			favClick(i) {
				this.checkList[i] = !this.checkList[i]
				this.$forceUpdate()
			}
		},
	}
</script>

<style>
	
</style>
