<template>
  <div class="index">
    <!-- 轮播图 -->
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
        <block v-for="(item, index) in banner " :key="index">
          <swiper-item class="swiper-item">
            <image :src="item" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
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
        <div class="Title-right" @tap="gotoList">查看全部<span class="icon-right"></span></div>
      </div>
      <div class="sublist">
        <div v-for="(subitem, subindex) in v.goodsList" :key="subindex" @click="jumpDetail">
          <img :src="subitem.url" alt="">
          <p>{{subitem.name}}</p>
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
          url:'/static/images/user.png',
          name: '超市'
        },
        {
          url:'/static/images/user.png',
          name: '超市'
        },
        {
          url:'/static/images/user.png',
          name: '超市'
        },
        {
          url:'/static/images/user.png',
          name: '超市'
        },
        {
          url:'/static/images/user.png',
          name: '超市'
        },
        {
          url:'/static/images/user.png',
          name: '超市'
        },
        {
          url:'/static/images/user.png',
          name: '超市'
        },
        {
          url:'/static/images/user.png',
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
  .grayLine {
    margin: 20rpx 0;
  }
  // icon
  .icon {
    display: flex;
    flex-wrap: wrap;
    padding: 10rpx 0;
    background: #ffffff;
    div {
      width: 25%;
      text-align: center;
      img {
        margin: 15rpx 0;
        height: 100rpx;
        width: 100rpx;
        display: inline-block;
      }
      p {
        line-height: 1;
        font-size: 30rpx;
        margin-bottom: 15rpx;
      }
    }
  }
  // 商品列表
  .contentList{
    padding: 10rpx 20rpx 20rpx;
    background: #ffffff;
  }
  .barTitle {
    width: 100%;
    height: 56rpx;
    margin-top: 20rpx;
    text-align: center;
  }
  .Title-left {
    float: left;
    font-size: 37rpx;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 800;
    color: #333;
  }

  .Title-right {
    float: right;
    font-size: 26rpx;
    color: #aaa;

  }
  .icon-right {
    // background: url("") no-repeat center center;
    background-size: 64rpx 64rpx;
  }
  // 商品样式
  .sublist {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 32%;
      margin-right:1%;
      box-sizing: border-box;
      margin-top: 20rpx;
      padding: 10px 0;
      background: #fff;
      margin-bottom: 10rpx;
      padding-bottom: 10rpx;
      border: 2rpx solid #eee;
      img {
        display: block;
        width: 200rpx;
        height: 180rpx;
        margin: 0 auto;
      }

      p {
        margin-bottom: 5rpx;
        text-indent: 1em;
        font-size: 32rpx;
      }

      p:nth-child(2) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 98%;
        padding: 10px 0;
        line-height: 1;
      }

      p:nth-child(3) {
        color: #9c3232;
      }
    }

  }
</style>
