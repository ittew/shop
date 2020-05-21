<template>
  <div class="longinPage">
    <!-- 搜索框 -->
    <div class="search">
        <span class="icon-sousuo"></span>
        <input placeholder="请输入品牌名称">
    </div>
    <div class="right_Letter">
      <div class="Letter_list" v-for="(item,index) in brandData" :key="index" @click="addClassName(index,item.letter)" :class="{active:index == thatnum}">{{item.letter}}</div>
    </div>

    <scroll-view class="longinPage_scroll"  :scroll-y="true" @scroll="scroll" :scroll-into-view="toView" :scroll-with-animation="true">
      <div class="Letter_city" v-for="(item,index) in brandData" :key="index" :id="item.letter" @click="jumpToList(item)">
        <div class="Letter_title">{{item.letter}}</div>
        <div v-for="(item2,index2) in item.childArr" :key="index2" class="letter-list">
          <img :src="item2.img" alt="">
          <div class="brand-name">{{item2.name}}</div>
        </div>
      </div>

    </scroll-view>
  </div>

</template>

<script>

export default {
  data () {
    return {
      brandData: [{
      "letter": "A",
      "childArr": [{
        "linkageid": 110000,
        "letter": "p",
        "name": "苹果",
        "img": 'http://shop.029-smart.com/upload/brand/aca784fb-87de-413c-b1ae-b11b3f630883.jpg'
        }]
      },{
      "letter": "B",
      "childArr": [{
        "linkageid": 110000,
        "letter": "B",
        "name": "戴尔",
        "img": "http://shop.029-smart.com/upload/brand/257b0bbc-d07c-4d49-bcf0-5393a34d1299.jpg"
        },{
        "linkageid": 110000,
        "letter": "B",
        "name": "德峰",
        "img": "http://shop.029-smart.com/upload/brand/a7da11fb-7d22-42e3-978a-69b833803219.jpg"
        }]
      },{
      "letter": "C",
      "childArr": [{
        "linkageid": 110000,
        "letter": "C",
        "name": "戴尔",
        "img": "http://shop.029-smart.com/upload/brand/257b0bbc-d07c-4d49-bcf0-5393a34d1299.jpg"
        },{
        "linkageid": 110000,
        "letter": "C",
        "name": "德峰",
        "img": "http://shop.029-smart.com/upload/brand/a7da11fb-7d22-42e3-978a-69b833803219.jpg"
        }]
      },{
      "letter": "D",
      "childArr": [{
        "linkageid": 110000,
        "letter": "D",
        "name": "戴尔",
        "img": "http://shop.029-smart.com/upload/brand/257b0bbc-d07c-4d49-bcf0-5393a34d1299.jpg"
        },{
        "linkageid": 110000,
        "letter": "D",
        "name": "德峰",
        "img": "http://shop.029-smart.com/upload/brand/a7da11fb-7d22-42e3-978a-69b833803219.jpg"
        }]
      },{
      "letter": "E",
      "childArr": [{
        "linkageid": 110000,
        "letter": "E",
        "name": "戴尔",
        "img": "http://shop.029-smart.com/upload/brand/257b0bbc-d07c-4d49-bcf0-5393a34d1299.jpg"
        },{
        "linkageid": 110000,
        "letter": "E",
        "name": "德峰",
        "img": "http://shop.029-smart.com/upload/brand/a7da11fb-7d22-42e3-978a-69b833803219.jpg"
        }]
      },{
      "letter": "F",
      "childArr": [{
        "linkageid": 110000,
        "letter": "F",
        "name": "戴尔",
        "img": "http://shop.029-smart.com/upload/brand/257b0bbc-d07c-4d49-bcf0-5393a34d1299.jpg"
        },{
        "linkageid": 110000,
        "letter": "F",
        "name": "德峰",
        "img": "http://shop.029-smart.com/upload/brand/a7da11fb-7d22-42e3-978a-69b833803219.jpg"
        }]
      },{
      "letter": "G",
      "childArr": [{
        "linkageid": 110000,
        "letter": "G",
        "name": "戴尔",
        "img": "http://shop.029-smart.com/upload/brand/257b0bbc-d07c-4d49-bcf0-5393a34d1299.jpg"
        },{
        "linkageid": 110000,
        "letter": "G",
        "name": "德峰",
        "img": "http://shop.029-smart.com/upload/brand/a7da11fb-7d22-42e3-978a-69b833803219.jpg"
        }]
      }],
      hotCity:[],
      thatnum: 0,
      scrollTop:0,
      toView:'',
    }
  },
  mounted() {
  },
  methods: {
    scroll(e) {
      // console.log(e.mp.detail.scrollTop)
    },
    addClassName (index,id) {
      wx.showToast({
        title: id,
        icon: 'none',
        duration: 2000
      })
      this.thatnum = index;
      for (let i = 0; i < this.brandData.length; ++i) {
        if (this.brandData[i].letter == id) {
          this.toView= this.brandData[i].letter
          // console.log(this.toView)
          break
        }
      }
    },
    jumpToList(val) {
       wx.showToast({
        title: val.letter+'跳转',
        icon: 'none',
        duration: 2000
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
  img {
    width: 102rpx;
    height: 102rpx;
    border: 2rpx solid #e5e5e5;
    margin-top:12rpx;
  }
  .brand-name {
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
