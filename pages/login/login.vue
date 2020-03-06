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
				<view class="loginInput">
					<input type="password" placeholder="请输入密码" placeholder-style="color:#999;" />
				</view>
				<navigator class="login-forget fr" hover-class="none">忘记密码？</navigator>
				<view class="clear"></view>
			</view>
			<button class="login-goBtn" form-type="submit">登 录</button>
			<navigator class="login-yzm" hover-class="none" url="../login-yzm/login-yzm">使用验证码登录</navigator>
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
