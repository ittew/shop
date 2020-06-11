<template>
<div class="good">
  <!-- 轮播 -->
  <div class="swiper grayLine">
    <swiper class="swiper-container" indicator-dots="true" indicator-color="rgba(255,255,255,.3)" indicator-active-color="#f2270c" autoplay="true" interval="3000" duration="500" circular="true">
      <block v-for="(item, index) in gallery " :key="index">
        <swiper-item class="swiper-item">
          <image :src="item" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <button class="share" hover-class="none" open-type="share" value="">分享商品</button>
  </div>
  <!-- 要选择的商品规格 -->
  <div class="standard grayLine">
    <div v-for="(v,i) in goods_specs" :key="i" >
      <div class="item" v-if="v.spec.properties.length>0">
        <span >{{v.spec.name}}：</span>
        <div class="desc">
          <div :class="{active:val.active}" v-for="(val,item) in v.spec.properties" :key="item" @tap="selectDesc(i,item)">{{val.value}}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 商品参数 -->
  <div v-if="attribute.length!=0" class="attribute grayLine">
    <div class="head">
      商品参数
    </div>
    <wxParse :content="article" @preview="preview" @navigate="navigate" />
    <!-- <div v-for="(item,index) in attribute" :key="index" class="item">
      <div>{{item.name}}</div>
      <div>{{item.value}}</div>
    </div> -->
  </div>
  <!-- 商家店铺 -->
  <div class="component_shop">
    <div class="shop_head" @click="goShopd">
      <img class="shop_img" src="/static/images/shopd.png" alt="">
      <div class="head_avatar">
        <p class="head_t">戴尔自营专卖店</p>
        <p class="head_f">商品数量：<span>4</span>件商品</p>
        <p class="head_f">店铺收藏：<span>0</span>人收藏</p>
      </div>
      <div class="go_shop">进入 ></div>
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
import { request, getQuery } from "../../utils";
import wxParse from 'mpvue-wxparse'
export default {
components: {
  wxParse
},
data() {
  return {
    article: '<span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">货号:&nbsp;51151847 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">风格:&nbsp;甜美 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">材质成分:&nbsp;聚酯纤维100%</span><br /> <span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">组合形式:&nbsp;单件 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">裙长:&nbsp;短裙 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">款式:&nbsp;其他/other</span><br /> <span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">袖长:&nbsp;五分袖 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">领型:&nbsp;圆领 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">袖型:&nbsp;常规</span><br /> <span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">腰型:&nbsp;宽松腰 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">衣门襟:&nbsp;套头 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">裙型:&nbsp;其他</span><br /> <span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">图案:&nbsp;纯色 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">流行元素/工艺:&nbsp;绣花 </span><span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">品牌:&nbsp;裂帛</span><br /> <span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">适用年龄:&nbsp;25-29周岁</span><br /> <span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">年份季节:&nbsp;2016年夏季</span><br /> <span style="line-height:1.5;background-color:#ffffff;font-family:tahoma, arial, 微软雅黑, sans-serif;color:#666666;">颜色分类:&nbsp;粉色&nbsp;浅蓝色</span><br /> <img src="/upload/store/1/2016/04/04/444ed816-9db0-456d-a28c-fcc7fc900097.jpg" /><img src="/upload/store/1/2016/04/04/7409991b-ff7a-4481-8402-dbead4fc7285.jpg" /><img src="/upload/store/1/2016/04/04/09ab7939-e4df-46fd-aadb-cad2911b2f00.jpg" /><br />',
    goodid: '98463',
    gallery: [],
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
    goods_specs: [
      {
        "sequence": 2,
        "value": "2GB",
        "specImage": "",
        "spec": {
          "name": "显存容器",
          "sequence": 6,
          "type": "text",
          "properties": ["512MB","6GB","8GB"],
          "id": 2,
          "addTime": "2013-12-24 08:59:56",
          "deleteStatus": false
        },
        "id": 15,
        "addTime": "2020-05-13 18:53:35",
        "deleteStatus": false
      },
      {
        "sequence": 2,
        "value": "2GB",
        "specImage": "",
        "spec": {
          "name": "显存容器",
          "sequence": 6,
          "type": "text",
          "properties": ["111","333"],
          "id": 2,
          "addTime": "2013-12-24 08:59:56",
          "deleteStatus": false
        },
        "id": 15,
        "addTime": "2020-05-13 18:53:35",
        "deleteStatus": false
      }
    ],
    goodsSpecifications: [],
    allnumber: 0,
    showpop: false,
    number: 0
  }
},
mounted () {
  if (getQuery()['id']) {
    this.goodid = getQuery()['id']
  }
  // 获取商品详情数据
  this.getDetail()
},
methods: {
  handleSpec(data) {
    data.forEach(v=>{
        let properties = v.spec.properties
        v.spec.properties = []
        properties.forEach(val=>{
          v.spec.properties.push({
            value: val,
            active: false
          })
        })
    })
    data.forEach(v => {
      v.spec.properties[0].active=true
    });
    // return data
  },
  preview(src, e) {
    // do something
  },
  navigate(href, e) {
    // do something
  },
  aaa() {
    console.log(111)
  },
  selectDesc(i,index) {
    this.goods_specs[i].spec.properties.forEach(v=>{
        v.active = false
    })
    this.goods_specs[i].spec.properties[index].active = true
  },
  // 获取商品详情数据
  async getDetail() {
    let data = {
      'id': this.goodid // id 商品对应的id  用于获取商品详情数据
    }
    let url = '/goodsView.htm'
    let body = await request(url, 'get', data)
    if (body.success) {
      console.log(body,'body')
      this.article = body.good.goods_property
      // console.log("this.attribute")
      // console.log(this.attribute)
      this.gallery = body.good.goods_photos
      // console.log("this.gallery")
      // console.log(this.gallery)
      this.attribute = body.good.goods_property
      // this.goods_specs = JSON.parse(body.goods_specs)
      // console.log(this.goods_specs,'this.goods_specs')
      this.handleSpec(this.goods_specs)
      // this.goodsSpecifications = JSON.parse(body.goodsSpecifications)
      // console.log(this.goods_specs,'this.goods_specs')
      // console.log(this.goodsSpecifications,'this.goodsSpecifications')
      // console.log("this.attribute")
      // console.log(this.attribute)
    }
  },
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
  goShopd() {
    wx.navigateTo({
      url: "/pages/store/main"
    });
    this.showpop = false
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
@import url("~mpvue-wxparse/src/wxParse.css");
page {
  background: #f4f4f4;
  height: 100%;
}
.grayLine {
  margin-bottom: 12rpx;
}
.component_shop {
  width: 100%;
  background: #fff;
  padding: 30rpx 24rpx;
  margin: 20rpx 0;
  box-sizing: border-box;
  .shop_head {
    display: flex;
    position: relative;
    .go_shop {
      position: absolute;
      top: 50%;
      right: 30rpx;
      font-size: 26rpx;
      transform: translateY(-50%);
    }
    .shop_img {
      margin-right: 20rpx;
      width: 120rpx;
      height: 120rpx;
      border-radius: 4rpx;
    }
    .head_avatar {
      flex: 1;
      p {
        span {
          color: red;
          padding-right: 10rpx;
        }
      }
      .head_t {
        padding-bottom: 10rpx;
        color: #333;
        font-size: 30rpx;
      }
      .head_f {
        color: #999;
        font-size: 26rpx;
      }
    }
  }
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
.standard {
  background: #fff;
  .item {
    padding: 20rpx 30rpx 20rpx;
  }
  .desc {
    display: flex;
    flex-wrap: wrap;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150rpx;
      height: 60rpx;
      border: 2rpx solid #c5c5c5;
      margin:20rpx 20rpx 0 0;
      box-sizing: border-box;
    }
    .active {
      border: 2rpx solid #f2270c;
    }
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
    padding: 28rpx 0;
    font-size: 32rpx;
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
