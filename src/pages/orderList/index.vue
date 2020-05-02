<template>
  <div class="orderlist">
    <ul class="tabs">
      <li :class="{'active':currentIndex == index}" @click="currentIndex=index" v-for="(item, index) in tabs" :key="item">{{item}}</li>
    </ul>
    <div class="orderlist-wrapper">
      <div class="all" v-show="currentIndex == 0">
        <div class="list" v-if="!allList.length>0">
          <div class="item">
            <div class="ordernum-status">
              <div class="ordernum">订单号：20020300426200416</div>
              <div class="status red">待支付</div>
            </div>
            <div class="goods-list" @click="goDetail">
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X2</div>
                  </div>
                </div>
              </div>
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X1</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ordertime-price">
              <div class="time">2020-04-26 20:04:16</div>
              <div class="price-box">共3件商品 实付款: <span>￥805.00</span></div>
            </div>
            <div class="order-options">
              <div class="cancel-order btn">取消订单</div>
              <div class="cancel-order btn">确认支付</div>
            </div>
          </div>
          <div class="item">
            <div class="ordernum-status">
              <div class="ordernum">订单号：20020300426200416</div>
              <div class="status blue">已完成</div>
            </div>
            <div class="goods-list" @click="goDetail">
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X2</div>
                  </div>
                </div>
              </div>
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X1</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ordertime-price">
              <div class="time">2020-04-26 20:04:16</div>
              <div class="price-box">共3件商品 实付款: <span>￥805.00</span></div>
            </div>
            <div class="order-options">
              <div class="cancel-order btn">删除订单</div>
            </div>
          </div>
          <div class="item">
            <div class="ordernum-status">
              <div class="ordernum">订单号：20020300426200416</div>
              <div class="status red">待发货</div>
            </div>
            <div class="goods-list" @click="goDetail">
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X2</div>
                  </div>
                </div>
              </div>
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X1</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ordertime-price">
              <div class="time">2020-04-26 20:04:16</div>
              <div class="price-box">共3件商品 实付款: <span>￥805.00</span></div>
            </div>
            <div class="order-options">
              <div class="cancel-order btn">查看物流</div>
            </div>
          </div>
        </div>
        <div class="nodata" v-else>
          <img src="https://img.yzcdn.cn/vant/empty-image-default.png" alt="">
          <span>暂无订单</span>
        </div>
      </div>
      <div class="all" v-show="currentIndex == 1">
        <div class="list" v-if="!allList.length>0">
          <div class="item">
            <div class="ordernum-status">
              <div class="ordernum">订单号：20020300426200416</div>
              <div class="status red">待支付</div>
            </div>
            <div class="goods-list" @click="goDetail">
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X2</div>
                  </div>
                </div>
              </div>
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X1</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ordertime-price">
              <div class="time">2020-04-26 20:04:16</div>
              <div class="price-box">共3件商品 实付款: <span>￥805.00</span></div>
            </div>
            <div class="order-options">
              <div class="cancel-order btn">取消订单</div>
              <div class="cancel-order btn">确认支付</div>
            </div>
          </div>
        </div>
        <div class="nodata" v-else>
          <img src="https://img.yzcdn.cn/vant/empty-image-default.png" alt="">
          <span>暂无订单</span>
        </div>
      </div>
      <div class="all" v-show="currentIndex == 2">
        <div class="list" v-if="!allList.length>0">
          <div class="item">
            <div class="ordernum-status">
              <div class="ordernum">订单号：20020300426200416</div>
              <div class="status red">待发货</div>
            </div>
            <div class="goods-list" @click="goDetail">
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X2</div>
                  </div>
                </div>
              </div>
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X1</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ordertime-price">
              <div class="time">2020-04-26 20:04:16</div>
              <div class="price-box">共3件商品 实付款: <span>￥805.00</span></div>
            </div>
            <div class="order-options">
              <div class="cancel-order btn">查看物流</div>
            </div>
          </div>
        </div>
        <div class="nodata" v-else>
          <img src="https://img.yzcdn.cn/vant/empty-image-default.png" alt="">
          <span>暂无订单</span>
        </div>
      </div>
      <div class="all" v-show="currentIndex == 3">
        <div class="list" v-if="!allList.length>0">
          <div class="item">
            <div class="ordernum-status">
              <div class="ordernum">订单号：20020300426200416</div>
              <div class="status blue">已完成</div>
            </div>
            <div class="goods-list" @click="goDetail">
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X2</div>
                  </div>
                </div>
              </div>
              <div class="goods">
                <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2826523735,3635392481&fm=11&gp=0.jpg" alt="">
                <div class="goods-detial">
                  <div class="goods-name">按理说大家阿拉斯加大</div>
                  <div class="price-num">
                    <div class="price">￥299.00</div>
                    <div class="num">X1</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="ordertime-price">
              <div class="time">2020-04-26 20:04:16</div>
              <div class="price-box">共3件商品 实付款: <span>￥805.00</span></div>
            </div>
            <div class="order-options">
              <div class="cancel-order btn">删除订单</div>
            </div>
          </div>
        </div>
        <div class="nodata" v-else>
          <img src="https://img.yzcdn.cn/vant/empty-image-default.png" alt="">
          <span>暂无订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "oerder",
  data() {
    return {
      active: 0,
      allList:[],
      tabs:['全部', '待付款', '待发货', '已完成'],
      currentIndex: 0,
    }
  },
  components: {
  },
  computed: {
    orders() {
    }
  },
  methods: {
    goDetail () {
      wx.navigateTo({
        url: '/pages/orderDetail/main'
      })
    }
  },
  mounted() {

  },
  created(){
  }
}
</script>


