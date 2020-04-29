<template>
  <div class="index">
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper class="swiper-container" @change="swiperChange" autoplay="true" interval="3000" circular="true" duration="500">
        <block v-for="(item, index) in banner " :key="index" >
          <swiper-item class="swiper-item">
            <image :src="item" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
      <div class="dots">
        <div v-for="(v,i) in banner" :key="i">
          <div class="dotsItem" :class="i == swiperCurrent ? 'dotActive' : ''"></div>
        </div>
      </div>
    </div>
    <!-- icon -->
    <div class="icon grayLine">
      <div @click="categoryList(item.id)" v-for="(item, index) in iconList" :key="index">
        <img :src="item.url" alt="">
        <p>{{item.name}}</p>
      </div>
    </div>
    <!-- 商品内容 -->
    <div class="contentList grayLine" v-for="(v,i) in content" :key="i">
      <div class="barTitle">
        <div class="Title-left">{{v.title}}</div>
        <div class="Title-right" @tap="gotoList">查看全部<img src="/static/images/right-arrow.png" alt=""></div>
      </div>
      <div class="sublist">
        <div v-for="(subitem, subindex) in v.goodsList" :key="subindex" @click="jumpDetail">
          <img :src="subitem.url" alt="">
          <p class="ellipsis-two">{{subitem.name}}</p>
          <p>￥{{subitem.retail_price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperCurrent: 0,
      banner: [
        '/static/images/index/ad1.jpg',
        '/static/images/index/ad2.jpg',
        '/static/images/index/ad3.jpg',
        '/static/images/index/ad4.jpg',
        '/static/images/index/ad5.jpg',
        '/static/images/index/ad6.jpg'
      ],
      iconList: [
        {
          url:'/static/tabs/my-active.png',
          name: '超市'
        },
        {
          url:'/static/tabs/my-active.png',
          name: '超市'
        },
        {
          url:'/static/tabs/my-active.png',
          name: '超市'
        },
        {
          url:'/static/tabs/my-active.png',
          name: '超市'
        },
        {
          url:'/static/tabs/my-active.png',
          name: '超市'
        },
        {
          url:'/static/tabs/my-active.png',
          name: '超市'
        },
        {
          url:'/static/tabs/my-active.png',
          name: '超市'
        },
        {
          url:'/static/tabs/my-active.png',
          name: '超市'
        }
      ],
      content: [
        {
          title: '新品',
          goodsList: [
            {
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            }
          ]
        },
        {
          title: '新品',
          goodsList: [
            {
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            }
          ]
        },{
          title: '新品',
          goodsList: [
            {
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            },{
              url:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437797963,2700442249&fm=26&gp=0.jpg',
              name:'老酒纯粮原浆贵州茅台镇酱香型白酒53度纯粮食老酒500ML*1瓶装',
              retail_price:'59'
            }
          ]
        }
      ]
    }
  },

  components: {},

  methods: {
    swiperChange(e) {
      this.swiperCurrent = e.mp.detail.current
    },
    gotoList() {},
    // 跳转到商品详情
    jumpDetail() {
      wx.navigateTo({
        url: '/pages/good/main'
      })
    }
  }
}
</script>

<style lang="scss">
  page {
    background: #f4f4f4;
    height: 100%;
  }
  // 轮播
  .swiper {
    width: 100%;
    height: 417rpx;
    position: relative;
    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-item {
        width: 100%;
        height: 100%;

        .slide-image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .dots{
    width: auto;
    height: 10rpx;
    position: absolute;
    bottom: 20rpx;
    border-radius: 50rpx;
    margin-left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rpx 10rpx;
  }
  .dotsItem{
    width: 10rpx;
    height: 10rpx;
    margin: 0rpx 8rpx;
    border-radius: 50%;
    background-color: rgba(255,255,255,.3);
    transition: all .3s;
  }
  .dotActive{
    width: 20rpx;
    height: 10rpx;
    border-radius: 40rpx;
    background-color: #fff;
  }
  .grayLine {
    margin: 12rpx 0;
  }
  // icon
  .icon {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 16rpx;
    background: #ffffff;
    div {
      width: 25%;
      text-align: center;
      img {
        margin-top: 16rpx;
        height: 92rpx;
        width: 92rpx;
        border: 1px solid #eee;
        border-radius: 50%;
        display: inline-block;
      }
      p {
        font-size: 24rpx;
      }
    }
  }
  // 商品列表
  .contentList{
    padding: 12rpx 20rpx 0;
    background: #ffffff;
  }
  .barTitle {
    width: 100%;
    height: 56rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .Title-left {
    font-size: 37rpx;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 800;
    color: #333;
  }

  .Title-right {
    font-size: 26rpx;
    color: #aaa;

    img {
      width: 22rpx;
      height: 22rpx;
      margin-left: 6rpx;
    }
  }
  // 商品样式
  .sublist {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8rpx 0;
    div {
      width: 48%;
      box-sizing: border-box;
      padding: 20rpx 0;
      background: #fff;
      margin-bottom: 12rpx;
      border: 2rpx solid #eee;
      border-radius: 14rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        display: block;
        width: 200rpx;
        height: 180rpx;
        margin: 0 auto;
      }

      p {
        margin-bottom: 5rpx;
        // text-indent: 1em;
        font-size: 24rpx;
      }

      p:nth-child(2) {
        // width: 98%;
        padding: 10rpx 20rpx 0;
      }

      p:nth-child(3) {
        padding: 10rpx 20rpx 0;
        font-size: 30rpx;
        font-weight: bold;
        color: #f2270c;
      }
    }
}
</style>
