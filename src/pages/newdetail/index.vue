<template>
  <div class="newcon">
    <p class="newcon_tit">5G新基建如何激活万亿市场？</p>
    <p class="newcon_con">与前几代移动通信网络相比，5G网络在接入速度和连接数量等方面有飞跃发展。5G已不单单是一项移动通信技术，它与大数据、人工智能、云计算、区块链等技术结合起来，不仅会催变出一个万物智联的时代，还将加速传统产业的升级和裂变，催生产业新业态和新的商业模式。面对5G新基建的狂欢，运营商如何“理性”支配5G开支？同时，三大运营商与中国铁塔2020年近两千亿元的开支又将转化成真正的价值，激活万亿市场？</p>
  </div>
</template>

<script>
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
  },

  methods: {
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
  .newcon {
    padding: 20rpx 30rpx;
    p {
      color: #333;
    }
    .newcon_tit {
      font-size: 35rpx;
      text-align: center;
      padding-bottom: 10rpx;
    }
    .newcon_con {
      font-size: 30rpx;
      text-indent: 2em;
      line-height: 40rpx;
    }
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
