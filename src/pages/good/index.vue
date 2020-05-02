<template>
<div class="good">
  <!-- 轮播 -->
  <div class="swiper grayLine">
    <swiper class="swiper-container" indicator-dots="true" indicator-color="rgba(255,255,255,.3)" indicator-active-color="#f2270c" autoplay="true" interval="3000" duration="500" circular="true">
      <block v-for="(item, index) in gallery " :key="index">
        <swiper-item class="swiper-item">
          <image :src="item.img_url" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <button class="share" hover-class="none" open-type="share" value="">分享商品</button>
  </div>
  <!-- 商品参数 -->
  <div v-if="attribute.length!=0" class="attribute grayLine">
    <div class="head">
      商品参数
    </div>
    <div v-for="(item,index) in attribute" :key="index" class="item">
      <div>{{item.name}}</div>
      <div>{{item.value}}</div>
    </div>
  </div>
  <!-- 商品详情 -->
  <div class="detail-content grayLine">
    <p>商品详情</p>
    <div class="detail" v-for="(v,i) in detailList" :key="i">
      <img :src="v.list_pic_url">
    </div>
  </div>


  <!-- 底部按钮 -->
  <div class="bottom-fixed">
    <div class="cart-list" @click="toCart">
      <div class="car">
        <span>
          {{allnumber}}
        </span>
        <img src="/static/images/ic_menu_shoping_nor.png" alt="">
      </div>
    </div>
    <div @click="bug">立即购买</div>
    <div @click="addCart">加入购物车</div>
  </div>
  <!-- 购物车弹框 -->
  <div class="attr-pop" :class="[showpop ? 'fadeup' : 'fadedown']">
    <div class="top">
      <div class="left">
        <img :src="info.primary_pic_url" alt="">
      </div>
      <div class="right">
        <div>
          <p>价格￥{{info.retail_price}}</p>
          <p>请选择数量</p>
        </div>
      </div>
      <div @click="showType" class="close">
        X
      </div>
    </div>
    <div class="b">
      <p>数量</p>
      <div class="count">
        <div @click="reduce" class="cut">-</div>
        <input class="number" disabled="" v-model="number" />
        <div @click="add" class="add">+</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
data() {
  return {
    gallery: [
      {img_url:'http://yanxuan.nosdn.127.net/9460f6b30661548c4a864607bfcdf4ca.jpg'},
      {img_url:'http://yanxuan.nosdn.127.net/acbdb480bcad193fad77ef6c4f52192e.jpg'},
      {img_url:'http://yanxuan.nosdn.127.net/e6feb5f4a0989d212bce068d4907657d.jpg'},
      {img_url:'http://yanxuan.nosdn.127.net/6059ab6e106d97c29d5723c1d6f1a11f.jpg'}
    ],
    attribute: [{
      "value": "法国干红",
      "name": "商品名称"
      }, {
      "value": "1*6*1",
      "name": "商品规格"
      }, {
      "value": "24",
      "name": "商品库存"
      }, {
      "value": "218",
      "name": "商品价格"
      },{
      "value": "199",
      "name": "会员价格"
    }],
    detailList: [
      {'list_pic_url': '/static/images/detail1.jpg'},
      {'list_pic_url': '/static/images/detail2.jpg'},
      {'list_pic_url': '/static/images/detail1.jpg'},
      {'list_pic_url': '/static/images/detail2.jpg'},
      {'list_pic_url': '/static/images/detail1.jpg'},
      {'list_pic_url': '/static/images/detail2.jpg'},
      {'list_pic_url': '/static/images/detail1.jpg'},
      {'list_pic_url': '/static/images/detail2.jpg'}
    ],
    info: {
      "primary_pic_url": "http://yanxuan.nosdn.127.net/bcaf7ee314af7dbfb04612087e563249.jpg",
      "retail_price": 599,
    },
    allnumber: 0,
    showpop: false,
    number: 0
  }
},
methods: {
  // 立即购买-跳转到订单列表
  bug() {
    if (this.showpop) {
      if (this.number == 0) {
        wx.showToast({
          title: "请选择商品数量", //提示的内容,
          duration: 2000, //延迟时间,
          icon: "none",
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: res => { }
        });
        return false;
      }
      wx.navigateTo({
        url: "/pages/order/main"
      });
      this.showpop = false
      // console.log(this.goodsId);
      // console.log(this.openId);

      // const data = await post("/order/submitAction", {
      //   goodsId: this.goodsId,
      //   openId: this.openId,
      //   allPrise: this.allPrise
      // });
      // if (data) {
      //   wx.navigateTo({
      //     url: "/pages/order/main"
      //   });
      // }
    } else {
      this.showpop = true;
    }
  },
  // 加入购物车
  addCart() {
    if (this.showpop) {
      if (this.number == 0) {
        wx.showToast({
          title: "请选择商品数量", //提示的内容,
          duration: 2000, //延迟时间,
          icon: "none",
          mask: true, //显示透明蒙层，防止触摸穿透,
          success: res => { }
        });
        return false;
      }
      // const data = await post("/cart/addCart", {
      //   openId: this.userInfo.openId,
      //   goodsId: this.goodsId,
      //   number: this.number
      // });
      //添加成功后
      // if (data) {
        this.allnumber = this.allnumber + this.number;
        wx.showToast({
          title: "添加购物车成功",
          icon: "success",
          duration: 1500
        });
        this.showpop = false
      // }
    } else {
      this.showpop = true;
    }
  },
  // 跳转到购物车列表
  toCart() {
    wx.switchTab({
      url: "/pages/cart/main"
    });
    this.showpop = false
  },
  // 关闭购物车弹框
  showType() {
    this.showpop = !this.showpop;
  },
  add() {
    this.number = this.number + 1;
  },
  reduce() {
    if (this.number > 1) {
      this.number = this.number - 1;
    } else {
      return false;
    }
  }
}
}
</script>

