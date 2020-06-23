<script>
import { getOpenid, getWxCode } from './utils'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
      // var userInfo = {
      //   openId: "oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",
      //   nickName: "何玉硕",
      //   gender: 1,
      //   language: "zh_CN",
      //   city: "Changping",
      //   province: "Beijing",
      //   country: "China",
      //   avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbWFEIJj8IpGeHM7dGic1aTFZALjWcMm9ltWfFiaQfVRYticWBfgGfzXWMt2EkJWiaicPtftHAlWxUibxQ/132",
      //   watermark: { timestamp: 1535513485, appid: "wx601ce71bde7b9add" }
      // };
      // var openId = userInfo.openId;
      // wx.setStorageSync("userInfo", userInfo);
      // wx.setStorageSync("openId", openId);
      // console.log("app created and cache logs by setStorageSync");
      //获取openid

      // if (!wx.getStorageSync('openid')) {
      //   getOpenid()
      // }
      //获取code
      if (!wx.getStorageSync('wxCode')) {
        getWxCode()
      }
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
view,text{
  font-size: 28rpx;
  color: #333;
}
/***超出一行用...省略***/
.ellipsis {
  overflow: hidden!important;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
/***超出俩行用...省略***/
.ellipsis-two {
  overflow: hidden!important;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
view,scroll-view,swiper,swiper-item,movable-area,movable-view,cover-view,cover-image,icon,text,rich-text,progress,button,checkbox-group,checkbox,form,input,label,picker,picker-view,radio-group,radio,slider,switch,textarea,navigator,functional-page-navigator,image,video,camera,live-player,live-pusher,map,canvas,open-data,web-view,ad{
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
/* 图标库 */
@font-face {
  font-family: 'iconfont';  /* project id 1788983 */
  src: url('//at.alicdn.com/t/font_1788983_3nvpk60sqgq.eot');
  src: url('//at.alicdn.com/t/font_1788983_3nvpk60sqgq.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1788983_3nvpk60sqgq.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1788983_3nvpk60sqgq.woff') format('woff'),
  url('//at.alicdn.com/t/font_1788983_3nvpk60sqgq.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1788983_3nvpk60sqgq.svg#iconfont') format('svg');
}
[class*="icon-"] {
  font-family: "iconfont" !important;
  font-size: 16px;
  display: inline-block;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-sousuo:before {
  content: "\e61e";
}

.icon-caidanlan:before {
  content: "\e637";
}

.icon-caidan:before {
  content: "\e601";
}

.icon-hot:before {
  content: "\e61d";
}

.icon-laba:before {
  content: "\e600";
}

.icon-shangjiantou-cu:before {
  content: "\e61b";
}

.icon-shenghuoyongpin:before {
  content: "\e60e";
}

.icon-zuoji:before {
  content: "\e683";
}

.icon-daifahuo:before {
  content: "\e68e";
}

.icon-daifukuan:before {
  content: "\e61a";
}

.icon-dingdanyiwancheng:before {
  content: "\e63a";
}

.icon-dingdan:before {
  content: "\e604";
}

.icon-shouji:before {
  content: "\e6bd";
}

.icon-weibiaoti2fuzhi02:before {
  content: "\e61f";
}

.icon-xia:before {
  content: "\e62d";
}

.icon-haoping:before {
  content: "\e62e";
}

.icon-guanzhu:before {
  content: "\e618";
}

.icon-shijian:before {
  content: "\e64b";
}

.icon-ico_commodity_defaul:before {
  content: "\e655";
}

.icon-gonggao:before {
  content: "\e734";
}

.icon-jineqiandaiyueshangjin:before {
  content: "\e61c";
}

.icon-jine_m:before {
  content: "\e667";
}

.icon-chenggong:before {
  content: "\e64e";
}

.icon-shibai:before {
  content: "\e64f";
}

.icon-shuxian:before {
  content: "\e638";
}

.icon-wallet-fill:before {
  content: "\e645";
}

.icon-shijian1:before {
  content: "\e7ce";
}

.icon-xialajiantou_huaban1:before {
  content: "\e67e";
}

.icon-bangong0:before {
  content: "\e617";
}

.icon-tuijian:before {
  content: "\e62a";
}

.icon-shumaweixiu:before {
  content: "\e62b";
}

.icon-31_xinpin:before {
  content: "\e619";
}

.icon-shenghuoguan:before {
  content: "\e615";
}

.icon-weibiaoti18:before {
  content: "\e62f";
}

.icon-weibiaoti13:before {
  content: "\e641";
}

.icon-youjiantou:before {
  content: "\e628";
}

.icon-bangzhuzhongxin:before {
  content: "\e616";
}

.icon-lianxikefu:before {
  content: "\e646";
}

.icon-Opinion:before {
  content: "\e613";
}

.icon-dizhi:before {
  content: "\e640";
}

.icon-shoucang:before {
  content: "\e7b3";
}

.icon-wodezuji:before {
  content: "\e614";
}

.icon-coupon:before {
  content: "\e609";
}

.icon-order:before {
  content: "\e63c";
}

.icon-dianhua:before {
  content: "\e602";
}


</style>
