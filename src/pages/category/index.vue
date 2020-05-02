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
        <div class="iconText" @click="selectitem(item.id,index)" v-for="(item, index) in listData" :class="[index==nowIndex?'active':'']" :key="index">
        {{item.name}}
        </div>
      </div>
      <scroll-view class="right" scroll-y="true">
          <div class="right-content">
            <div class="right-title">
              <div class="title-left">
                <div class="title-info"  :class="{'title-active': index==titleIndex}" @click="changeProduct(index)" v-for="(item,index) in currentTitle" :key="index">{{item.name}}</div>
              </div>
              <div class="title-more" @click="showMore">
                <span v-if="!flag" class="icon-xia"></span>
                <span  v-else class="icon-shangjiantou-cu"></span>
              </div>
            </div>
            <div class="bottom">
              <div @click="categoryList(item.id)" v-for="(v,i) in currentList" :key="i" class="item">
                <img :src="v.wap_banner_url" alt="">
                <span class="ellipsis">{{v.name}}</span>
              </div>
           </div>
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nowIndex: 0,
      listData: [
        {name: '最新推荐',id:0},
        {name: '办公用品',id:1},
        {name: '电子数码',id:2},
        {name: '生活用品',id:3}
      ],
      currentList: [],
      currentTitle: [],
      titleIndex: 0,
      oldArr: [],
      flag:false,
      detailData: [{
        data: [
          {name: '办公用纸',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4295_thumb_G_1515549377415.jpg",name:'得力3210标价纸(白) 10筒装'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4454_thumb_G_1515625026529.jpg",name:'得力9374薄型复写纸(蓝)(12.7*18.5cm)-32K 5盒装'},
              {wap_banner_url: "http://www.sbn.shop/images/201709/thumb_img/3_thumb_G_1504810950151.jpg",name:'得力（deli）7361 珊瑚海70g A4复印纸 5包/箱'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4295_thumb_G_1515549377415.jpg",name:'得力3210标价纸(白) 10筒装'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4454_thumb_G_1515625026529.jpg",name:'得力9374薄型复写纸(蓝)(12.7*18.5cm)-32K 5盒装'},
              {wap_banner_url: "http://www.sbn.shop/images/201709/thumb_img/3_thumb_G_1504810950151.jpg",name:'得力（deli）7361 珊瑚海70g A4复印纸 5包/箱'}
            ]
          },
          {name: '办公耗材',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg",name:'惠普（HP）CH563Z 802 黑色墨盒'},
              {wap_banner_url: "http://www.sbn.shop/images/201908/thumb_img/10772_thumb_G_1564595802738.jpg",name:'扬帆耐立打印机碳粉YFHC'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg",name:'惠普（HP）CH563Z 802 黑色墨盒'},
               {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg",name:'惠普（HP）CH563Z 802 黑色墨盒'},
              {wap_banner_url: "http://www.sbn.shop/images/201908/thumb_img/10772_thumb_G_1564595802738.jpg",name:'扬帆耐立打印机碳粉YFHC'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg",name:'惠普（HP）CH563Z 802 黑色墨盒'}
            ]
          },{name: '办公文具',list: [
              {wap_banner_url: 'http://www.sbn.shop/images/201812/thumb_img/10655_thumb_G_1544730403475.jpg',
              name:'晨光签字笔12支'},
              {wap_banner_url: 'http://www.sbn.shop/images/201801/thumb_img/4462_thumb_G_1515625311762.jpg',
              name:'得力9375薄型复写纸(蓝)(25.5*18.5cm)-16K'},
              {wap_banner_url: 'http://www.sbn.shop/images/201812/thumb_img/10655_thumb_G_1544730403475.jpg',
              name:'晨光签字笔12支'},
              {wap_banner_url: 'http://www.sbn.shop/images/201812/thumb_img/10655_thumb_G_1544730403475.jpg',
              name:'晨光签字笔12支'},
              {wap_banner_url: 'http://www.sbn.shop/images/201801/thumb_img/4462_thumb_G_1515625311762.jpg',
              name:'得力9375薄型复写纸(蓝)(25.5*18.5cm)-16K'},
              {wap_banner_url: 'http://www.sbn.shop/images/201812/thumb_img/10655_thumb_G_1544730403475.jpg',
              name:'晨光签字笔12支'}
            ]
          },{name: '办公设备/办公电器',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201711/thumb_img/3199_thumb_G_1510081697755.jpg",name:'联想（Lenovo） M7675DXF 黑白激光一体机(打印 复印 扫描 传真'},
              {wap_banner_url: "http://www.sbn.shop/images/201711/thumb_img/3212_thumb_G_1510084201087.jpg",name:'松下（Panasonic）KX-MB2123CNB 激光传真机多功能打印一体机'},
              {wap_banner_url: "http://www.sbn.shop/images/201709/thumb_img/897_thumb_G_1506279238919.jpg",name:'惠普（HP）LaserJet Pro MFP M128fp黑白激光一体机 打印复印扫描传真'},
              {wap_banner_url: "http://www.sbn.shop/images/201711/thumb_img/3199_thumb_G_1510081697755.jpg",name:'联想（Lenovo） M7675DXF 黑白激光一体机(打印 复印 扫描 传真'},
              {wap_banner_url: "http://www.sbn.shop/images/201711/thumb_img/3212_thumb_G_1510084201087.jpg",name:'松下（Panasonic）KX-MB2123CNB 激光传真机多功能打印一体机'},
              {wap_banner_url: "http://www.sbn.shop/images/201709/thumb_img/897_thumb_G_1506279238919.jpg",name:'惠普（HP）LaserJet Pro MFP M128fp黑白激光一体机 打印复印扫描传真'}
            ]
          },{name: '其他纸制品',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg",name:'惠普（HP）CH563Z 802 黑色墨盒'},
              {wap_banner_url: "http://www.sbn.shop/images/201908/thumb_img/10772_thumb_G_1564595802738.jpg",name:'扬帆耐立打印机碳粉YFHC'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg",name:'111'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg",name:'惠普（HP）CH563Z 802 黑色墨盒'},
              {wap_banner_url: "http://www.sbn.shop/images/201908/thumb_img/10772_thumb_G_1564595802738.jpg",name:'扬帆耐立打印机碳粉YFHC'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/2887_thumb_G_1514836622108.jpg",name:'111'}
            ]
          }
        ]
      },{
        data: [
          {name: '二级分类1',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'}
            ]
          },
          {name: '二级分类1',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'}
            ]
          },
          {name: '二级分类1',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'}
            ]
          },
          {name: '二级分类1',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'}
            ]
          }
        ]
      },{
        data: [
          {name: '最新推荐',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'}
            ]
          },
          {name: '办公用品',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'}
            ]
          },
          {name: '电子数码',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'}
            ]
          },
          {name: '生活用品',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'}
            ]
          }
        ]
      },{
        data: [
          {name: '最新推荐',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'最新推荐'}
            ]
          },
          {name: '办公用品',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'办公用品'}
            ]
          },
          {name: '电子数码',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'电子数码'}
            ]
          },
          {name: '生活用品',list: [
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},{wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'},
              {wap_banner_url: "http://www.sbn.shop/images/201801/thumb_img/4323_thumb_G_1515608877709.jpg",name:'生活用品'}
            ]
          }
        ]
      }]
    }
  },
  beforeMount() {
    this.currentList = this.detailData[0].data[0].list
    this.showMoreData(0)
  },
  methods: {
    // 点击更多，title的数量展示
    showMoreData(i) {
      this.oldArr = this.detailData[i].data.slice(0)
      if(this.detailData[i].data.length>=3) {
        this.oldArr.splice(3)
        this.currentTitle = this.oldArr
      }else {
        this.currentTitle = this.detailData[i].data
      }
    },
    tosearch(index, id) {
      // wx.navigateTo({ url: "/pages/search/main" });
    },
    selectitem(id, index) {
      this.nowIndex = index;
      this.titleIndex = 0
      // this.currentTitle = this.detailData[index].data
      this.currentList = this.detailData[index].data[index].list
      this.flag = false
      this.showMoreData(index)
    },
    // 展示更多
    showMore() {
      this.flag = !this.flag
      if(this.flag) {
        this.currentTitle = this.detailData[0].data
      }else{
        this.currentTitle = this.oldArr
      }
      // console.log(this.flag,this.currentTitle,this.oldArr)
    },
    changeProduct(index) {
      this.currentList = this.currentTitle[index].list
      this.titleIndex = index
      // console.log(this.titleIndex,index)
    },
    categoryList(id) {
      console.log("tiaozhuan");
      // wx.navigateTo({
      //   url: "../categorylist/main?id=" + id
      // });
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
        font-size: 28rpx;
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
        font-size: 28rpx;
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
              padding: 10rpx;
              margin: 10rpx 10rpx 0 0;
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
        .item {
          width: 33.33%;
          text-align: center;
          font-size: 22rpx;
          font-weight: 400;
          margin-top: 20rpx;
          img {
            height: 110rpx;
            width: 120rpx;
            display: block;
            margin: 0 auto;
          }
        }

      }
    }
  }
}
</style>
