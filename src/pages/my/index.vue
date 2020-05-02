<template>
  <div class="my">
    <div class="myinfo">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:avator" alt="">
      <div @click="toLogin">
        <p class="whiteFont" v-if="userInfo.nickName">{{userInfo.nickName}}</p>
        <button class="whiteFont loginBtn" v-if="!userInfo.nickName" open-type="getUserInfo" @getuserinfo="handleGetUserInfo" >微信登录</button>
        <p class="whiteFont" v-else>微信用户</p>
      </div>
    </div>
    <div class="iconlist">
      <div @click="goTo(item.url)" v-for="(item, index) in listData" :key="index">
        <!-- <img :src="item.icon" alt=""> -->
        <span :class="item.icon" :style="{'color': item.color}" class="itemIcon"></span>
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
        avator: "/static/images/user.png",
        allcheck: false,
        listData: [],
        Listids: [],
        userInfo: {},
        listData: [{
            title: "我的订单",
            color: '#FFC0CB',
            icon: "icon-dingdan",
            url: "/pages/orderList/main"
          },
          {
            title: "优惠券",
            color: '#f2270c',
            icon: "icon-weibiaoti2fuzhi02",
            url: "/pages/couponList/main"
          },
          {
            title: "我的足迹",
            color: '#BA55D3',
           icon: "icon-wodezuji",
            url: ""
          },
          {
            title: "我的收藏",
            color: '#FFA500',
            icon: "icon-shoucang",
            url: ""
          },
          {
            title: "地址管理",
            color: '#90EE90',
            icon: "icon-dizhi",
            url: "/pages/address/main"
          },
          {
            title: "联系客服",
            color: '#AFEEEE',
            icon: "icon-lianxikefu",
            url: ""
          },
          {
            title: "帮助中心",
            color: '#87CEFA',
            icon: "icon-bangzhuzhongxin",
            url: ""
          },
          {
            title: "意见反馈",
            color: '#7B68EE',
            icon: "icon-Opinion",
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
    background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588412689564&di=36f0468e071ce07990dad9f851e80bed&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Fback_pic%2F03%2F89%2F88%2F1157da885857ab1.jpg') no-repeat;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
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

  .loginBtn::after {
    border: none;
  }
  .iconlist {
    display: flex;
    align-items: center;
    background: #fff;
    flex-wrap: wrap;
    div {
      width: 33.33%;
      padding: 20rpx 0;
      text-align: center;
      border-right: 1rpx solid rgba(0, 0, 0, .15);
      border-bottom: 1rpx solid rgba(0, 0, 0, .15);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      .itemIcon {
        font-size: 54rpx;
        margin-bottom: 2rpx;
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
