<template>
	<view class="content">
		<view class="cu-card dynamic no-card">
			<view class="cu-item shadow">
				<view class="quesXq-title">集团领导到机电厂调研契约化管理工作室作秀？<!-- {{banner.title}} --></view>
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(../../static/logo.png);"></view>
						<view class="content flex-sub">
							<view>西山煤矿小张<!-- {{banner.author_name}} --></view>
							<view class="text-gray text-sm flex justify-between">
								西山煤矿事业部 &nbsp;&nbsp;2020年1月10日<!-- {{banner.published_at}} -->
							</view>
						</view>
						<uni-tag text="已解决" type="primary" size="small" circle="true" inverted="true"></uni-tag>
					</view>
				</view>
				<view class="text-content quesXq-content" style="max-height: max-content;">
					<text>集团领导到机电厂调研契约化管理工作室作秀？集团领导到机电厂调研契约化管理工作室作秀？集团领导到机电厂调研契约化管理工作室作秀？</text>
					<text>集团领导到机电厂调研契约化管理工作室作秀？集团领导到机电厂调研契约化管理工作室作秀？集团领导到机电厂调研契约化管理工作室作秀？</text>
					<!-- <rich-text :nodes="htmlNodes"></rich-text> -->
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
			</view>
		</view>
	</view>
</template>

<script>
	const DETAIL_PAGE_PATH = '/pages/template/list2detail-detail/list2detail-detail';
	import htmlParser from '@/common/html-parser'
	export default {
		data() {
			return {
				title: '',
				banner: {},
				htmlNodes: [],
				checkList: [false,false,false,false]
			}
		},
		onLoad(event) {
			// TODO 后面把参数名替换成 payload
			const payload = event.detailDate || event.payload;
			// 目前在某些平台参数会被主动 decode，暂时这样处理。
			try {
				this.banner = JSON.parse(decodeURIComponent(payload));
			} catch (error) {
				this.banner = JSON.parse(payload);
			}
			uni.setNavigationBarTitle({
				title: this.banner.title
			});
			this.getDetail();
		},
		methods: {
			favClick(i) {
				this.checkList[i] = !this.checkList[i]
				this.$forceUpdate()
			},
			getDetail() {
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + this.banner.post_id,
					success: (data) => {
						if (data.statusCode == 200) {
							var htmlString = data.data.content.replace(/\\/g, "").replace(/<img/g, "<img style=\"display:none;\"");
							this.htmlNodes = htmlParser(htmlString);
						}
					},
					fail: () => {
						console.log('fail');
					}
				});
			}
		},
	}
</script>

<style>
	
</style>
