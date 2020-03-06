<template>
	<view class="content">
		<view class="zz" :class="hotOpen?'cur':''"></view>
		<uni-nav-bar class="indNav" left-icon="arrowleft" @clickLeft="back">
			<view class="indNav-tab flexBox jusCenter">
				<view class="indNavTabItem" @click="goIndex">
					推荐
					<view class="indNavLine"></view>
				</view>
				<view class="indNavTabItem flexBox cur" @click="clickHot('1')">
					热榜
					<text class="lg text-gray cuIcon-triangledownfill" ></text>
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
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value, key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<view class="indHotLi-image">
						<uni-badge class="indHotLi-bag" text="1" type="error"></uni-badge>
						<image class="uni-media-list-logo" :src="value.cover"></image>
					</view>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top indHotLi-ht uni-ellipsis">#2019仅剩9天#</view>
						<view class="uni-media-list-text-top uni-ellipsis">{{ value.title }}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">
							<text>11.7万讨论</text>
							<text>112万阅读</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-load-more :status="status"  :icon-size="16" :content-text="contentText" />
		
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	var dateUtils = require('../../common/util.js').dateUtils;
	
	export default {
		data() {
			return {
				currentInd:0,
				hotOpen:false,
				listData: [],
				last_id: '',
				reload: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			};
		},
		onLoad() {
			this.getList();
		},
		onPullDownRefresh() {
			this.reload = true;
			this.last_id = '';
			this.getList();
		},
		onReachBottom() {
			this.status = 'more';
			this.getList();
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			clickHot(i) {
				this.currentInd = i;
				this.hotOpen = !this.hotOpen;
			},
			goIndex() {
				uni.navigateTo({
					url: '../index/index',
				});
			},
			goHot(){
				uni.navigateTo({
					url: '../index-hot/index-hot',
				});
			},
			goUserCenter() {
				uni.navigateTo({
					url: '../userCenter/userCenter'
				});
			},
			getList() {
				var data = {
					column: 'id,post_id,title,author_name,cover,published_at' //需要的字段名
				};
				if (this.last_id) {
					//说明已有数据，目前处于上拉加载
					this.status = 'loading';
					data.minId = this.last_id;
					data.time = new Date().getTime() + '';
					data.pageSize = 10;
				}
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					data: data,
					success: data => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							this.last_id = list[list.length - 1].id;
							this.reload = false;
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				});
			},
			goDetail: function(e) {
				// 				if (!/前|刚刚/.test(e.published_at)) {
				// 					e.published_at = dateUtils.format(e.published_at);
				// 				}
				let detail = {
					author_name: e.author_name,
					cover: e.cover,
					id: e.id,
					post_id: e.post_id,
					published_at: e.published_at,
					title: e.title
				};
				uni.navigateTo({
					url: '../questionInfo/questionInfo?detailDate=' + encodeURIComponent(JSON.stringify(detail))
				});
			},
			setTime: function(items) {
				var newItems = [];
				items.forEach(e => {
					newItems.push({
						author_name: e.author_name,
						cover: e.cover,
						id: e.id,
						post_id: e.post_id,
						published_at: dateUtils.format(e.published_at),
						title: e.title
					});
				});
				return newItems;
			}
		}
	}
</script>

<style>
	
</style>
