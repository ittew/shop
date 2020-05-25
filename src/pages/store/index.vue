<template>
  <div class="store">
    <div class="store-info">
      <img class="logo" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2193748227,3257246483&fm=26&gp=0.jpg" alt="">
      <div class="info">
        <div class="store-name">光电数码商城</div>
        <div class="star">粉丝数2097</div>
      </div>
      <div class="collection">收藏</div>
    </div>
    <div class="tab">
      <div class="item" :class="{'active':curIndex == 0}" @tap="changeTab(0)">店铺首页</div>
      <div class="item" :class="{'active':curIndex == 1}" @tap="changeTab(1)">全部产品</div>
      <div class="item" :class="{'active':curIndex == 2}" @tap="changeTab(2)">产品分类</div>
    </div>

    <!-- 店铺首页 -->
    <div v-show="curIndex == 0">
      <!-- 轮播图 -->
      <div class="swiper">
        <swiper class="swiper-container" @change="swiperChange" autoplay="true" interval="3000" circular="true" duration="500">
          <block v-for="(item, index) in banner" :key="index" >
            <swiper-item class="swiper-item">
              <image :src="item" class="slide-image" />
            </swiper-item>
          </block>
        </swiper>
        <div class="dots">
          <div v-for="(v,i) in banner" :key="i">
            <div class="dotsItem" :class="{'dotActive':i == swiperCurrent}"></div>
          </div>
        </div>
      </div>
      <div class="contentList grayLine" v-for="(v,i) in content" :key="i">
        <div class="barTitle">
          <div class="Title-left"><span class="icons" :style="{color:v.color}" :class="v.icon"></span><span class="title-content">{{v.title}}</span></div>
          <!-- <div class="Title-right" @tap="gotoList">查看全部<img src="/static/images/right-arrow.png" alt=""></div> -->
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

    <div class="all" v-show="curIndex == 1">
      <div class="item" v-for="(subitem, subindex) in goodsList" :key="subindex" @click="jumpDetail">
        <img :src="subitem.url" alt="" class="pic">
        <div class="item-right">
          <p class="ellipsis-two">{{subitem.name}}</p>
          <p class="price">￥{{subitem.retail_price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      swiperCurrent: 0,
      banner: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334928377&di=4459f41b31641fcb6396e05cdb26b638&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1465624788%2C2344864837%26fm%3D214%26gp%3D0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2193748227,3257246483&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334971812&di=d63eeb5deb9ee52b1bb4cc35bd60307d&imgtype=0&src=http%3A%2F%2Fmy.dabangong.com%2Fimages%2F201501%2Fgoods_img%2F4247_P_1422167830200.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335011823&di=e029ad038155e81e40141036243682b4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F25%2F20170825101131_JSMer.jpeg',
        'http://img1.imgtn.bdimg.com/it/u=2565047914,1661736801&fm=26&gp=0.jpg'
      ],
      curIndex: 0,
      content: [{
          color: '#00BFFF',
          icon:'icon-bangong0',
          title: '新品上市',
          goodsList: [
            {
              url:'http://www.sbn.shop/images/201801/thumb_img/4860_thumb_G_1515966007157.jpg',
              name:'得力9844四联文件框(蓝) 12只装',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4874_thumb_G_1515967770959.jpg',
              name:'得力8854文件柜带锁(浅灰)',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4860_thumb_G_1515966007157.jpg',
              name:'得力9844四联文件框(蓝) 12只装',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4874_thumb_G_1515967770959.jpg',
              name:'得力8854文件柜带锁(浅灰)',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4860_thumb_G_1515966007157.jpg',
              name:'得力9844四联文件框(蓝) 12只装',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4874_thumb_G_1515967770959.jpg',
              name:'得力8854文件柜带锁(浅灰)',
              retail_price:'59'
            }
          ]
        },{
          color: '#40E0D0',
          icon:'icon-shumaweixiu',
          title: '热门推荐',
          goodsList: [
            {
              url:'http://www.sbn.shop/images/201807/thumb_img/9578_thumb_G_1530731976148.jpg',
              name:'宏碁（Acer）TMP249 14英寸便携商务办公高清手提电脑',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201812/thumb_img/10635_thumb_G_1544125488377.jpg',
              name:'爱普生长焦投影机教学会议型CB-2042',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201807/thumb_img/9578_thumb_G_1530731976148.jpg',
              name:'宏碁（Acer）TMP249 14英寸便携商务办公高清手提电脑',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201812/thumb_img/10635_thumb_G_1544125488377.jpg',
              name:'爱普生长焦投影机教学会议型CB-2042',
              retail_price:'59'
            }, {
              url:'http://www.sbn.shop/images/201807/thumb_img/9578_thumb_G_1530731976148.jpg',
              name:'宏碁（Acer）TMP249 14英寸便携商务办公高清手提电脑',
              retail_price:'59'
            }
          ]
        }
      ],
      goodsList: [{
          url:'http://www.sbn.shop/images/201801/thumb_img/4860_thumb_G_1515966007157.jpg',
          name:'得力9844四联文件框(蓝) 12只装得力9844四联文件框(蓝) 12只装',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/4874_thumb_G_1515967770959.jpg',
          name:'得力8854文件柜带锁(浅灰)得力8854文件柜带锁(浅灰)得力8854文件柜带锁(浅灰)得力8854文件柜带锁(浅灰)',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/4860_thumb_G_1515966007157.jpg',
          name:'得力9844四联文件框(蓝) 12只装',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/4874_thumb_G_1515967770959.jpg',
          name:'得力8854文件柜带锁(浅灰)得力8854文件柜带锁(浅灰)得力8854文件柜带锁(浅灰)',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/4860_thumb_G_1515966007157.jpg',
          name:'得力9844四联文件框(蓝) 12只装',
          retail_price:'59'
        },{
          url:'http://www.sbn.shop/images/201801/thumb_img/4874_thumb_G_1515967770959.jpg',
          name:'得力8854文件柜带锁(浅灰)得力8854文件柜带锁4文件柜带锁(浅灰)',
          retail_price:'59'
        }
      ]
    }
  },
  methods: {
    swiperChange(e) {
      this.swiperCurrent = e.mp.detail.current
    },
    changeTab(index){
      this.curIndex = index
      if (index == 2) {
        // 跳转分类
        wx.navigateTo({
          url: "/pages/sortlist/main"
        })
      }
    },
    // gotoList () {
    //   this.curIndex = 1
    // },
    jumpDetail(){
      wx.navigateTo({
        url: "/pages/good/main"
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.store{
  .store-info{
    height: 160rpx;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 30rpx;
    .logo{
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      border: 1px solid #999;
      margin-right: 30rpx;
    }
    .info{
      height: 90rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .star{
        font-size: 24rpx;
        color: #666;
      }
    }
    .collection{
      margin-left: auto;
      width: 120rpx;
      height: 50rpx;
      text-align: center;
      line-height: 50rpx;
      color: #fff;
      background: red;
      border-radius: 25rpx;
    }
  }
  .tab{
    // background: #f5f5f5;
    display: flex;
    height: 80rpx;
    .item{
      line-height: 80rpx;
      text-align: center;
      width: 33.33%;
      position: relative;
      &.active{
        color: #f2270c
      }
      &.active::after{
        content: '';
        position: absolute;
        left: 50%;
        margin-left: -60rpx;
        bottom: 0;
        width: 120rpx;
        height: 4rpx;
        background: #f2270c;
      }
    }
  }
}
// 商品列表
.contentList{
  padding: 12rpx 20rpx 0;
  background: #ffffff;
  .barTitle {
    width: 100%;
    height: 56rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .Title-left {
    font-size: 28rpx;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    // font-weight: 800;
    color: #333;
    display: flex;
    align-items: center;
  }
  .icons {
    margin-top: 2rpx;
    font-size: 32rpx;
  }
  .title-content {
    margin-left: 8rpx;
  }
  .Title-right {
    font-size: 24rpx;
    color: #aaa;

    img {
      width: 20rpx;
      height: 20rpx;
      margin-left: 6rpx;
    }
  }
  // 商品样式
  .sublist {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 228rpx;
      box-sizing: border-box;
      padding: 6rpx 0;
      background: #fff;
      margin-bottom: 13rpx;
      margin-right: 13rpx;
      border: 1rpx solid #cdcccc;
      border-radius: 10rpx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      &:nth-child(3n){
        margin-right: 0;
      }
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
}
.all{
  .item{
    padding: 20rpx 20rpx;
    border-bottom: 10rpx solid #eee;
    display: flex;
    &:last-child{
      border-bottom: none;
    }
    .pic{
      width: 160rpx;
      height: 160rpx;
    }
    .item-right{
      padding: 10rpx 0 10rpx 20rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      .price{
        color: #f2270c;
      }
    }
  }
}
// 轮播
  .swiper {
    width: 100%;
    height: 322rpx;
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
    height: 12rpx;
    position: absolute;
    bottom: 20rpx;
    border-radius: 50rpx;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dotsItem{
    width: 12rpx;
    height: 12rpx;
    margin: 0rpx 8rpx;
    border-radius: 50%;
    background-color: #fff;
    transition: all .3s;
  }
  .dotActive{
    width: 12rpx;
    height: 12rpx;
    background-color: #f2270c;
  }
</style>