<style lang="scss">
page{
  background: #f6f6f6;
}
.orderlist{
  padding-top: 88rpx;
  .tabs{
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    display: flex;
    background: #ffffff;
    li{
      width: 25%;
      height: 88rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      &.active{
        color: #f2270c;
        &:before{
          content: '';
          position: absolute;
          bottom:0;
          height: 4rpx;
          width:100rpx;
          background: #f2270c;
        }
      }
    }
  }
  .nodata{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200rpx;
    img{
      width: 400rpx;
      height: 400rpx;
    }
    span{
      font-size: 36rpx;
      color: #999;
    }
  }
  .item{
    margin: 20rpx 0;
    background: #fff;
    .ordernum-status{
      height: 80rpx;
      display: flex;
      padding: 0 20rpx;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1rpx solid #e8e8e8;
      .status{
        &.red{
          color: #f2270c
        }
        &.blue{
          color: #00a4ff;
        }
      }
    }
    .ordertime-price{
      display: flex;
      padding: 0 20rpx;
      justify-content: space-between;
      border-bottom: 1rpx solid #e8e8e8;
      align-items: center;
      height: 80rpx;
      .price-box span{
        color: #f2270c;
        font-weight:bold;
      }
    }
    .goods-list{
      border-bottom: 2rpx solid #e8e8e8;
      .goods{
        padding: 20rpx;
        display: flex;
        img{
          width: 180rpx;
          height: 180rpx;
          margin-right: 20rpx;
          border: 1rpx solid #ddd;
        }
        .goods-detial{
          flex: 1;
          display:flex;
          flex-direction: column;
          justify-content: space-between;
          .goods-name{
            font-size: 32rpx;
          }
          .price-num{
            display: flex;
            justify-content: space-between;
             .price{
              color: #f2270c;
              font-weight:bold;
            }
            .num{
              // font-weight:bold;
            }
          }
        }
      }
    }
    .order-options{
      display: flex;
      padding: 0 20rpx;
      justify-content: flex-end;
      border-bottom: 1rpx solid #e8e8e8;
      align-items: center;
      height: 90rpx;
      .btn{
        width: 150rpx;
        margin-left: 16rpx;
        height: 56rpx;
        border-radius: 8rpx;
        line-height: 54rpx;
        text-align: center;
        color: #333;
        border: 2rpx solid #333;
      }
    }
  }
}
</style>

