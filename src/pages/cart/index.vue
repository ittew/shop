<template>
  <div class="cart">
    <div class="cartlist" v-if="listData.length>0">
      <div class="item" v-for="(item,index) in listData" :key="index">
        <div class="con">
          <div class="left">
            <div class="icon" @click="changeColor(index,item.goods_id)" :class="[ Listids[index] ? 'active' : '',{active:allcheck}]"></div>
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
    <div v-else class="nogoods">
      <img src="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
      <span>暂无商品，快速选购吧！</span>
    </div>
    <div class="fixed" v-if="listData.length>0">
      <div @click="allCheck" :class="{active:allcheck}" class="left">
        全选({{isCheckedNumber}})
      </div>
      <div class="right">
        <div>
          ￥{{allPrise}}
        </div>
        <div @click="orderDown">下单</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { get, post, login, request } from "../../utils"
  export default {
    onShow() {
      if (wx.getStorageSync("token")) {
        this.getListData()
      } else {
        wx.redirectTo({url: '/pages/login/main'})
      }
    },
    created() {},
    data() {
      return {
        openId: "",
        allcheck: false,
        listData: [
          {
            "id":147,
            "user_id":"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
            "goods_id":1009024,
            "goods_name":"日式和风懒人沙发",
            "retail_price":599,
            "number":1,
            "list_pic_url":"http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png"
          },
          {
            "id":147,
            "user_id":"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
            "goods_id":1009024,
            "goods_name":"日式和风懒人沙发",
            "retail_price":599,
            "number":1,
            "list_pic_url":"http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png"
          },
          {
            "id":147,
            "user_id":"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
            "goods_id":1009024,
            "goods_name":"日式和风懒人沙发",
            "retail_price":599,
            "number":1,
            "list_pic_url":"http://yanxuan.nosdn.127.net/149dfa87a7324e184c5526ead81de9ad.png"
          }
        ],
        Listids: [],
        userInfo: {},
      }
    },
    components: {},
    methods: {
      async orderDown() {
        if (this.Listids.length == 0) {
          wx.showToast({
            title: "请选择商品",
            icon: "none",
            duration: 1500
          });
          return false;
        }
        // 去掉数组中空的false的
        var newgoodsid = [];
        for (let i = 0; i < this.Listids.length; i++) {
          const element = this.Listids[i];
          if (element) {
            newgoodsid.push(element);
          }
        }
        var goodsId = newgoodsid.join(",");
        const data = await post("/order/submitAction", {
          goodsId: goodsId,
          openId: this.openId,
          allPrise: this.allPrise
        });
        if (data) {
          wx.navigateTo({
            url: "/pages/order/main"
          });
        }
      },
      async getListData() {
        console.log(1111)
        let url = '/card/cardMenuDetail.htm'
        let body = await request(url, 'get', {})
        console.log(body)
        if (body.success && body.token) {
          this.listData = data.data;
        }
      },
      allCheck() {
        //先清空
        this.Listids = [];
        if (this.allcheck) {
          this.allcheck = false;
        } else {
          console.log("选择全部");
          this.allcheck = true;
          //循环遍历所有的商品id
          for (let i = 0; i < this.listData.length; i++) {
            const element = this.listData[i];
            this.Listids.push(element.goods_id);
          }
        }
      },
      change(e) {},
      changeColor(index, id) {
        if (this.Listids[index]) {
          this.$set(this.Listids, index, false);
        } else {
          this.$set(this.Listids, index, id);
        }
      }
    },
    computed: {
      isCheckedNumber() {
        let number = 0;
        for (let i = 0; i < this.Listids.length; i++) {
          if (this.Listids[i]) {
            number++;
          }
        }
        if (number == this.listData.length && number != 0) {
          this.allcheck = true;
        } else {
          this.allcheck = false;
        }
        return number;
      },
      allPrise() {
        var Prise = 0;
        for (let i = 0; i < this.Listids.length; i++) {
          if (this.Listids[i]) {
            Prise = Prise + this.listData[i].retail_price * this.listData[i].number;
          }
        }
        return Prise;
      }
    }
  };

</script>
<style lang='scss' scoped>
.cart {
  overflow-x: hidden;
  .cartlist {
    background: #fff;
    margin-bottom: 110rpx;
    .item {
      padding: 20rpx 0;
      border-bottom: 1rpx solid #f4f4f4;
      height: 166rpx;
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
          .icon {
            height: 125rpx;
            width: 34rpx;
            background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat center center;
            background-size: 34rpx 34rpx;
            margin: 0 20rpx;
          }
          .icon.active {
            background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat center center;
            background-size: 34rpx 34rpx;
          }
          .img {
            height: 125rpx;
            width: 125rpx;
            display: block;
            background: #f4f4f4;
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
  .fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100rpx;
    line-height: 100rpx;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-0e09baa37e.png) no-repeat;
      background-size: 34rpx 34rpx;
      background-position: 20rpx;
      padding-left: 70rpx;
    }
    .active {
      background: url(http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/checkbox-checked-822e54472a.png) no-repeat;
      background-size: 34rpx 34rpx;
      background-position: 20rpx;
    }
    .right {
      display: flex;
      div:nth-child(1) {
        color: #f2270c;
        padding-right: 40rpx;
      }
      div:nth-child(2) {
        width: 200rpx;
        height: 100rpx;
        text-align: center;
        line-height: 100rpx;
        font-size: 29rpx;
        background: #f2270c;
        color: #fff;
      }
    }
  }
  .nogoods {
    padding-top: 300rpx;
    text-align: center;
    color: #999;
    img {
      margin: 0 auto;
      display: block;
      width: 258rpx;
      height: 258rpx;
    }
  }
}
</style>
