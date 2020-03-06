<template>
	<view class="loginView">
		<view class="loginHeader">
			登录<text></text>
		</view>
		<view class="loginHedP">
			还没有账号，立即<navigator url="../register/register" hover-class="none">注册</navigator>
		</view>
		<form @submit="" @reset="">
			<view class="loginBox">
				<view class="loginInput">
					<input type="text" placeholder="请输入手机号" placeholder-style="color:#999;" />
				</view>
				<view class="loginInput clear">
					<input class="fl" type="text" placeholder="请输入验证码" placeholder-style="color:#999;" />
					<button class="yanzhengma fr" type="primary" hover-class="none" @click="getCode" :disabled="disabled">{{codeTextShow == 0 ? codeText.getCode : (codeTextShow == 1 ?count + codeText.countDown:codeText.getAgain)}}</button>
				</view>
				<view class="clear"></view>
			</view>
			<button class="login-goBtn" form-type="submit" @click="goNext">登录</button>
		</form>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				codeText :{
					getCode:'获取验证码',
					countDown:'s重新获取',
					getAgain:'重新获取'
				},
				codeTextShow:0,
				count:59,
				disabled:false,
			}
		},
		methods: {
			getCode() {
				this.codeTextShow = 1;
				this.disabled = true;
				// uni.request({
				// 	url: uni.getStorageSync('host') + 'sms/send',
				// 	method:'POST',
				// 	data:{},
				// 	header:{
				// 		'Content-type':'application/x-www-form-urlencoded'
				// 	},
				// 	success: res => {
				// 		console.log(res);
				// 	}
				// })
				var interval = setInterval(()=>{
					--this.count
				},1000)
				setTimeout(()=>{
					clearInterval(interval)
					this.count = 59
					this.codeTextShow = 2
					this.disabled = false
				},60000)
			}
		}
	}
</script>

<style>

</style>
