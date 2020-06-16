<template>
  <div class="list">
    <!-- 搜索框 -->
    <div class="search-box">
       <div class="search">
        <span class="icon-sousuo"></span>
          <input placeholder="请输入您要搜索的商品关键字">
      </div>
    </div>
    <div class="top-nav">
      <div class="navigate-item" v-for="(item,index) in navTitle" :key="index">
        <div class="names"  @tap="handleClick(index)">
          <span :class="currentTab === index ? 'active' : ''">{{item.title}}</span>
          <span :class="currentTab === index ? 'active' : ''" v-if="index==3&&isShow" class="icon-shangjiantou-cu icons"></span>
          <span :class="currentTab === index ? 'active' : ''" v-if="index==3&&!isShow" class="icon-xia icons"></span>
        </div>
      </div>
    </div>
    <div class="sublist">
      <div v-for="(subitem, subindex) in goodsList" :key="subindex" @click="jumpDetail(subitem)" class="good-desc" >
        <img :src="subitem.d_goods.goods_main_photo" class="good-img" alt="">
        <p class="ellipsis-two title">{{subitem.d_goods.goods_name}}</p>
        <div class="price">
          <p class="dis-price">￥{{subitem.d_goods.goods_current_price}}</p>
          <p class="old-price">市场价:￥{{subitem.d_goods.goods_price}}</p>
        </div>
        <div class="presentation">
          <p class="ellipsis-two pre-desc"><span class="pre-title">赠品:</span>{{subitem.d_delivery_goods.goods_name}}</p>
          <!-- <img :src="subitem.url" alt="" class=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "../../utils"
export default {
  data() {
    return {
      currentTab: 0,
      navTitle: [
        {title: '综合'},
        {title: '销量'},
        {title: '人气'},
        {title: '价格'}
      ],
      isShow: true,
      highPrice: true,
      goodsList:[]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    saleSort(property,desc) {
      return function (a,b) {
        var preSales = a["d_goods"][property]
        var nextSales = b["d_goods"][property]
        if(desc == false) {
          return preSales-nextSales // 升序
        }else {
          return nextSales-preSales
        }
      }
    },
    handleClick(i) {
      this.currentTab =i
      switch (i) {
        case 0:
          this.getData()
          this.highPrice = false
          // console.log(this.goodsList,'0--')
          break;
        case 1:
          this.highPrice = false
          this.goodsList = this.goodsList.sort(this.saleSort("goods_salenum",this.highSales))
          console.log(this.highSales,this.goodsList,'1--')
          break;
        case 2:
          this.highPrice = false
          this.goodsList = this.goodsList.sort(this.saleSort("goods_collect",this.hignPopularity))
          // console.log(this.goodsList,'2--')
          break;
        case 3:
          this.highPrice = !this.highPrice
          this.isShow = !this.highPrice
          this.goodsList = this.goodsList.sort(this.saleSort("goods_current_price",this.highPrice))
          // console.log(this.highPrice,this.goodsList,'3--')
          break;
        default:
          break;
      }
      console.log(this.currentTab,'this.currentTab')
    },
    // 获取促销列表数据
    async getData () {
      console.log(222)
      let data = {'id':'262158'}
      let url = '/goodsDelivery.htm'
      let body = await request(url, 'get', data)
      if (body.success) {
        this.goodsList = body.data
        console.log(this.goodsList,'data')
      }
    },
    // 跳转到商品详情
    jumpDetail(item) {
      wx.navigateTo({
        url: '/pages/good/main?id=' + item.id
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 /* 搜索框 */
.search-box {
  width: 100%;
  padding: 12rpx 0;
  background-color: #fff;
}
.search{
  width: 90%;
  height: 62rpx;
  line-height: 62rpx;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-color: rgb(240, 240, 240);
  padding: 0 20rpx;
  border-radius: 35rpx;
}
.top-nav{
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    display: flex;
    border-top: 4rpx solid #eee;
    border-bottom: 4rpx solid #eee;
    box-sizing: border-box;
  }
  .navigate-item {
    flex:1;
    text-align: center;
    height: 90rpx;
  }

  .names {
    font-size: 30rpx;
    color: #3c3c3c;
    span {
      display: inline-block;
      height: 76rpx;
    }
    .active {
      color: #ff520f;
    }
    .icons {
      position: relative;
      top: -2rpx;
      left: 4rpx;
      font-size: 26rpx;
    }
    img {
      width: 40rpx;
      height: 40rpx;
    }
  }
// 商品样式
  .sublist {
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 15rpx 0;
    background: #ffffff;
    .good-desc {
      width: 228rpx;
      box-sizing: border-box;
      padding: 4rpx 0;
      background: #fff;
      margin: 0 6rpx 12rpx;
      border: 1rpx solid #cdcccc;
      border-radius: 10rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .good-img {
        display: block;
        width: 210rpx;
        height: 210rpx;
        margin: 0 auto;
      }

      .title {
        // text-indent: 1em;
        font-size: 24rpx;
        padding: 8rpx 20rpx 0;
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 14rpx;

        .dis-price {
          font-size: 30rpx;
          color: #f2270c;
        }
        .old-price {
          font-size: 20rpx;
          color: #999;
          text-decoration:line-through;
          margin-top: 4rpx;
        }
      }
      .presentation {
        padding: 2rpx 14rpx 4rpx;
        .pre-desc {
          font-size: 20rpx;
          color: #666;
        }
        .pre-title {
          font-size: 20rpx;
          color: #f2270c;
          padding-right: 8rpx;
        }
        img {
          width: 80rpx;
          height: 80rpx;
          border: 2rpx solid #cdcccc;
        }
      }

    }
  }
</style>
