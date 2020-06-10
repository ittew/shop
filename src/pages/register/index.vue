<template>
  <div class="page">
    <div class="login">
      <div class="lognIcon">
        <img src="/static/images/login.jpg" />
        <p>欢迎来到广电文商</p>
      </div>
      <div class="contain">
        <div class="input inputPh">
          <input class="input1 pdl" placeholder-class="phcolor" type="number" placeholder="请输入11位移动手机号码" maxlength="11" focus="true"
            v-model="phoneNumber" @input="checkLoginActive" />
        </div>
        <div class="smsBox">
          <div class="inpl">
            <input class="input2 pdl" placeholder-class="phcolor" type="number" placeholder="请输入短信验证码" maxlength="6"
              v-model="code" @input="checkLoginActive" />
          </div>
          <button class="get-code" size="mini"  @click="getCode" :disabled="codeBtnDisabled" style="color: #00a4ff; background-color: #fff;font-size:30rpx;">{{getCodeValue}}</button>
        </div>
      </div>
      <!-- 短信登录 -->
      <div class="btnBox loginBtn">
        <button size="default" :disabled="loginDisabled" hover-class="other-button-hover" @tap="register">注册</button>
      </div>
    </div>
    <div class="footer">
      <img class="footerLog" src="/static/images/loginPic.png">
    </div>
  </div>
</template>

<script>
import { request } from "../../utils"
export default {
  data () {
    return {
      phoneNumber: '', // 手机号码
      code: '', // 验证码
      getCodeValue: '获取验证码', // 验证码按钮文字
      restTime: 59, // 倒计时数值
      codeBtnDisabled: false, // 验证码是否可点击
      loginDisabled: true, // 登录按钮是否可点击
    }
  },
  methods: {
    // 获取验证码
    async getCode () {
      if (this.phoneNumber && /^1[\d]{10}/.test(this.phoneNumber)) {
        let data = {
          sendPhone: this.phoneNumber
        }
        let url = '/sendPhone.htm'
        let body = await request(url, 'get', data)
        console.log(body)
        if (body.success) {
          this.codeBtnDisabled = true
          this.cutDown()
          console.log(body, 'content::')
        } else {
          wx.showToast({
            title: body.message,
            icon: 'none',
            duration: 2000
          })
        }
      } else {
        wx.showToast({
          title: '手机号码格式不正确！',
          icon: 'none',
          duration: 2000
        })
      }
    },
    // 倒计时
    cutDown (){
      let timer = setInterval(() => {
        this.getCodeValue = this.restTime + 's'
        this.restTime--
        if (this.restTime < 0) {
          clearInterval(timer)
          this.codeBtnDisabled = false
          this.getCodeValue = '重新获取'
          this.restTime = 59
        }
      }, 1000)
    },
    // 注册
    async register () {
      if (!this.loginDisabled) {
        let wxCode = wx.getStorageSync('wxCode')
        let data = {
          telPhone: this.phoneNumber,
          wxCode, // code码
          // code: this.code
          code: '111111'
        }
        let url = '/register.htm'
        let body = await request(url, 'get', data)
        console.log(body)
        if (body.success && body.message == '成功') {
          wx.showToast({
            title: '注册成功',
            icon: 'none',
            duration: 1000
          })
          setTimeout(() => {
            // this.code = this.phoneNumber = ''
            wx.redirectTo({url: '/pages/login/main'})
          }, 1000)
        } else {
          wx.showToast({
            title: body.message,
            icon: 'none',
            duration: 2000
          })
        }
      }
    },
    /**
     *  登录是否高亮
    */
    checkLoginActive () {
      if(this.phoneNumber && /^1[\d]{10}/.test(this.phoneNumber) && this.code && /^[\d]{6}/.test(this.code)){
        this.loginDisabled = false
      } else {
        this.loginDisabled = true
      }
    }
  }
}
</script>

<style>
page {
  background: #ffffff;
  height: 100%;
}
.page {
  width: 100%;
  height: 100%;
  background: #fff;
  padding-top: 120rpx;
  box-sizing: border-box;
}
input {
  color: #000;
  font-size: 32rpx;
}
.phcolor {
  color: #c7cad4;
}
.lognIcon {
  display: flex;
  align-items: center;
  padding-left: 50rpx;
  margin-bottom: 30rpx;
  height: 44rpx;
}
.lognIcon p {
  font-size: 36rpx;
  color: #333333;
}
.lognIcon img {
  width: 44rpx;
  height: 44rpx;
  margin-right: 20rpx;
}
.contain {
  padding: 10rpx 57rpx 0rpx 57rpx;
}
.login {
  width: 100%;
  /* height: 640rpx; */
  box-sizing: border-box;
  font-size: 14rpx;
  background: #fff;
}
.input {
  height: 130rpx;
  display: flex;
  align-items: flex-end;
}
.input1 {
  width: 500rpx;
}

.inputPh {
  box-sizing: border-box;
  padding-bottom: 40rpx;
  border-bottom: 1rpx solid #e3e3e3;
}
.smsBox {
  position: relative;
}
.get-code {
  width: 170rpx;
  position: absolute;
  top: 46rpx;
  right: 10rpx;
  z-index: 99;
  font-size: 30rpx;
  text-align: center;
  color: #00a4ff;
  padding: 0rpx !important;
  border: 1rpx solid #fff;
  background-color: #fff;
}
.get-code::after {
  border: none;
}

.pdl {
  padding-left: 20rpx;
  font-size: 32rpx;
}
.input2 {
    padding-left: 16rpx;
    width: 350rpx;
}
.inpl {
  flex: 1;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding-bottom: 40rpx;
  padding-top: 55rpx;
  border-bottom: 1rpx solid #e3e3e3;
}
.btnBox {
  margin: 60rpx auto;
  width: 690rpx;
  box-sizing: border-box;
}
.loginBtn {
  background: url('https://app.10086.cn/leadeon-wx-rs/images/login/loginBackage.png') no-repeat;
  background-size: 100% 100%;
}
.loginBtn button {
  background: #00a4ff;
  width: 650rpx;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 32rpx;
  color: #fff;
  margin: 0 auto;
  /* box-shadow: 0rpx 0rpx 80rpx #afe2ff; */
}
.loginBtn button::after {
  border: 0;
  overflow: hidden;
}
.flex {
  display: flex;
}
.footer {
  width: 100%;
  height: 222rpx;
  position: fixed;
  bottom: 0;
  left: 0;
}
.footerLog {
  width: 100%;
  height: 100%;
}
.other-button-hover {
  background: #00a4ff !important;
  color: #fff !important;
}
.wxLoginBox {
  margin-top: -20rpx;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArIAAACSCAYAAAC5SimfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEzMjZGMDYyRDY5NDExRTg4MEJFOTk0N0U2MEE3MTQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEzMjZGMDYzRDY5NDExRTg4MEJFOTk0N0U2MEE3MTQ0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTMyNkYwNjBENjk0MTFFODgwQkU5OTQ3RTYwQTcxNDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTMyNkYwNjFENjk0MTFFODgwQkU5OTQ3RTYwQTcxNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Tm4UUAAAVWUlEQVR42uzdW24j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') no-repeat;
  background-size: 100% 100%;
}
.wxPhone {
  background: #24c322;
  width: 650rpx;
  height: 80rpx;
  line-height: 80rpx;
  font-size: 32rpx;
  color: #fff;
  margin: 0 auto;
}
</style>
