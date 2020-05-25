<template>
  <div class="sortlist">
    <div class="sort_con" v-for="(item, index) of sortList" :key="index">
      <div class="sort_li">
        {{item.childs[index].className}}
        <span class="sorty icon-youjiantou"></span>
      </div>
      <div class="sublist" v-if="item.childs[index].childs">
        <span class="sublist_li" v-for="(it, ind) in item.childs[index].childs" :key="ind">
          {{it.className}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "../../utils";
export default {
  data () {
    return {
      sortList: []
    }
  },

  components: {},

  onLoad: function() {
    // 获取商品类型
    this.getTypelist()
  },

  methods: {
    // 获取商品类型 接口不对，测试用，应调用商家分类接口
    async getTypelist() {
      let data = {}
      let url = '/goodsCates.htm'
      let body = await request(url, 'get', data)
      if (body.success) {
        this.sortList = body.data
        console.log(this.sortList)
      }
    },
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
    background: #ffffff;
    height: 100%;
  }
  .sortlist {
    .sort_li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      color: #999;
      font-size: 30rpx;
      border-bottom: 1rpx solid #efefef;
      padding: 25rpx 30rpx 15rpx 30rpx;
      .sorty {
        color: #666;
        font-size: 30rpx;
      }
    }
    .sublist {
      padding: 20rpx;
      .sublist_li {
        color:#999;
        background-color: #f4f4f4;
        padding: 14rpx;
        margin: 8rpx;
        display: inline-block;
      }
    }
  }
</style>
