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
        <div class="bottom">
          <div @click="categoryList(item.id)" v-for="(item,index) in detailData" :key="index" class="item">
            <img :src="item.wap_banner_url" alt="">
            <span>{{item.name}}</span>
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
      currentNav: 0,
      listData: [
        {name: '最新推荐',id:0},
        {name: '啤酒',id:1},
        {name: '白酒',id:2},
        {name: '葡萄酒',id:3}
      ],
      detailData: [
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},{wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},{wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},{wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'},
        {wap_banner_url: "http://yanxuan.nosdn.127.net/2e2fb4f2856a021bbcd1b4c8400f2b06.png",name:'999'}
      ]
    }
  },
  methods: {
    tosearch(index, id) {
      // wx.navigateTo({ url: "/pages/search/main" });
    },
    async selectitem(id, index) {
      this.nowIndex = index;
      this.detailData.forEach(v => {
        v.name--
      });
      console.log(this.detailData)
      // const data = await get("/category/currentaction", {
      //   id: id
      // });
      // this.detailData = data.data.currentOne;
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
    border-bottom: 1rpx solid #ededed;
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
        color: #ab2b2b;
        font-size: 36rpx;
        border-left: 6rpx solid #ab2b2b;
      }
    }

    .right {
      flex: 1;
      border-left: 1rpx solid #fafafa;
      flex: 1;
      height: 100%;
      padding: 0 30rpx 0 30rpx;

      .bottom {
        display: flex; // justify-content: space-between;
        flex-wrap: wrap;

        .item {
          width: 33.33%;
          text-align: center;
          margin-bottom: 20rpx;

          img {
            height: 144rpx;
            width: 144rpx;
            display: block;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>
