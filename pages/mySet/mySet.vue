<template>
	<view class="content">
		<uni-list class="usCenList">
			<uni-list-item title="头像" class="sfzh" @tap="chooseImage">
				<view class="usCen-tx"><image mode="" :src="tempFilePaths"></image></view>
			</uni-list-item>
			<uni-list-item title="用户名" note="" rightText="菲涵"></uni-list-item>
			<uni-list-item title="姓名" note="" rightText="孟锦"></uni-list-item>
			<uni-list-item class="sfzh" title="身份证号" rightText="141122******0082"></uni-list-item>
			<picker @change="bindPickerChange" :value="index" :range="array" range-key="name"><uni-list-item title="工作单位" :rightText="array[index].name"></uni-list-item></picker>
			<uni-list-item title="修改密码"></uni-list-item>
		</uni-list>
		<view class="twSubmitZhan"></view>
		<view class="twSubCz">
			<button class="twSubmit" form-type="submit" @click="goLogin">退出登录</button>
		</view>
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
				tempFilePaths: '../../static/logo.png', //保存图片路径集合
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
				index: 0,
				array: [{name:'西山煤矿总部'},{name: '西山煤矿总部2'}, {name:'西山煤矿总部3'}],
			}
		},
		methods: {
			//选择图片
			chooseImage: async function() {
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					// #ifdef MP-WEIXIN
					sizeType: sizeType[this.sizeTypeIndex],
					// #endif
					count: 1,
					success: (res) => {
						this.tempFilePaths = res.tempFilePaths[0];
					}
				})
			},
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			goLogin () {
				uni.navigateTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style>

</style>
