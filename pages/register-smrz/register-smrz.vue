<template>
	<view class="loginView">
		<view class="loginHeader">
			实名认证<text style="width: 140rpx;"></text>
		</view>
		<view class="loginHedP">
			填写正确的个人信息
		</view>
		
		<form @submit="" @reset="">
			<view class="loginBox">
				<view class="loginInput">
					<view class="logInp-tit fl">姓名</view>
					<input class="fr" type="text" placeholder="请输入姓名" placeholder-style="color:#999;" />
					<view class="clear"></view>
				</view>
				<view class="loginInput">
					<view class="logInp-tit fl">身份证号码</view>
					<input class="fr" type="text" placeholder="请输如身份证号码" placeholder-style="color:#999;" />
					<view class="clear"></view>
				</view>
				<view class="loginInput">
					<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
						<view class="logInp-tit fl">工作单位</view>
						<view class="logInp-sel flexBox fr">
							<text>{{array[index].name}}</text>
							<uni-icons type="arrowright"></uni-icons>
						</view>					
						<view class="clear"></view>
					</picker>
				</view>
			</view>
			<button class="login-goBtn" form-type="submit" @click="goNext">下一步</button>
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				array: [{name:'西山煤矿'},{name: '西山煤矿2'}, {name:'西山煤矿3'}],
			}
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.detail.value
			},
			goNext() {
				uni.navigateTo({
					url: '../register-wsxx/register-wsxx'
				});
			}
		}
	}
</script>

<style>

</style>
