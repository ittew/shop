<template>
  <div class="address">

     <scroll-view :scroll-y="scrollflag" class="addcont" style="height: 100%;">
        <!-- <div class="addcont"> -->
        <div v-if="listData.length!=0" class="item">
          <div class="list" @touchstart="startMove" :data-index="index" @touchmove="deleteGoods" @touchend="endMove" v-for="(item, index) in listData" :key="index">
            <div class="addresslist" :style="item.textStyle">
                <div>
                  <span>{{item.name}}</span>
                  <div v-if="item.is_default" class="moren">
                    默认
                  </div>
                </div>
                <div class="info" @click="selAddress(item.id)">
                  <p>{{item.mobile}}</p>
                  <p>{{item.address+item.address_detail}}</p>
                </div>
            </div>

          </div>

        </div>
        <div v-else class="center">
          <p>收货地址在哪里?</p>
        </div>
      </scroll-view>
      <div class="bottom">
        <div @click="toDetail">+新建地址</div>
      </div>
  </div>
</template>

<script>
// import { get, getStorageOpenid } from "../../utils";
export default {
  onShow() {
    // this.openId = getStorageOpenid();
    // this.getAddressList();
  },
  created() {},
  computed: {},
  data() {
    return {
      listData:[
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 1,"address_detail": "wefwewe"},
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 0,"address_detail": "wefwewe"},
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 0,"address_detail": "wefwewe"},
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 0,"address_detail": "wefwewe"},
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 0,"address_detail": "wefwewe"},
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 0,"address_detail": "wefwewe"},
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 0,"address_detail": "wefwewe"},
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 0,"address_detail": "wefwewe"},
        {"id":1,"name": "gdsg","address": "天津市 天津市 河东区","mobile": "gdfgd","is_default": 0,"address_detail": "wefwewe"}
      ]
    };
  },
  components: {},
  methods: {
    selAddress(id) {
      wx.setStorageSync("addressId", id);
      // wx.redirectTo({ url: "/pages/order/main?id=" + id });
      wx.navigateBack({
        delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
      });
    },
    toDetail() {
      wx.navigateTo({
        url: "/pages/addAddress/main"
      });
    },
    async getAddressList() {
      // var _this = this;
      // const data = await get("/address/getListAction", {
      //   openId: _this.openId
      // });
      // this.listData = data.data;
    }
  }
};
</script>

<style lang='scss' scoped>
.address {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-bottom: 110rpx;
  box-sizing: border-box;
  .addcont {
    height: 100%;
    .item {
      padding: 0 20rpx;
      .list {
        position: relative;
        padding: 15rpx 0;
        border-bottom: 1rpx solid #d9d9d9;
      }
    }
  }
  .addresslist {
    width: 100%;
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
        border: 1rpx solid #b4282d;
        text-align: center;
        line-height: 30rpx;
        color: #b4282d;
        margin: 10rpx auto 0 auto;
      }
    }
    .info {
      padding: 0 20rpx;
      // flex: 1; // p:nth-child(1) {}
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
    .btns {
      display: flex;
      .common {
        width: 50rpx;
        height: 50rpx;

      }
      .edit {
        margin-right: 20rpx;
        background: url('../../../static/images/edit.png') no-repeat;
        background-size: 100% 100%;
      }
      .delete {
        background: url('../../../static/images/del.png') no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .center {
    width: 248rpx;
    height: 248rpx;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -80%, 0);
    background: url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noAddress-26d570cefa.png') no-repeat;
    background-size: 100% 100%;
    p {
      position: absolute;
      bottom: -20rpx;
      left: 0;
      right: 0;
      text-align: center;
    }
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30rpx 30rpx;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: #fff;
    div {
      width: 330rpx;
      height: 70rpx;
      line-height: 70rpx;
      text-align: center;
      border: 1rpx solid #B4282D;
      color: #B4282D;
    }
    div:nth-child(2) {
      border: 1rpx solid green;
      color: green;
    }
  }
}
</style>
