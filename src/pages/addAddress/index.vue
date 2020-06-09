<template>
  <div class="addaddress">
    <div class="item">
      <input type="text" placeholder="姓名" v-model="trueName">
    </div>
    <div class="item">
      <input type="text" placeholder="手机号码" v-model="mobile">
    </div>
    <div class="item">
      <picker mode="region" @change="bindRegionChange" :value="region" :custom-item="customItem">
        <input type="text" placeholder="省份、城市、区县" v-model="area_id">
      </picker>
    </div>
    <div class="item">
      <input type="text" placeholder="详细地址，如楼道、楼盘号等" v-model="area_info">
    </div>
    <!-- <div class="item itemend">
      <checkbox-group @change="checkboxChange">
        <label class="checkbox">
          <checkbox class="box" value="true" :checked="checked" color="#B4282D" />设置为默认地址
        </label>
      </checkbox-group>
    </div> -->
    <div @click="saveAddress" class="bottom">
      保存
    </div>
  </div>
</template>

<script>
import {request,getQuery} from '../../utils/index'
export default {
  data() {
    return {
      region: [],
      customItem: "全部",
      id: "",
      openId: "",
      res: {},
      trueName: "",
      mobile: "",
      area_id: [],
      area_info: "",
      checked: false,
      id: ''
    }
  },
  onLoad() {
    this.clearData()
    if(getQuery()['id']) {
      this.id = getQuery()['id']
      this.getData()
    }
  },
  methods: {
    async getData () {
      console.log(222)
      let data = {'id':this.id} // 门店IDa
      let url = '/card/address_view.htm'
      let body = await request(url, 'get', data)
      if (body.success) {
        let datas = body.data
        this.trueName = datas.trueName
        this.mobile = datas.mobile
        this.area_id = []
        this.area_info = datas.area_info
      }
    },
    clearData() {
      this.trueName = ''
      this.mobile = ''
      this.area_id = []
      this.area_info = ''
      this.id = ''
    },
    checkboxChange(e) {
      this.checked = e.mp.detail.value[0];
    },
    bindRegionChange(e) {
      let details = e.mp.detail.value
      for(var i=0;i<details.length;i++){
        if(details[i].indexOf('全部')>=0) {
          console.log(i,'000')
          details.splice(i,1)
          i--
        }
      }
      this.area_id = details
    },
    testForm() {
      // console.log(this.area_id.length,'this.trueName')
      let result = true
      let re = /^1\d{10}$/;
      if(!this.trueName) {
        result = false
        this.showToast("请输入收货人姓名")
      }else if(!/^[\w\u4e00-\u9fa5]+$/g.test(this.trueName)) {
        result = false
        this.showToast("收货人包含非法字符")
      }else if(!this.mobile) {
        result = false
        this.showToast("请输入手机号")
      }else if (!re.test(this.mobile)) {
        result = false
        this.showToast("手机号码格式不对，请重新输入")
      }else if (this.area_id.length<=0) {
        result = false
        this.showToast("请选择所在地区")
      }else if(!this.area_info) {
        result = false
        this.showToast("请输入详细地址")
      }
      return result
    },
    showToast(title) {
      wx.showToast({
        title, //提示的内容,
        icon: "none", //图标,
        duration: 2000, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: res => {
        }
      });
    },
    async saveAddress() {
        let flag = this.testForm()
        let data = {
          id: this.id,
          store_id: '',
          zip: '',
          telephone: '',
          trueName: this.trueName,
          mobile: this.mobile,
          area: {
          "addTime": "",
          "areaName": this.area_id,
          "childs": [],
          "common": "",
          "id": "",
          "level": "",
          "sequence": "",
          },
          area_info: this.area_info
        };
        if(flag) {
          let url = '/card/cart_address_save.htm'
          let body = await request(url, 'get', data)
          console.log(body,'body')
          if (body.success) {
            wx.showToast({
              title: "添加成功", //提示的内容,
              icon: "success", //图标,
              duration: 2000, //延迟时间,
              mask: true, //显示透明蒙层，防止触摸穿透,
              success: res => {
                wx.navigateTo({
                  url: "/pages/address/main"
                });
              }
            });
          }
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.addaddress {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  .item {
    width: 690rpx;
    height: 90rpx;
    line-height: 90rpx;
    margin: 0 auto;
    padding: 20rpx 0;
    border-bottom: 1rpx solid #f4f4f4;
    input {
      width: 100%;
      height: 100%;
      font-size: 30rpx;
    }
  }
  .checkbox {
    font-size: 30rpx;
  }
  .itemend {
    margin-top: 15rpx;
    display: flex;
    justify-content: space-between;
    border: none;
    div:nth-child(2) {
      color: green;
    }
  }
  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    height: 100rpx;
    line-height: 100rpx;
    background: #B4282D;
    color: #fff;
    font-size: 32rpx;
  }
}
</style>
