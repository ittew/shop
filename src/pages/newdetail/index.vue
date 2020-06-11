<template>
  <div class="newcon">
    <p class="newcon_tit">{{titile}}</p>
    <p v-html="newcon" class="newcon_con"></p>
  </div>
</template>

<script>
import { request, getQuery } from "../../utils";
export default {
  data () {
    return {
      newid: '',
      titile: '',
      newcon: ''
    }
  },

  onLoad: function() {
  },
  mounted () {
    if (getQuery()['id']) {
      this.newid = getQuery()['id']
    }
    // 获取咨询详情数据
    this.getNewcon()
  },

  methods: {
    // 获取咨询详情数据
    async getNewcon() {
      let data = {
        'id': this.newid // id 咨询对应的id  用于获取咨询详情数据
      }
      let url = '/newsContent.htm'
      let body = await request(url, 'get', data)
      if (body.success) {
        this.titile = body.data.title
        this.newcon = body.data.content
      }
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
      font-size: 38rpx;
      text-align: center;
      padding-bottom: 30rpx;
    }
    .newcon_con {
      font-size: 30rpx;
      text-indent:2em;
      line-height: 40rpx;
    }
  }
</style>
