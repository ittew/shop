<template>
  <div class="longinPage">
    <!-- 搜索框 -->
    <div class="search">
        <span class="icon-sousuo"></span>
        <input placeholder="请输入品牌名称">
    </div>
    <div class="right_Letter">
      <div class="Letter_list" v-for="(item,index) in brandData" :key="index" @click="addClassName(index,item.first_word)" :class="{active:index == thatnum}">{{item.first_word}}</div>
    </div>

    <scroll-view class="longinPage_scroll"  :scroll-y="true" @scroll="scroll" :scroll-into-view="toView" :scroll-with-animation="true">
      <div class="Letter_city" v-for="(item,index) in brandData" :key="index" :id="item.first_word" @click="jumpToList(item)">
        <div class="Letter_title">{{item.first_word}}</div>
        <div v-for="(item2,index2) in item.childArr" :key="index2" class="letter-list">
          <img src="item2.brandLogo" alt="">
          <div class="brand-name">{{item2.name}}</div>
        </div>
      </div>

    </scroll-view>
  </div>

</template>

<script>
import { request } from "../../utils"
export default {
  data () {
    return {
      brandData: [],
      hotCity:[],
      thatnum: 0,
      scrollTop:0,
      toView:'',
    }
  },
  mounted() {
    // 获取品牌列表数据
    this.getBrands()
  },
  methods: {
    /**
     * 对数据进行排序和重组
     * @param val 要排序和处理的数据
     */
    handlleData(val) {
      val.sort((a,b) => {
        // var textA = a.first_word.toUpperCase();
        // var textB = b.first_word.toUpperCase();
        // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        return a.first_word.localeCompare(b.first_word)
      })
      let dataInfo = {};
      val.forEach((item, index) => {
        let { first_word } = item;
        if (!dataInfo[first_word]) {
          dataInfo[first_word] = {
            first_word,
            childArr: []
          }
        }
        dataInfo[first_word].childArr.push(item);
      });
      let data = Object.values(dataInfo); // list 转换成功的数据
      return data
    },
    // 获取品牌列表数据
    async getBrands () {
      let data = {}
      let url = '/goodsBrands.htm'
      let body = await request(url, 'post', data)
      if (body.success) {
        this.brandData = this.handlleData(body.data)
        // console.log(this.brandData)
      }
    },
    addClassName (index,id) {
      wx.showToast({
        title: id,
        icon: 'none',
        duration: 2000
      })
      this.thatnum = index;
      for (let i = 0; i < this.brandData.length; ++i) {
        if (this.brandData[i].first_word == id) {
          this.toView= this.brandData[i].first_word
          break
        }
      }
    },
    jumpToList(val) {
      wx.navigateTo({
        url: '/pages/list/main'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
page {
}
 /* 搜索框 */
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
.longinPage{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  padding-right: 9%;
  box-sizing: border-box;
  overflow: hidden;
}
.longinPage_scroll{
  width: 100%;
  height: 94%;
}
.bottom_text{
  font-size: 20px;
  color: #B5B5B5;
  text-align: center;
}
.right_Letter{
  position: fixed;
  right: 10px;
  top: 80px;
  z-index: 100;
  width: 27px;
  overflow: hidden;
}
.Letter_list{
  width: 27px;
  height: 27px;
  font-size: 14px;
  color: #f2270c;
  text-align: center;
  line-height: 25px;
  margin-bottom: 5px;
}
.head_gps{
  margin-top: 10px;
}
.title{
  font-size: 14px;
  color: #333333;
  margin-bottom: 10px;
}
.city_list{
  width: 96px;
  height: 27px;
  border: 1px solid #CCCBCB;
  border-radius: 2px;
  line-height: 27px;
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #6D6D6D;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.hot_city{
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
}
.Letter_city {
  margin: 12rpx 0;
}
.Letter_title{
  background: #f4f4f4;
  font-size: 26rpx;
  height: 44rpx;
  line-height: 44rpx;
  padding-left: 3%;
}
.letter-list {
  padding-left: 3%;
  display: flex;
  padding-top: 12rpx;
  img {
    width: 196rpx;
    height: 70rpx;
    border: 2rpx solid #e5e5e5;
    border-radius: 10rpx;
  }
  .brand-name {
    height: 70rpx;
    font-size: 26rpx;
    display: flex;
    align-items: center;
  }
}
.brand-name{
  font-size: 30rpx;
  margin-left: 15rpx;
}
.placeholder {
  width: 30%;
  height: 0px;
}
.active{
  background: #f2270c;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
}

/*隐藏滚动条*/
.longinPage_scroll ::-webkit-scrollbar {
  width: 0;
  height: 0;
  color: transparent;
}
</style>
