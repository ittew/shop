<template>
  <div class="index">
    <!-- 搜索框 -->
    <div class="search-box">
       <div class="search">
        <span class="icon-sousuo"></span>
          <input placeholder="请输入您要搜索的商品关键字">
      </div>
    </div>
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
          <div class="dotsItem" :class="i == swiperCurrent ? ' dotActive' : ''"></div>
        </div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="hot-swiper">
      <span class="icon-laba"></span>
      <swiper class="swiper-container " vertical autoplay="true" interval="3000" circular="true" duration="500">
        <block v-for="(item, index) in hotData" :key="index" >
          <swiper-item class="swiper-item" @click="jumpNewDetail">
            <div class="item ellipsis">{{item}}</div>
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
    <!-- 推荐品牌 -->
    <div class="contentList grayLine" v-for="(v,i) in brandList" :key="i">
      <div class="barTitle">
        <div class="Title-left"><span class="icons-recommend" :class="v.icon" :style="{color:v.color}"></span><span class="title-content">{{v.title}}</span></div>
      </div>
      <div class="brand-sublist">
        <div v-for="(subitem, subindex) in v.goodsList" :key="subindex" @click="jumpDetail('brand')">
          <img :src="subitem.url" alt="">
        </div>
      </div>
    </div>
    <!-- 推荐商品 -->
    <div class="contentList grayLine" v-for="(v,i) in recommdContent" :key="i">
      <div class="barTitle">
        <div class="Title-left"><span class="icons-recommend" :class="v.icon" :style="{color:v.color}"></span><span class="title-content">{{v.title}}</span></div>
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
    <!-- 商品内容 -->
    <div class="contentList grayLine" v-for="(v,i) in content" :key="i">
      <div class="barTitle">
        <div class="Title-left"><span class="no">{{i+1}}</span><span class="icons icon-caidanlan"></span><span class="title-content">{{v.title}}</span></div>
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
    <!-- 底部版权 -->
    <div class="bottom">
      <p>陕西省广播电视信息网络股份有限公司</p>
      <p>免费电话：400-168-8686</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperCurrent: 0,
      banner: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334928377&di=4459f41b31641fcb6396e05cdb26b638&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1465624788%2C2344864837%26fm%3D214%26gp%3D0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2193748227,3257246483&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334971812&di=d63eeb5deb9ee52b1bb4cc35bd60307d&imgtype=0&src=http%3A%2F%2Fmy.dabangong.com%2Fimages%2F201501%2Fgoods_img%2F4247_P_1422167830200.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335011823&di=e029ad038155e81e40141036243682b4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F25%2F20170825101131_JSMer.jpeg',
        'http://img1.imgtn.bdimg.com/it/u=2565047914,1661736801&fm=26&gp=0.jpg'
      ],
      hotData: ['5G新基建如何激活万亿市场？','5G领衔新基建，网络建设走在前——我国5G网络建设分析','5G“新基建”，新场景、新模式'],
      iconList: [
        {
          id: 0,
          url:'/static/images/icon/qq10.png',
          name: '促销活动'
        },
        {
          id: 1,
          url:'/static/images/icon/qq2.png',
          name: '特价'
        },
        {
          id: 2,
          url:'/static/images/icon/qq16.png',
          name: '品牌'
        },
        {
          id: 3,
          url:'/static/images/icon/qq13.png',
          name: '推荐'
        }
      ],
      recommdContent: [
        {
          color: '#FF69B4',
          icon: 'icon-31_xinpin',
          title: '推荐商品',
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
            }
          ]
        }
      ],
      brandList: [
        {
          color: '#f2270c',
          icon:'.icon-hot',
          title: '推荐商家',
          goodsList: [
              {
              url:'/static/images/huawei.jpg'
            },{
              url:'/static/images/lianxiang.jpg'
            },{
              url:'/static/images/hongji.jpg'
            }
          ]
        }
      ],
      content: [
        {
          color: '#FF69B4',
          icon: 'icon-31_xinpin',
          title: '电脑',
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
            }
          ]
        },
        {
          color: '#f2270c',
          icon:'icon-tuijian',
          title: '移动办公',
          goodsList: [
            {
              url:'http://www.sbn.shop/images/201812/thumb_img/10655_thumb_G_1544730403475.jpg',
              name:'晨光签字笔12支',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4462_thumb_G_1515625311762.jpg',
              name:'得力9375薄型复写纸(蓝)(25.5*18.5cm)-16K',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201812/thumb_img/10655_thumb_G_1544730403475.jpg',
              name:'晨光签字笔12支',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201812/thumb_img/10655_thumb_G_1544730403475.jpg',
              name:'晨光签字笔12支',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4462_thumb_G_1515625311762.jpg',
              name:'得力9375薄型复写纸(蓝)(25.5*18.5cm)-16K',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201812/thumb_img/10655_thumb_G_1544730403475.jpg',
              name:'晨光签字笔12支',
              retail_price:'59'
            }
          ]
        },{
          color: '#00BFFF',
          icon:'icon-bangong0',
          title: '信息安全',
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
          title: '网络设备',
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
            },{
              url:'http://www.sbn.shop/images/201807/thumb_img/9578_thumb_G_1530731976148.jpg',
              name:'宏碁（Acer）TMP249 14英寸便携商务办公高清手提电脑',
              retail_price:'59'
            }
          ]
        },{
          color: '#FA8072',
          icon:'icon-shenghuoguan',
          title: '存储',
          goodsList: [
            {
              url:'http://www.sbn.shop/images/201801/thumb_img/4611_thumb_G_1515696301432.jpg',
              name:'德国爱慕莎(emsa)冰凌缤纷系列 进口玻璃保冷壶冷水壶1L 绿色',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4927_thumb_G_1516303472078.jpg',
              name:'膳魔师（THERMOS）儿童保温杯 吸管杯小孩学饮杯婴儿训练杯宝宝便携防漏不锈钢水杯',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4611_thumb_G_1515696301432.jpg',
              name:'德国爱慕莎(emsa)冰凌缤纷系列 进口玻璃保冷壶冷水壶1L 绿色',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4927_thumb_G_1516303472078.jpg',
              name:'膳魔师（THERMOS）儿童保温杯 吸管杯小孩学饮杯婴儿训练杯宝宝便携防漏不锈钢水杯',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4611_thumb_G_1515696301432.jpg',
              name:'德国爱慕莎(emsa)冰凌缤纷系列 进口玻璃保冷壶冷水壶1L 绿色',
              retail_price:'59'
            },{
              url:'http://www.sbn.shop/images/201801/thumb_img/4927_thumb_G_1516303472078.jpg',
              name:'膳魔师（THERMOS）儿童保温杯 吸管杯小孩学饮杯婴儿训练杯宝宝便携防漏不锈钢水杯',
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
    categoryList (id) {
      let url = ''
      switch (id) {
        case 0:
        case 1:
        case 3:
          url = '/pages/list/main'
          break;
        case 2:
          url = '/pages/brandList/main'
          break;

        default:
          break;
      }
      wx.navigateTo({
        url
      })
    },
    jumpNewDetail() {
      wx.navigateTo({
        url: '/pages/newdetail/main'
      })
    },
    gotoList(item) {
      if(item=='brand') {
        wx.navigateTo({
          url: '/pages/brandList/main'
        })
      } else {
        wx.switchTab({
          url: '/pages/category/main'
        })
      }
    },
    // 跳转到商品详情
    jumpDetail(item) {
      if(item=='brand') {
        wx.navigateTo({
          url: '/pages/store/main'
        })
      } else {
        wx.navigateTo({
          url: '/pages/good/main'
        })
      }
    }
  }
}
</script>

<style lang="scss">
  page {
    background: #f4f4f4;
    height: 100%;
  }
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
.icon-sousuo {
  margin-top: 3rpx;
}
.search input{
  width: 90%;
  height: 100%;
  font-size: 24rpx;
  margin-left: 12rpx;
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
  .hot-swiper {
    height: 60rpx;
    display: flex;
    margin-bottom: 12rpx;
    background: #fff;
    padding-left: 15rpx;
    .swiper-container {
      flex: 1;
      height: 60rpx;
      line-height: 60rpx;
    }
    .icon-laba {
      color:#f2270c;
      margin: 10rpx 6rpx 0 0;
      font-size: 40rpx;
    }
    .item {
      width: 98%;
    }
  }
  .grayLine {
    margin: 12rpx 0;
  }
  // icon
  .icon {
    display: flex;
    flex-wrap: wrap;
    padding:4rpx 0 20rpx;
    background: #ffffff;
    div {
      width: 25%;
      text-align: center;
      img {
        margin-top: 16rpx;
        height: 92rpx;
        width: 92rpx;
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
    padding: 12rpx 15rpx 0;
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
    font-size: 30rpx;
    // font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    // font-weight: 800;
    color: #333;
    display: flex;
    align-items: center;
    padding-left: 6rpx;
    .no {
      color: #f2270c;
      font-size: 30rpx;
    }
  }
  .brand-sublist {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 225rpx;
      padding: 10rpx 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 8rpx;
      img {
        width: 100%;
        height: 145rpx;
        border-radius: 8rpx;
      }
    }
  }
  .icons-recommend {
    font-size: 30rpx;
    margin-top:2rpx;
  }
  .icons {
    color: #f2270c;
    font-size: 28rpx;
    margin-top: 4rpx;
    // margin-left: -1rpx;
  }
  .title-content {
    margin-left: 16rpx;
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
    padding: 10rpx 0;

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
.bottom {
  text-align: center;
  margin-top: 20rpx;
  margin-bottom: 12rpx;
  p {
    font-size: 18rpx;
    color: #999;
  }
}
</style>
