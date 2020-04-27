<template>
  <div class="my">
    <div class="myinfo">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:avator" alt="">
      <div @click="toLogin">
        <p class="whiteFont" v-if="userInfo.nickName">{{userInfo.nickName}}</p>
        <button class="whiteFont" v-if="!userInfo.nickName" open-type="getUserInfo" @getuserinfo="handleGetUserInfo" >微信登录</button>
        <p class="whiteFont" v-else>微信用户</p>
      </div>
    </div>
    <div class="iconlist">
      <div @click="goTo(item.url)" v-for="(item, index) in listData" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   get,
  //   toLogin,
  //   login
  // } from "../../utils";
  export default {
    created() {},
    mounted() {},
    data() {
      return {
        avator: "http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png",
        allcheck: false,
        listData: [],
        Listids: [],
        userInfo: {},
        listData: [{
            title: "我的订单",
            icon: "/static/images/collect.png",
            url: ""
          },
          {
            title: "优惠券",
            icon: "/static/images/collect.png",
            url: ""
          },
          {
            title: "我的足迹",
           icon: "/static/images/collect.png",
            url: ""
          },
          {
            title: "我的收藏",
            icon: "/static/images/collect.png",
            url: ""
          },
          {
            title: "地址管理",
            icon: "/static/images/collect.png",
            url: "/pages/address/main"
          },
          {
            title: "联系客服",
            icon: "/static/images/collect.png",
            url: ""
          },
          {
            title: "帮助中心",
            icon: "/static/images/collect.png",
            url: ""
          },
          {
            title: "意见反馈",
            icon: "/static/images/collect.png",
            url: ""
          }
        ]
      };
    },
    components: {},
    onLoad () {
      wx.getUserInfo({
        success: res => {
          console.log(res)
          this.userInfo = res.userInfo
        }
      })
    },
    methods: {
      goTo(url) {
        if (this.userInfo) {
          wx.navigateTo({
            url: url
          });
        }
      },
      handleGetUserInfo (res) {
        console.log(res)
        if (res.mp.detail.userInfo) {
          this.userInfo = res.mp.detail.userInfo
        }
      }
    },
    computed: {}
  };

</script>
<style lang='scss'>
page {
  background: #f4f4f4!important;
  height: 100%;
}
.my {
  .myinfo {
    width: 100%;
    height: 280rpx;
    display: flex;
    align-items: center;
    background: #333;
    color: #fff;
    padding: 0 30rpx;
    box-sizing: border-box;
    img {
      height: 148rpx;
      width: 148rpx;
      border-radius: 50%
    }
    div {
      margin-left: 30rpx;
      button {
        border: none;
        padding:0;
        background-color: transparent;
        font-size: 30rpx;
        margin-bottom: 10rpx
      }
      p:nth-child(2) {
        font-size: 28rpx;
      }
    }
  }
  .whiteFont {
    color: #fff;
  }
  .iconlist {
    display: flex;
    align-items: center;
    background: #fff;
    flex-wrap: wrap;
    div {
      width: 33.33%;
      padding: 50rpx 0;
      text-align: center;
      border-right: 1rpx solid rgba(0, 0, 0, .15);
      border-bottom: 1rpx solid rgba(0, 0, 0, .15);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 50rpx;
        height: 50rpx;
        margin-bottom: 20rpx;
      }

    }
    div:nth-child(3n+3) {
      border-right: none;
    }
    div:nth-last-child(1) {
      border-bottom: none;
    }
    div:nth-last-child(2) {
      border-bottom: none;
    }
  }
}
</style>
