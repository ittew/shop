<template>
  <div class="order">
    <div @click="toAddressList" v-if="address.name" class="address">
      <div class="item">
        <div class="list">
          <div class="addresslist">
            <div>
              <span>{{address.name}}</span>
              <div v-if="address.is_default" class="moren">
                默认
              </div>
            </div>
            <div class="info">
              <p>{{address.mobile}}</p>
              <p>{{address.address+address.address_detail}}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div @click="toAdd" v-else class="seladdress">
      请选择收货地址
    </div>
    <div class="orderbox">
      <div class="item">
        <div>商品合计</div>
        <div>￥{{allprice}}</div>
      </div>
      <div class="item">
        <div>运费</div>
        <div>免运费</div>
      </div>
      <div class="item">
        <div>优惠券</div>
        <div>暂无</div>
      </div>
    </div>
    <div class="cartlist">
      <div class="item" v-for="(item,index) in listData" :key="index">
        <div class="con">
          <div class="left">
            <div class="img">
              <img :src="item.list_pic_url" alt="">
            </div>
            <div class="info">
              <p>{{item.goods_name}}</p>
              <p>￥{{item.retail_price}}</p>
            </div>
          </div>
          <div class="right">
            <div class="num">
              x{{item.number}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>
        实付 : ￥{{allprice}}
      </div>
      <div @click="pay">
        支付
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      address: {
        "id": 61,
        "name": "gdsg",
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "address": "天津市 天津市 河东区",
        "mobile": "gdfgd",
        "is_default": 1,
        "address_detail": "wefwewe"
      },
      listData: [{
        "id": 201,
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "goods_id": 1006010,
        "goods_name": "秋冬保暖加厚细羊毛被",
        "retail_price": 659,
        "number": 1,
        "list_pic_url": "http://yanxuan.nosdn.127.net/8fe022126a2789d970f82853be13a5e6.png"
      }, {
        "id": 199,
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "goods_id": 1116004,
        "goods_name": "条纹长袖海魂衫（男婴童）",
        "retail_price": 79,
        "number": 1,
        "list_pic_url": "http://yanxuan.nosdn.127.net/14d3a47ccf52815baf6df308be6db5a6.png"
      }, {
        "id": 196,
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "goods_id": 1134030,
        "goods_name": "简约知性记忆棉坐垫",
        "retail_price": 46,
        "number": 5,
        "list_pic_url": "http://yanxuan.nosdn.127.net/aa49dfe878becf768eddc4c1636643a6.png"
      }, {
        "id": 195,
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "goods_id": 1009024,
        "goods_name": "日式和风懒人沙发",
        "retail_price": 599,
        "number": 4,
        "list_pic_url": "http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png"
      }, {
        "id": 200,
        "user_id": "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
        "goods_id": 1023003,
        "goods_name": "100年传世珐琅锅 全家系列",
        "retail_price": 398,
        "number": 1,
        "list_pic_url": "http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png"
      }],
      allprice: 100
    }
  },
  methods: {
    toAdd() {
      wx.navigateTo({
        url: "/pages/addaddress/main"
      });
    },
    toAddressList() {
      wx.navigateTo({
        url: "/pages/addressSelect/main"
      });
    },
    pay() {
      wx.showToast({
        title: "支付功能暂未开发", //提示的内容,
        icon: "none", //图标,
        duration: 1500, //延迟时间,
        mask: false, //显示透明蒙层，防止触摸穿透,
        success: res => {}
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  overflow-x: hidden;
  .seladdress {
    width: 100%;
    min-height: 166rpx;
    background: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png') 0 0 repeat-x #fff;
    background-size: 62rpx 10rpx;
    margin-bottom: 20rpx;
    padding-top: 10rpx;
    text-align: center;
    line-height: 166rpx;
  }
  .address {
    background: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-bg-bd30f2bfeb.png') 0 0 repeat-x #fff;
    padding-top: 46rpx;
    margin-bottom: 20rpx;
    .item {
      padding: 0 20rpx;
      .addresslist {
        width: 100%;
        position: relative;
        transition: all 300ms ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div:nth-child(1) {
          width: 100rpx;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          align-self: flex-start;
          .moren {
            width: 60rpx;
            height: 30rpx;
            border: 1rpx solid #f2270c;
            text-align: center;
            line-height: 30rpx;
            color: #f2270c;
            margin: 10rpx auto 0 auto;
          }
        }
        .info {
          padding: 0 20rpx;
          flex: 1; // p:nth-child(1) {}
          p:nth-child(2) {
            margin-top: 5rpx;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        div:nth-child(3) {
          width: 50rpx;
          height: 50rpx;
          margin: 0 20rpx;
          background: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-596d39df1e.png') no-repeat;
          background-size: 100% 100%;
        }
      }
    }
  }
  .orderbox {
    padding: 0 30rpx;
    background: #ffffff;
    .item {
      padding: 20rpx 0;
      display: flex;
      justify-content: space-between;
      border-bottom: 1rpx solid #d9d9d9;
    }
    .item:last-child {
      // border: none;
    }
  }
  .cartlist {
    background: #fff;
    margin-bottom: 110rpx;
    .item {
      border-bottom: 1rpx solid #f4f4f4; // height: 166rpx;
      position: relative;
      .con {
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: all 300ms ease;
        .left {
          display: flex;
          align-items: center;
          width: 80%;
          .img {
            height: 125rpx;
            width: 125rpx;
            display: block;
            background: #f4f4f4;
            margin-left: 20rpx;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .info {
            width: 50%;
            padding: 20rpx;
            p {
              line-height: 40rpx;
            }
          }
        }
        .right {
          padding-right: 50rpx;
        }
      }
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    height: 80rpx;
    width: 100%;
    display: flex;
    background: #fff;
    font-size: 32repx;
    div:nth-child(1) {
      flex: 1;
      line-height: 80rpx;
      padding-left: 20rpx;
      font-size: 32rpx;
    }
    div:nth-child(2) {
      width: 200rpx;
      height: 80rpx;
      text-align: center;
      line-height: 80rpx;
      font-size: 29rpx;
      background: #f2270c;
      color: #fff;
    }
  }
}
</style>
