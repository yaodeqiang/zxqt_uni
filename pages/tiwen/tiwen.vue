<template>
	<view class="tiwenBox">
		<form @submit="" @reset="">
			<view class="twCard">
				<view class="twCa-tit fl">标题：</view>
				<view class="twCa-con fl">
					<input type="text" value="" placeholder="关于西山煤矿" />
				</view>
				<view class="clear"></view>
			</view>
			<view class="twCard">
				<view class="twCa-tit fl">内容：</view>
				<view class="twCa-con fl">
					<textarea placeholder="请输入内容" auto-height />
				</view>
				<view class="clear"></view>
			</view>
			<view class="twCard">
				<view class="twCa-con clear" style="width: 100%;">
					<block v-for="(image,index) in imageList" :key="index">
						<view class="twPicBox fl">
							<image :src="image" :data-src="image" @tap="previewImage"></image>
							<view class='del-btn' :data-index="index" @tap='deleteImage'>x</view>
						</view>
					</block>
					<label class="twPicBox fl" v-if="imageList.length < imageLength" @tap="chooseImage"><image src="../../static/icon_addFile.png" mode=""></image></label>
				</view>
			</view>
			<view class="twCard">
				<picker @change="bindPickerChange" :value="indexJsr" :range="array" range-key="name">
					<view class="twCa-tit fl">选择接收人</view>
					<view class="twCa-tit text333 fl">{{array[indexJsr].name}}</view>
					<uni-icons class="twCa-icons fr" type="plus"></uni-icons>
					<view class="clear"></view>
				</picker>
			</view>
			<view class="twSubmitZhan"></view>
			<view class="twSubCz">
				<button class="twSubmit" form-type="submit">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	var sourceType = [
		['camera'], //拍照
		['album'], //相册
		['camera', 'album'] //拍照或相册
	]
	var sizeType = [
		['compressed'], //压缩
		['original'], //原图
		['compressed', 'original'] //压缩或原图
	]
	export default {
		data() {
			return {
				imageList: [], //保存图片路径集合
				imageLength: 9, //限制图片张数
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				indexJsr: 0,
				array: [{name:'张某某'},{name: '王某某'}, {name:'刘某某'}],
			}
		},
		methods: {
			chooseImage: async function() {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// #endif
					count: this.imageLength - this.imageList.length,
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
					}
				})
			},
			//预览图片
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			//删除图片
			deleteImage: function(e) {
				console.log("index"+e.target.dataset.index);
				var index = e.target.dataset.index;
				var that = this;
				var images = that.imageList;
				images.splice(index, 1);
				that.imageList = images;
			},
			bindPickerChange: function(e) {
				this.indexJsr = e.detail.value
			},
		}
	}
</script>
<style>
	
</style>
