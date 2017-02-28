<template>
  <div class="module-cn j_tmall_rushCardForH5">
    <div class="layout-type2-con">
      <div class="j_exposure"></div>
      <ul class="mui-flex">
        <li class="cell" v-for="item of type41List.slice(0,4)">
          <a href="" class="component type41">
            <div class="title">{{item.title}}</div>
            <img :src="item.imgUrl" alt="">
            <span class ="price">{{'¥ '+Math.floor(parseFloat(item.price))}}</span>
            <span class="sale-point">{{'¥ '+Math.floor(parseFloat(item.reservePrice))}}</span>
          </a>
        </li>
      </ul>
      <ul class="mui-flex">
        <li class="cell" v-for="item of type41List.slice(4,8)">
          <a href="" class="component type41">
            <div class="title">{{item.title}}</div>
            <img :src="item.imgUrl" alt="">
            <span class ="price">{{'¥ '+Math.floor(parseFloat(item.price))}}</span>
            <span class="sale-point">{{'¥ '+Math.floor(parseFloat(item.reservePrice))}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RushCardType1',
  data () {
    return {
      type41List: [{"animFlag":"false","type":"41","reservePrice":"399.00","imgUrl":"//gju4.alicdn.com/tps/i4/1385905011796960716/TB2V_ZlXJhvOuFjSZFBXXcZgFXa_!!0-juitemmedia.jpg","pageParam":"scm=","title":"今日必抢","price":"119.00","style":{"bgColor":"#FFFFFF","margin":"[0, 0.5, 0.5, 0]"},"syncIds":"1024,39128388155","ck":"POS_4295","action":"https://pages.tmall.com/wow/huanxin/act/biqiang-weex?wh_weex=true&abtest=_AB-LR1374-PR1374&pos=1&abbucket=_AB-M1374_B1&acm=201701130.1003.1.1482894&scm=&syncIds=1024,39128388155","extInfo":"today_biqiang","industryId":"1024"},{"ctrClickParam":"tpp_scm=1007.13704.68562.100200300000000;tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;clkinfo=1_0_201611244_4001_pin_7406470_36777526548_cd_0_0;hId=4001;scm=1003.1.201701130.OTHER_4001_1482894","animFlag":"false","type":"41","reservePrice":"5776.0","imgUrl":"//img.alicdn.com/bao/upload/TB1TGtOOFXXXXa6XVXXE799_VXX-800-800.jpg","title":"巨超值","pageParam":"tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;tpp_scm=1007.13704.68562.100200300000000;clkinfo=1_0_201611244_4001_pin_7406470_36777526548_cd_0_0;hId=4001;scm=1003.1.201701130.OTHER_4001_1482894","price":"5776.0","style":{"bgColor":"#FFFFFF","margin":"[0, 0.5, 0.5, 0]"},"syncIds":"0,36777526548","ck":"POS_4296","action":"https://pages.tmall.com/wow/huanxin/act/biqiang-weex?wh_weex=true&abtest=_AB-LR1374-PR1374&pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc&pos=2&abbucket=_AB-M1374_B1&acm=201701130.1003.1.1482894&scm=1007.13704.68562.100200300000000&syncIds=0,36777526548","industryId":"0","exposureParam":"//ac.mmstat.com/1.gif?tpp_scm=1007.13704.68562.100200300000000&tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc"},{"ctrClickParam":"tpp_scm=1007.13704.68562.100200300000000;tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;clkinfo=3_0_201611244_4007_pin_7464416_538594059451_cd_0_0;hId=4007;scm=1003.1.201701130.OTHER_4007_1482894","animFlag":"false","type":"41","reservePrice":"2308.0","imgUrl":"//img.alicdn.com/bao/upload/TB1dv1BOFXXXXaSXXXXE799_VXX-800-800.jpg","title":"进口必抢","pageParam":"tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;tpp_scm=1007.13704.68562.100200300000000;clkinfo=3_0_201611244_4007_pin_7464416_538594059451_cd_0_0;hId=4007;scm=1003.1.201701130.OTHER_4007_1482894","price":"1500.0","style":{"bgColor":"#FFFFFF","margin":"[0, 0.5, 0.5, 0]"},"syncIds":"64,538594059451","ck":"POS_4297","action":"https://pages.tmall.com/wow/huanxin/act/biqiang-weex?wh_weex=true&abtest=_AB-LR1374-PR1374&pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc&pos=3&abbucket=_AB-M1374_B1&acm=201701130.1003.1.1482894&scm=1007.13704.68562.100200300000000&syncIds=64,538594059451","industryId":"64","exposureParam":"//ac.mmstat.com/1.gif?tpp_scm=1007.13704.68562.100200300000000&tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc"},{"ctrClickParam":"tpp_scm=1007.13704.68562.100200300000000;tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;clkinfo=2_0_201611244_4003_cd_7447195_536999117030_cd_0_0;hId=4003;scm=1003.1.201701130.OTHER_4003_1482894","animFlag":"false","type":"41","reservePrice":"869.0","imgUrl":"//img.alicdn.com/bao/upload/TB1Nk5eOFXXXXbxXFXXE799_VXX-800-800.jpg","title":"型男咖","pageParam":"tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;tpp_scm=1007.13704.68562.100200300000000;clkinfo=2_0_201611244_4003_cd_7447195_536999117030_cd_0_0;hId=4003;scm=1003.1.201701130.OTHER_4003_1482894","price":"349.0","style":{"bgColor":"#FFFFFF","margin":"[0, 0,0.5,0.5]"},"syncIds":"8,536999117030","ck":"POS_4298","action":"https://pages.tmall.com/wow/huanxin/act/biqiang-weex?wh_weex=true&abtest=_AB-LR1374-PR1374&pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc&pos=4&abbucket=_AB-M1374_B1&acm=201701130.1003.1.1482894&scm=1007.13704.68562.100200300000000&syncIds=8,536999117030","industryId":"8","exposureParam":"//ac.mmstat.com/1.gif?tpp_scm=1007.13704.68562.100200300000000&tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc"},{"ctrClickParam":"tpp_scm=1007.13704.68562.100200300000000;tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;clkinfo=4_0_201611244_4002_cd_7452707_41641020396_cd_0_0;hId=4002;scm=1003.1.201701130.OTHER_4002_1482894","animFlag":"false","type":"41","reservePrice":"598.0","imgUrl":"//img.alicdn.com/bao/upload/TB1FVGuOFXXXXaoXpXXE799_VXX-800-800.jpg","title":"女神范","pageParam":"tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;tpp_scm=1007.13704.68562.100200300000000;clkinfo=4_0_201611244_4002_cd_7452707_41641020396_cd_0_0;hId=4002;scm=1003.1.201701130.OTHER_4002_1482894","price":"269.0","style":{"bgColor":"#FFFFFF","margin":"[0, 0.5, 0.5, 0]"},"syncIds":"5,41641020396","ck":"POS_4299","action":"https://pages.tmall.com/wow/huanxin/act/biqiang-weex?wh_weex=true&abtest=_AB-LR1374-PR1374&pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc&pos=5&abbucket=_AB-M1374_B1&acm=201701130.1003.1.1482894&scm=1007.13704.68562.100200300000000&syncIds=5,41641020396","industryId":"5","exposureParam":"//ac.mmstat.com/1.gif?tpp_scm=1007.13704.68562.100200300000000&tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc"},{"ctrClickParam":"tpp_scm=1007.13704.68562.100200300000000;tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;clkinfo=5_0_201611244_4006_cd_7531633_521269224173_cd_0_0;hId=4006;scm=1003.1.201701130.OTHER_4006_1482894","animFlag":"false","type":"41","reservePrice":"234.0","imgUrl":"//img.alicdn.com/bao/upload/TB15i1lOFXXXXXLXFXXE799_VXX-800-800.jpg","title":"焕新家","pageParam":"tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;tpp_scm=1007.13704.68562.100200300000000;clkinfo=5_0_201611244_4006_cd_7531633_521269224173_cd_0_0;hId=4006;scm=1003.1.201701130.OTHER_4006_1482894","price":"79.0","style":{"bgColor":"#FFFFFF","margin":"[0, 0.5, 0.5, 0]"},"syncIds":"42,521269224173","ck":"POS_4300","action":"https://pages.tmall.com/wow/huanxin/act/biqiang-weex?wh_weex=true&abtest=_AB-LR1374-PR1374&pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc&pos=6&abbucket=_AB-M1374_B1&acm=201701130.1003.1.1482894&scm=1007.13704.68562.100200300000000&syncIds=42,521269224173","industryId":"42","exposureParam":"//ac.mmstat.com/1.gif?tpp_scm=1007.13704.68562.100200300000000&tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc"},{"ctrClickParam":"tpp_scm=1007.13704.68562.100200300000000;tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;clkinfo=6_0_201611244_4004_cd_7437720_40968114589_cd_0_0;hId=4004;scm=1003.1.201701130.OTHER_4004_1482894","animFlag":"false","type":"41","reservePrice":"64.0","imgUrl":"//img.alicdn.com/bao/upload/TB1vMR4OFXXXXbtXVXXE799_VXX-800-800.jpg","title":"爱囤货","pageParam":"tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;tpp_scm=1007.13704.68562.100200300000000;clkinfo=6_0_201611244_4004_cd_7437720_40968114589_cd_0_0;hId=4004;scm=1003.1.201701130.OTHER_4004_1482894","price":"36.9","style":{"bgColor":"#FFFFFF","margin":"[0, 0.5, 0.5, 0]"},"syncIds":"2,40968114589","ck":"POS_4301","action":"https://pages.tmall.com/wow/huanxin/act/biqiang-weex?wh_weex=true&abtest=_AB-LR1374-PR1374&pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc&pos=7&abbucket=_AB-M1374_B1&acm=201701130.1003.1.1482894&scm=1007.13704.68562.100200300000000&syncIds=2,40968114589","industryId":"2","exposureParam":"//ac.mmstat.com/1.gif?tpp_scm=1007.13704.68562.100200300000000&tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc"},{"ctrClickParam":"tpp_scm=1007.13704.68562.100200300000000;tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;clkinfo=7_0_201611244_4005_cd_7547512_521181590196_cd_0_0;hId=4005;scm=1003.1.201701130.OTHER_4005_1482894","animFlag":"false","type":"41","reservePrice":"29.8","imgUrl":"//img.alicdn.com/bao/upload/TB1gG5mOFXXXXXcXFXXE799_VXX-800-800.jpg","title":"美食家","pageParam":"tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc;tpp_scm=1007.13704.68562.100200300000000;clkinfo=7_0_201611244_4005_cd_7547512_521181590196_cd_0_0;hId=4005;scm=1003.1.201701130.OTHER_4005_1482894","price":"25.8","style":{"bgColor":"#FFFFFF","margin":"[0, 0,0.5,0.5]"},"syncIds":"7,521181590196","ck":"POS_4302","action":"https://pages.tmall.com/wow/huanxin/act/biqiang-weex?wh_weex=true&abtest=_AB-LR1374-PR1374&pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc&pos=8&abbucket=_AB-M1374_B1&acm=201701130.1003.1.1482894&scm=1007.13704.68562.100200300000000&syncIds=7,521181590196","industryId":"7","exposureParam":"//ac.mmstat.com/1.gif?tpp_scm=1007.13704.68562.100200300000000&tpp_pvid=1d0f1421-6ce3-48f7-8d7d-cf45cb3ddedc"}]
    }
  }
}
</script>
<style lang="scss" scoped>
a.component.type41 {
  background-color: #fff;
  display: block;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  .title {
    color: #2F2F2F;
    font-size: 13px;
    margin-top: 5px;
  }
  img {
    display: block;
    width: 84%;
    margin: 8px auto;
  }
  .price, .sale-point{
    display: inline-block;
    color: #ff2e2e;
    font-size: 10px;
    height: 14px;
    line-height: 14px;
    margin-bottom: 8px;
    vertical-align: bottom;
    letter-spacing: -.5px;
  }
  .sale-point {
    color: #9b9b9b;
    padding-right: 1px;
    margin-left: 2px;
    position: relative;
    text-decoration: line-through;
  }
}
</style>