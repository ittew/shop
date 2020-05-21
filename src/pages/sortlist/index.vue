<template>
  <div class="sortlist">
    <div class="sort_con" v-for="(item, index) in sortList" :key="index">
      <div class="sort_li">
        {{item.name}}
        <span class="sorty icon-youjiantou"></span>
      </div>
      <div class="sublist" v-if="item.list">
        <span class="sublist_li" v-for="(it, ind) in item.list" :key="ind">
          {{it.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { host } from "../../utils";
export default {
  data () {
    return {
      sortList: [
        {
          name: '全部商品'
        },
        {
          name: '移动办公'
        },
        {
          name: '办公用品',
          list: [{
            name: '打印机',
          },{
            name: '复合机',
          },{
            name: '扫描仪',
          },{
            name: '复合机',
          }],
        },
        {
          name: '网络设备',
          list: [{
            name: '服务器CPU',
          },{
            name: '内存',
          }],
        },
        {
          name: '移动办公3'
        },
        {
          name: '储存',
          list: [{
            name: '磁带',
          },{
            name: '超融合基础架构',
          },{
            name: '单控制器',
          }],
        },
        {
          name: '软件',
          list: [{
            name: '政府-党建云',
          },{
            name: '蓝凌-OA',
          },{
            name: '智能多端小程序',
          },{
            name: '智慧校园智能广告监测',
          },{
            name: '办公企业营销',
          }],
        },
        {
          name: '网络设备',
          list: [{
            name: '无线网卡',
          },{
            name: '有线网卡',
          },{
            name: '网络盒子',
          },{
            name: 'Android2',
          },{
            name: 'IOS1'
          }],
        }
      ]
    }
  },

  components: {},

  onLoad: function() {
    // 获取商品类型
    // this.getTypelist()
  },

  methods: {
    // 获取商品类型
    getTypelist() {
      let data = {}
      wx.request({
        url: host + '/goodsCates.htm',
        method: 'post',
        data: data,
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function(res) {
          console.log(res.data)
          console.log(res.data.success)
          this.sortsList = res.data.data.childs
          console.log(this.sortsList)
        }
      });
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
