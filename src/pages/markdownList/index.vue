<template>
  <div class="list">
    <div class="banner">
      <img src="http://www.sbnws.net/upload/activity/c2d2a973-255a-4cb1-94eb-5cd0d3c42a8a.jpg" alt="">
    </div>
    <div class="sublist">
      <div v-for="(subitem, subindex) in goodsList" :key="subindex" @click="jumpDetail" class="good-desc">
        <img src="http://www.sbnws.net/upload/store/32777/2020/05/14/9a07852f-67b9-4bc4-a716-813808893625.png" class="good-img" alt="">
        <p class="ellipsis-two title">11111{{subitem.d_goods.goods_name}}</p>
        <div class="price">
          <p class="dis-price">￥{{subitem.d_goods.goods_current_price}}</p>
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
      goodsList:[]
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 341rpx;
  img {
    width: 100%;
    height: 100%;
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
      padding: 8rpx 0;
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
        padding: 0 20rpx;

        .dis-price {
          font-size: 30rpx;
          font-weight: bold;
          color: #f2270c;
        }
        .old-price {
          font-size: 20rpx;
          color: #999;
          text-decoration:line-through;
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