<style lang="scss">
page {
  background: #f4f4f4;
  height: 100%;
}
.grayLine {
  margin-bottom: 12rpx;
}
// 轮播
.swiper {
width: 750rpx;
height: 450rpx;
position: relative;

.swiper-container {
  width: 100%;
    height: 100%;

  image {
    width: 100%;
    height: 100%;
  }
}

.share {
  position: absolute;
  border-radius: 40rpx 0 0 40rpx;
  width: 160rpx;
  height: 65rpx;
  line-height: 65rpx;
  text-align: center;
  right: 0;
  top: 50rpx;
  background: #e0a354;
  color: #fff;
  font-size: 24rpx;
}
}
// 商品参数
.attribute {
padding: 20rpx 30rpx;
background: #fff;

.head {
  font-size: 32rpx;
}

.item {
  display: flex;
  align-items: center;
  background: #f7f7f7;
  padding: 20rpx 0;
  margin: 20rpx;

  div:nth-child(1) {
    width: 134rpx;
    font-size: 25rpx;
    color: #999;
    padding-left: 12rpx;
  }

  div:nth-child(2) {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
}
.detail-content {
  background: #fff;
  p {
    padding: 12rpx 0;
    text-align: center;
  }
}
.detail {
  padding-bottom: 120rpx;
  img {
    width: 100%;
    height: 534rpx;
  }
}
// 底部按钮
.bottom-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 750rpx;
  height: 100rpx;
  display: flex;
  background: #fff;
  z-index: 10;
  .cart-list {
    border: 1rpx solid #f4f4f4;
  }
  div:nth-child(1) {
    height: 100rpx;
    width: 162rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .car {
      position: relative;
      height: 60rpx;
      width: 60rpx;

      span {
        height: 28rpx;
        width: 28rpx;
        z-index: 10;
        position: absolute;
        top: 0;
        right: 0;
        background: #f2270c;
        text-align: center;
        font-size: 18rpx;
        color: #fff;
        line-height: 28rpx;
        border-radius: 50%;
      }

      img {
        display: block;
        height: 44rpx;
        width: 44rpx;
        position: absolute;
        top: 10rpx;
        left: 0;
      }
    }
}

div:nth-child(2) {
  height: 100rpx;
  line-height: 96rpx;
  flex: 1;
  text-align: center;
  color: #333;
  border-top: 1rpx solid #f4f4f4;
  border-bottom: 1rpx solid #f4f4f4;
}

div:nth-child(3) {
  border: 1rpx solid #f2270c;
  background: #f2270c;
  float: left;
  height: 100rpx;
  line-height: 96rpx;
  flex: 1;
  text-align: center;
  color: #fff;
}
}
.attr-pop {
  position: fixed;
  width: 100%;
  height: 470rpx;
  bottom: -500rpx;
  transition: all 400ms ease;
  box-sizing: border-box;
  padding: 16rpx;
  border: 1rpx solid #ccc;
  background: #fff;

  .top {
    display: flex;
    margin-bottom: 20rpx;
    position: relative;

    .close {
      position: absolute;
      right: 0;
      top: 0px;
      font-size: 30rpx;
      color: #999;
    }

    .left {
      height: 177rpx;
      width: 177rpx;
      margin-right: 30rpx;

      img {
        float: left;
        height: 177rpx;
        width: 177rpx;
      }
    }

    .right {
      flex: 1;
      display: flex;
      align-items: flex-end;

      p {
        width: 100%;
        line-height: 45rpx;
      }

      p:nth-child(1) {
        color: #f2270c;
      }
    }
  }

  .b {
    .count {
      width: 240rpx;
      height: 71rpx;
      line-height: 71rpx;
      display: flex;
      border: 1rpx solid #ccc;
      margin-top: 20rpx;
      box-sizing: border-box;
      div {
        flex: 1;
        text-align: center;
      }

      input {
        flex: 1;
        height: 100%;
        text-align: center;
        border-left: 1rpx solid #ccc;
        border-right: 1rpx solid #ccc;
      }
    }
  }
}

.fadeup {
  transform: translateY(-500rpx); // transition: all 0.4s ease;
}
</style>
