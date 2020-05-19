<template>
  <div class="address">
    <!-- 收货地址列表 -->
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
                <div class="info">
                  <p>{{item.mobile}}</p>
                  <p>{{item.address+item.address_detail}}</p>
                </div>
                <div class="btns">
                  <div @click="toDetail(item.id)" class="common edit"></div>
                  <div @click="delAddress(item.id)" class="common delete"></div>
                </div>
            </div>

          </div>

        </div>
        <div v-else class="center">
          <p>收货地址在哪里?</p>
        </div>
      </scroll-view>
       <div class="bottom">
        <div @click="wxaddress">+新建地址</div>
      </div>
  </div>
</template>

<script>

export default {
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
    }
  },
  methods: {
    delAddress(id) {
      var _this = this;
      wx.showModal({
        title: "",
        content: "是否要删除该收货地址",
        success: function(res) {
          if (res.confirm) {
             wx.showToast({
              title: "删除成功",
              icon: "success",
              duration: 1500
            });
            // const data = get("/address/deleteAction", {
            //   id: id
            // }).then(() => {
            //   _this.getAddressList();
            // });
          } else if (res.cancel) {
            console.log("用户点击取消");
            //滑动之前先初始化样式数据
            _this.initTextStyle();
          }
        }
      });
    },
    toDetail(id) {
      wx.navigateTo({
        url: "/pages/addAddress/main"
      });
    },
    getAddressList() {
      // var _this = this;
      // const data = await get("/address/getListAction", {
      //   openId: _this.openId
      // });
      // for (var i = 0; i < data.data.length; i++) {
      //   data.data[i].textStyle = "";
      //   data.data[i].textStyle1 = "";
      // }
      // this.listData = data.data;
      // console.log(this.listData);
    },
    wxaddress() {
      wx.navigateTo({
        url: "/pages/addAddress/main"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
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
        padding: 28rpx 0;
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
