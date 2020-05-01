<template>
  <div class="coupon-list">
    <div class="list" v-for="(v,i) in couponData" :key="i">
      <div class="left">
        <img :src="v.url" alt="">
        <div class="info">
          <p class="title">{{v.title}}</p>
          <p class="deadline">{{v.deadline}}</p>
        </div>
      </div>
      <div class="right" :class="{'goUse': v.type==1}">
        <p>￥{{v.price}}</p>
        <div v-if="v.type==0">已使用</div>
        <div  :class="{'goUse': v.type==1}" v-if="v.type==1" >去使用</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      couponData: [
        {url: '/static/images/conpon.png',title:"红酒红酒红酒",deadline:'2020.01.01-2020.5.20',price:500,type:1},
        {url: '/static/images/conpon.png',title:"红酒红酒红酒",deadline:'2020.01.01-2020.5.20',price:500,type:1},
        {url: '/static/images/conpon.png',title:"红酒红酒红酒",deadline:'2020.01.01-2020.5.20',price:500,type:0},
        {url: '/static/images/conpon.png',title:"红酒红酒红酒",deadline:'2020.01.01-2020.5.20',price:500,type:0}
      ]
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {},
};
</script>

<style lang="scss">
page {
  background: #efeff4!important;
  height: 100%;
}

.coupon-list {
  .list {
    width: 700rpx;
    height: 178rpx;
    display: flex;
    margin: 20rpx auto;
    .left {
      width: 500rpx;
      background:#fff;
      border-radius: 10rpx 0 0 10rpx;
      display: flex;
      padding: 42rpx 0 42rpx 32rpx ;
      img {
        width: 96rpx;
        height: 86rpx;
        margin-left: 32rpx;
      }
      .info {
        margin-left: 32rpx;
      }
      .title {
       font-size: 32rpx;
      }
      .deadline {
        margin-top: 20rpx;
        color: #ccc;
        font-size: 24rpx;
      }
    }
    .right {
      width: 200rpx;
      background:#999;
      border-radius: 0 10rpx 10rpx 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        font-size: 32rpx;
      }
      div {
        width: 120rpx;
        height: 48rpx;
        line-height: 48rpx;
        border-radius: 20rpx;
        text-align: center;
        background: #fff;
        margin-top: 20rpx;
        font-size: 28rpx;
        margin-left:10rpx;
      }
    }
    .goUse {
      background: #e51e1c;
      color: #e51e1c;
    }
  }
}

</style>
