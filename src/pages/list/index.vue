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
          <span v-if="index==3" class="icon-xia icons"></span>
        </div>
      </div>
    </div>
    <div class="sublist">
      <div v-for="(subitem, subindex) in goodsList" :key="subindex" @click="jumpDetail">
        <img :src="subitem.url" alt="">
        <p class="ellipsis-two">{{subitem.name}}</p>
        <p>￥{{subitem.retail_price}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentTab: 0,
      navTitle: [
        {title: '综合'},
        {title: '销量'},
        {title: '新品'},
        {title: '价格'}
      ],
      goodsList: [
        {
          url:'http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg',
          name:'惠普（HP）CH563Z 802 黑色墨盒',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201908/thumb_img/10772_thumb_G_1564595802738.jpg',
          name:'扬帆耐立打印机碳粉YFHC',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg',
          name:'惠普（HP）CH563Z 802 黑色墨盒',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg',
          name:'惠普（HP）CH563Z 802 黑色墨盒',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201908/thumb_img/10772_thumb_G_1564595802738.jpg',
          name:'扬帆耐立打印机碳粉YFHC',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg',
          name:'惠普（HP）CH563Z 802 黑色墨盒',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg',
          name:'惠普（HP）CH563Z 802 黑色墨盒',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201908/thumb_img/10772_thumb_G_1564595802738.jpg',
          name:'扬帆耐立打印机碳粉YFHC',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg',
          name:'惠普（HP）CH563Z 802 黑色墨盒',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg',
          name:'惠普（HP）CH563Z 802 黑色墨盒',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201908/thumb_img/10772_thumb_G_1564595802738.jpg',
          name:'扬帆耐立打印机碳粉YFHC',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg',
          name:'惠普（HP）CH563Z 802 黑色墨盒',
          retail_price:'59'
        }
      ]
    }
  },
  methods: {
    handleClick(i) {
      this.currentTab =i
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
      top: 4rpx;
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
    div {
      width: 228rpx;
      box-sizing: border-box;
      padding: 6rpx 0;
      background: #fff;
      margin: 0 6rpx 12rpx;
      border: 1rpx solid #cdcccc;
      border-radius: 10rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        display: block;
        width: 200rpx;
        height: 160rpx;
        margin: 0 auto;
      }

      p {
        // text-indent: 1em;
        font-size: 24rpx;
      }

      p:nth-child(2) {
        padding: 8rpx 20rpx 0;
      }

      p:nth-child(3) {
        padding-left: 14rpx;
        font-size: 30rpx;
        font-weight: bold;
        color: #f2270c;
      }
    }
  }
</style>
