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
        <div class="iconText" @click="selectitem(index)" v-for="(item, index) in listData" :class="[index==nowIndex?'active':'']" :key="index">
        {{item.className}}
        </div>
      </div>
      <scroll-view class="right" scroll-y="true">
          <div class="right-content">
            <div class="right-title">
              <div class="title-left">
                <div class="title-info" :class="{'title-active': index==titleIndex}" @click="changeProduct(index)" v-for="(item,index) in currentTitle" :key="index">{{item.className}}</div>
              </div>
              <div class="title-more" @click="showMore" v-if="currentTitle.length > 3">
                <span v-if="!flag" class="icon-xia"></span>
                <span  v-else class="icon-shangjiantou-cu"></span>
              </div>
            </div>
            <div class="bottom" v-if="currentList.length > 0">
              <div @click="categoryList(v.id)" v-for="(v,i) in currentList" :key="i" class="item">
                <img :src="v.goods_main_photo" alt="">
                <span class="ellipsis goodsname">{{v.goods_name}}</span>
              </div>
           </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
import { post, get } from "../../utils"
export default {
  data() {
    return {
      nowIndex: 0,
      listData: [],
      currentList: [],
      currentTitle: [],
      titleIndex: 0,
      oldArr: [],
      flag:false
    }
  },
  mounted () {
    this.getGoodsCates()
  },
  methods: {
    // 点击更多，title的数量展示
    showMoreData(i) {
      if (this.listData[i].childs.length > 0) {
         let tempArr = JSON.parse(JSON.stringify(this.listData[i].childs))
        if(this.listData[i].childs.length >= 3 && !this.flag) {
          this.oldArr = tempArr.splice(0, 3)
          this.currentTitle = this.oldArr
          this.getGoodsByCateId(this.currentTitle[this.titleIndex].id)
        }else {
          this.currentTitle = this.listData[i].childs
          this.getGoodsByCateId(this.currentTitle[this.titleIndex].id)
        }
      }
    },
    tosearch(index, id) {
      // wx.navigateTo({ url: "/pages/search/main" });
    },
    selectitem(index) {
      console.log(this.listData[index])
      this.nowIndex = index
      this.titleIndex = 0
      this.currentTitle = this.listData[index].childs
      this.showMoreData(index)
    },
    // 展示更多
    showMore() {
      this.flag = !this.flag
      if(this.flag) {
        this.currentTitle = this.listData[this.nowIndex].childs
      }else{
        this.currentTitle = this.oldArr
        this.titleIndex = 0
      }
    },
    changeProduct(index) {
      this.titleIndex = index
      this.showMoreData(this.nowIndex)
    },
    categoryList(id) {
      wx.navigateTo({
        url: "/pages/good/main?id=" + id
      });
    },
    // 获取分类数据
    async getGoodsCates() {
      let data = {}
      let url = '/goodsCates.htm'
      let body = await post(url, data)
      console.log(body, 'getGoodsCates')
      if (body.success) {
        if (body.data && body.data.length > 0) {
          this.listData = body.data
          this.showMoreData(0)
        }
      }
    },
    // 获取二级分类数据
    async getGoodsByCateId(id) {
      id = '1'
      let data = {
        gc_id: id
      }
      let url = '/goodsByCateId.htm'
      let body = await get(url, data)
      console.log(body, 'getGoodsByCateId')
      if (body.success) {
        if (body.data && body.data.length > 0) {
          this.currentList = body.data
        }
      }
    }
  }
}
</script>

<style lang="scss">
page {
  // background: #fafafa;
}
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
        font-size: 30rpx;
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
      padding: 20rpx 20rpx 36rpx;
      .right-content {
        font-size: 26rpx;
        .right-title {
          display: flex;
          .title-left {
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            .title-info {
              border: 1rpx solid #dbdbdb;
              border-radius: 10rpx;
              box-sizing: border-box;
              padding: 8rpx;
              margin: 10rpx 10rpx 0 0;
              font-size: 26rpx;
            }
            .title-active {
              color:#f2270c;
              border: 1rpx solid #f2270c;
            }
          }
          .title-more {
            width: 10%;
            margin-top: 18rpx;
          }
        }
      }
      .bottom {
        display: flex; // justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 40rpx;
        border-top: 1rpx solid #ddd;
        padding-top: 40rpx;
        .item {
          width: 33.33%;
          text-align: center;
          font-size: 24rpx;
          font-weight: 400;
          img {
            height: 110rpx;
            width: 120rpx;
            display: block;
            margin: 0 auto;
            border: 1rpx solid #ddd;
          }
        }
        .goodsname{
          margin: 20rpx 0;
        }
      }
    }
  }
}
</style>
