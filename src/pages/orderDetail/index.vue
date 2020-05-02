<template>
  <div class="detail-wrapper">
    <div class="status">待支付</div>
    <div class="item">
      <div class="ordernum-status">
        <div class="ordernum">四川资阳雁江区店</div>
        <div class="contact"><div class="icon-dianhua"></div>联系商家</div>
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
        <div class="child">
          <span>商品应付金额：</span>
          <span>￥805.00</span>
        </div>
        <div class="child">
          <span>优惠金额：</span>
          <span>￥0.00</span>
        </div>
        <div class="child">
          <span>配送费:</span>
          <span>￥0.00</span>
        </div>
      </div>
      <div class="total-price">
        <div>实际金额：</div>
        <div>￥805.00</div>
      </div>
      <div class="time-payway">
        <div class="each">配送方式：送货上门</div>
        <div class="each">商家地址：仁德中路64号</div>
        <div class="each">下单编号：20020300425200416</div>
        <div class="each">下单时间：2020-04-26 20:04:27</div>
        <div class="each">支付方式：微信</div>
      </div>
      <div class="total">
        <span>总计：</span>
        <span class="price">￥805.00</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.detail-wrapper{
  .status{
    line-height: 88rpx;
    background: #f2270c;
    color: #fff;
    padding-left: 20rpx;
  }
  .ordernum-status{
    height: 80rpx;
    display: flex;
    padding-right:20rpx;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1rpx solid #e8e8e8;
    .contact{
      .icon-dianhua{
        color: #f2270c;
        position: relative;
        top: 2rpx;
        margin-right: 8rpx;
      }
    }
  }
  .item{
    border-top: 20rpx solid #f8f8f8;
    padding-left: 20rpx;
    background: #fff;
    .ordertime-price{
      border-bottom: 1rpx solid #e8e8e8;
      padding: 16rpx 20rpx 6rpx 0;
      .child{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10rpx;
      }
    }
    .goods-list{
      .goods{
        padding: 20rpx 20rpx 20rpx 0;
        display: flex;
        border-bottom: 1rpx solid #e8e8e8;
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
            // font-weight: bold;
          }
          .price-num{
            display: flex;
            justify-content: space-between;
             .price{
              color: #f2270c;
              // font-weight:bold;
            }
            .num{
              // font-weight:bold;
            }
          }
        }
      }
    }
    .total-price{
      display: flex;
      justify-content: space-between;
      // font-weight: bold;
      height: 100rpx;
      align-items: center;
      padding-right: 20rpx;
    }
    .time-payway{
      border-top:20rpx solid #f8f8f8;
      border-bottom:20rpx solid #f8f8f8;
      .each{
        margin: 16rpx 0;
      }
    }
    .total{
      line-height: 100rpx;
      .price{
        color: #f2270c;
        font-size: 36rpx;
      }
    }
  }
}
</style>
