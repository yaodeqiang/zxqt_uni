<template>
	<view class="loginView">
		<view class="loginHeader">
			完善信息<text style="width: 140rpx;"></text>
		</view>
		<view class="loginHedP">
			填写正确的个人信息
		</view>
		<form @submit="" @reset="">
			<view class="loginBox">
				<view class="loginInput flexBox between" @tap="chooseImage">
					<view class="logInp-tit">头像</view>
					<view class="logInp-tit textRed" :style="[{display:tempFilePaths==''?'block':'none'}]">上传头像</view>
					<view class="logInp-tx" :class="tempFilePaths==''?'':'cur'"><image class="" :src="tempFilePaths" ></image></view>
				</view>
				<view class="loginInput">
					<view class="logInp-tit fl">用户名</view>
					<input class="fr" type="text" placeholder="请输入姓名" placeholder-style="color:#999;" />
					<view class="clear"></view>
				</view>
				<view class="loginInput">
					<view class="logInp-tit fl">设置密码</view>
					<input class="fr" type="password" placeholder="6-16位数字字母及字符组成" placeholder-style="color:#999;" />
					<view class="clear"></view>
				</view>
				<view class="loginInput">
					<view class="logInp-tit fl">确认密码</view>
					<input class="fr" type="password" placeholder="6-16位数字字母及字符组成" placeholder-style="color:#999;" />
					<view class="clear"></view>
				</view>
				
			</view>
			<button class="login-goBtn" form-type="submit">完 成</button>
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
				tempFilePaths: '', //保存图片路径集合
				sourceTypeIndex: 2, //添加方式限制
				sizeTypeIndex: 2, //图片尺寸限制
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
		},
		
	}
</script>

<style>

</style>
