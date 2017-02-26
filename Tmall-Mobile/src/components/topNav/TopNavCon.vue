<template>
  <div class="module-cn" id="J_topNavCon">
    <div class="layout-type2-con">
      <ul class="mui-flex">
        <li class="cell" v-for="item of topNavConResult.slice(0,5)">
          <a href="" class="component"><img :src="item.imgUrl" alt="">{{item.title}}</a>
        </li>
      </ul>
      <ul class="mui-flex">
        <li class="cell" v-for="item of topNavConResult.slice(5,10)">
          <a href="" class="component"><img :src="item.imgUrl" alt="">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopNavCon',
  data() {
    return {
      topNavConResult: []
    }
    
  },
  mounted() {
    this.$nextTick(() => {
      // 返回默认值、正常可以是像服务器拿到数据
      this.topNavConResult = [{"type":"3","typeKey":"icon_jifen","imgUrl":"https://img.alicdn.com/tps/i4/TB1gWFLKFXXXXXLXXXXwu0bFXXX.png","pageParam":"scm=1003.64.201506140121-1.OTHER_1478008579892_351380","title":"积分乐园","style":{"margin":"[4,0,0,0]"},"ck":"POS_4011","web-action":"https://pages.tmall.com/wh/tmall/jifen/act/get-point?pos=1&acm=201506140121-1.1003.64.351380&scm=1003.64.201506140121-1.OTHER_1478008579892_351380","action":"https://pages.tmall.com/wh/tmall/jifen/act/get-point?pos=1&acm=201506140121-1.1003.64.351380&scm=1003.64.201506140121-1.OTHER_1478008579892_351380","bizId":"LJF"},{"isHot":"false","type":"3","imgUrl":"https://img.alicdn.com/tps/i4/TB1nfRqKFXXXXXvXVXXwu0bFXXX.png","pageParam":"scm=1003.64.201506140121-2.OTHER_1488985866095_351384","title":"充值中心","style":{"margin":"[4,0,0,0]"},"ck":"POS_4012","web-action":"https://h5.m.taobao.com/app/cz/cost.html?subSource=tmcz_1&pos=2&acm=201506140121-2.1003.64.351384&scm=1003.64.201506140121-2.OTHER_1488985866095_351384","action":"https://h5.m.taobao.com/app/cz/cost.html?subSource=tmcz_1&pos=2&acm=201506140121-2.1003.64.351384&scm=1003.64.201506140121-2.OTHER_1488985866095_351384","bizId":"CZ"},{"type":"3","imgUrl":"https://img.alicdn.com/tps/i4/TB1D4VmKFXXXXcRXVXXwu0bFXXX.png","pageParam":"scm=1003.64.201506140121-3.OTHER_1479050990359_351387","title":"天猫国际","style":{"margin":"[4,0,0,0]"},"ck":"POS_4013","web-action":"https://pages.tmall.com/wow/import/act/index?wh_weex=true&pos=3&acm=201506140121-3.1003.64.351387&scm=1003.64.201506140121-3.OTHER_1479050990359_351387","action":"https://pages.tmall.com/wow/import/act/index?wh_weex=true&pos=3&acm=201506140121-3.1003.64.351387&scm=1003.64.201506140121-3.OTHER_1479050990359_351387","bizId":"ICON5"},{"type":"3","imgUrl":"https://img.alicdn.com/tps/i4/TB1ONhvKFXXXXb_XFXXwu0bFXXX.png","pageParam":"scm=1003.64.201506140121-4.OTHER_1476413068062_384796","title":"聚划算","style":{"margin":"[4,0,0,0]"},"ck":"POS_4014","web-action":"//tb.cn/x/ju?pos=4&acm=201506140121-4.1003.64.384796&scm=1003.64.201506140121-4.OTHER_1476413068062_384796","action":"//tb.cn/x/ju?pos=4&acm=201506140121-4.1003.64.384796&scm=1003.64.201506140121-4.OTHER_1476413068062_384796","bizId":"JFS"},{"isHot":"false","type":"3","imgUrl":"https://gw.alicdn.com/tps/TB1J.e2KVXXXXafXFXXXXXXXXXX-160-160.png","pageParam":"scm=1003.64.201506140121-5.OTHER_1482326153504_692765","title":"天猫超市","style":{"margin":"[4,0,0,0]"},"ck":"POS_4015","web-action":"https://chaoshi.m.tmall.com/?pos=5&acm=201506140121-5.1003.64.692765&_ig=shoumao&scm=1003.64.201506140121-5.OTHER_1482326153504_692765","action":"https://chaoshi.m.tmall.com/?pos=5&acm=201506140121-5.1003.64.692765&_ig=shoumao&scm=1003.64.201506140121-5.OTHER_1482326153504_692765","bizId":"ICON4"},{"isHot":"false","type":"3","imgUrl":"https://img.alicdn.com/tps/i4/TB1RRdgKFXXXXaOaXXXwu0bFXXX.png","pageParam":"scm=1003.64.201506140121-6.OTHER_1484516268788_463153","title":"免费试用","ck":"POS_4016","web-action":"https://pages.tmall.com/wow/baihuo/act/trial?pos=6&acm=201506140121-6.1003.64.463153&scm=1003.64.201506140121-6.OTHER_1484516268788_463153","action":"https://pages.tmall.com/wow/baihuo/act/trial?pos=6&acm=201506140121-6.1003.64.463153&scm=1003.64.201506140121-6.OTHER_1484516268788_463153","bizId":"ICON6"},{"isHot":"false","type":"3","imgUrl":"https://img.alicdn.com/tps/i4/TB1cs46NpXXXXadXpXXwu0bFXXX.png","pageParam":"scm=1003.64.201506140121-7.OTHER_1483180495247_944198","title":"尤物","ck":"POS_4017","web-action":"https://pages.tmall.com/wow/brand/act/youwushouye?pos=7&acm=201506140121-7.1003.64.944198&scm=1003.64.201506140121-7.OTHER_1483180495247_944198","action":"https://pages.tmall.com/wow/brand/act/youwushouye?pos=7&acm=201506140121-7.1003.64.944198&scm=1003.64.201506140121-7.OTHER_1483180495247_944198","bizId":"ICON7"},{"isHot":"false","type":"3","imgUrl":"https://img.alicdn.com/tps/i4/TB1jwdFKFXXXXc9XXXXwu0bFXXX.png","pageParam":"scm=1003.64.201506140121-8.OTHER_1483244750380_757527","title":"粉丝趴","ck":"POS_4018","web-action":"https://pages.tmall.com/wow/fsp/act/fans-index?pos=8&acm=201506140121-8.1003.64.757527&scm=1003.64.201506140121-8.OTHER_1483244750380_757527","action":"https://pages.tmall.com/wow/fsp/act/fans-index?pos=8&acm=201506140121-8.1003.64.757527&scm=1003.64.201506140121-8.OTHER_1483244750380_757527","bizId":"ICON8"},{"isHot":"false","type":"3","imgUrl":"https://img.alicdn.com/tps/TB13HjaPFXXXXX7apXXXXXXXXXX-160-160.png","pageParam":"scm=1003.2.201506140121-9.OTHER_1488387553987_1554791","title":"天猫生鲜","ck":"POS_4019","web-action":"https://pages.tmall.com/wow/act/17013/jzjslsx?spm=a312d.7832050.0.0.qzK4RS&pos=9&acm=201506140121-9.1003.2.1554791&scm=1003.2.201506140121-9.OTHER_1488387553987_1554791","action":"https://pages.tmall.com/wow/act/17013/jzjslsx?spm=a312d.7832050.0.0.qzK4RS&pos=9&acm=201506140121-9.1003.2.1554791&scm=1003.2.201506140121-9.OTHER_1488387553987_1554791","bizId":"ICON9"},{"isHot":"false","type":"3","imgUrl":"https://img.alicdn.com/tps/i4/TB12oXAKFXXXXcDXpXXwu0bFXXX.png","pageParam":"scm=1003.64.201506140121-10.OTHER_1481549362122_509723","title":"分类","ck":"POS_4020","web-action":"https://s.m.tmall.com/m/category.htm?pos=10&acm=201506140121-10.1003.64.509723&scm=1003.64.201506140121-10.OTHER_1481549362122_509723","action":"https://s.m.tmall.com/m/category.htm?pos=10&acm=201506140121-10.1003.64.509723&scm=1003.64.201506140121-10.OTHER_1481549362122_509723","bizId":"ICON10"
      }]
    })
  }
}
</script>
<style scoped lang="scss">
.layout-type2-con {
  background-color: #fff;
  .component {
    display: block;
    color: #052B28;
    font-size: 12px;
    line-height: normal;
    height: auto;
    text-align: center;
    margin: 4px;
    img {
      height: 36px;
      width: 36px;
      display: block;
      margin: 0 auto 5px;
    }
  }
}

</style>
