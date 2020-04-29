<template>
  <div class="category">
    <div class="search" @click="tosearch">
      <div class="ser">
        <span class="icon"></span>
        <span>商品搜索,共239款好物</span>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="iconText" @click="selectitem(item.id,index)" v-for="(item, index) in listData" :class="[index==nowIndex?'active':'']" :key="index">
        {{item.name}}
        </div>
      </div>
      <scroll-view class="right" scroll-y="true">
          <div class="right-content"  :key="index">
            <div class="right-title">{{rightTitle}}</div>
            <div class="bottom">
              <div @click="categoryList(item.id)" v-for="(item,index) in currentList" :key="index" class="item">
                <img :src="item.wap_banner_url" alt="">
                <span>{{item.name}}</span>
              </div>
           </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nowIndex: 0,
      listData: [
        {name: '最新推荐',id:0},
        {name: '啤酒',id:1},
        {name: '白酒',id:2},
        {name: '葡萄酒',id:3}
      ],
      rightTitle: '最新推荐',
      currentList: [],
      detailData:[
        {name: '最新推荐',list: [
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'}
          ]
        },
        {name: '啤酒',list: [
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'啤酒'}
          ]
        },
        {name: '白酒',list: [
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'白酒'}
          ]
        },
        {name: '葡萄酒',list: [
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'},
            {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'葡萄酒'}
          ]
        }
      ]
    }
  },
  beforeMount() {
    this.currentList = this.detailData[0].list
  },
  methods: {
    tosearch(index, id) {
      // wx.navigateTo({ url: "/pages/search/main" });
    },
    async selectitem(id, index) {
      this.nowIndex = index;
      this.currentList = this.detailData[index].list
    },
    categoryList(id) {
      console.log("tiaozhuan");

      // wx.navigateTo({
      //   url: "../categorylist/main?id=" + id
      // });
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .search {
    height: 88rpx;
    // width: 100%;
    padding: 0 30rpx;
    background: #fff;
    display: flex;
    align-items: center;
    border-bottom: 1rpx solid #f1f1f1;
    font-size: 24rpx;
    .ser {
      width: 690rpx;
      height: 56rpx;
      background: #ededed;
      border-radius: 8rpx;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        display: inline-block;
      }

      .icon {
        background: url('http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png') center no-repeat;
        background-size: 100%;
        width: 28rpx;
        height: 28rpx;
        margin-right: 10rpx;
      }
    }
  }
  .content {
    flex: 1;
    background: #fff;
    display: flex;

    .left {
      width: 162rpx;
      height: 100%;
      text-align: center;

      .iconText {
        text-align: center;
        line-height: 90rpx;
        width: 162rpx;
        height: 90rpx;
        color: #333;
        font-size: 28rpx;
        border-left: 6rpx solid #fff;
      }

      .active {
        color: #f2270c;
        // font-size: 36rpx;
        background: #f1f1f1;
        border-left: 6rpx solid #f2270c;
      }
    }

    .right {
      flex: 1;
      border-left: 1rpx solid #fafafa;
      flex: 1;
      height: 100%;
      padding: 36rpx 20rpx 36rpx;
      .right-content {
        font-size: 28rpx;
        font-weight: bold;
      }
      .bottom {
        display: flex; // justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20rpx;
        .item {
          width: 33.33%;
          text-align: center;
          font-size: 22rpx;
          font-weight: 400;
          img {
            height: 120rpx;
            width: 120rpx;
            display: block;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
