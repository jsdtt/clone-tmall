<template>
  <div class="tm-mobile-page">
    <tm-header :bgRed = "headerBg"></tm-header>
    <div class="tm-mobile-content" id="J_MobileCon">
      <banner-con></banner-con>
      <top-nav-con></top-nav-con>
      <hot-point-con></hot-point-con>
      <calendar-card-con></calendar-card-con>
      <rush-title :cardTitle="'必抢'" :titleColor="'#FF2E2E'" :lineColor="'#F6B7B7'" :imgUrl="'https://img.alicdn.com/tps/i3/TB1z5R9LXXXXXa5XFXXpu65FpXX-22-26.png_2200x2200Q30s0.jpg'"></rush-title>
      <rush-card-type1></rush-card-type1>
      <rush-title :cardTitle="'潮流酷玩'" :titleColor="'#4A84E2'" :lineColor="'#BECFEC'" :imgUrl="'https://img.alicdn.com/tps/i3/TB1jreQLpXXXXaxXpXXdNLcGpXX-36-42.png_760x760Q30s0.jpg'"></rush-title>
      <rush-card-type2 :cons="type2s"></rush-card-type2>
      <rush-title :cardTitle="'品牌特卖'" :titleColor="'#FF8000'" :lineColor="'#FFCC99'" :imgUrl="'https://img.alicdn.com/tps/i3/TB1x91TLpXXXXcBXXXXgBrbGpXX-36-36.png_760x760Q30s0.jpg'"></rush-title>
      <rush-card-type2 :cons="type3s"></rush-card-type2>
      <rush-title :cardTitle="'品牌资讯'" :titleColor="'#009F8A'" :lineColor="'#B4E1DC'" :imgUrl="'https://img.alicdn.com/tps/i4/TB1vBu1LpXXXXXtXXXXuv2kGFXX-39-39.png_760x760Q30s0.jpg'"></rush-title>
      <rush-card-type2 :cons="type4s"></rush-card-type2>
      <rush-card-type2 :cons="insertBanner"></rush-card-type2>
      <rush-title :cardTitle="'国际海淘'" :titleColor="'#8828DD'" :lineColor="'#CAB9D9'" :imgUrl="'https://img.alicdn.com/tps/i3/TB1h7mwLpXXXXb9XVXX8zTyHXXX-48-33.png_760x760Q30s0.jpg'"></rush-title>
      <rush-card-type2 :cons="type5s"></rush-card-type2>
    </div>
    <loader v-if="loader"></loader>
  </div>
</template>
<script>
  import TmHeader from './header/Header.vue'
  import Loader from './loading/Loader.vue'
  import BannerCon from './banner/BannerCon.vue'
  import TopNavCon from './topNav/TopNavCon.vue'
  import HotPointCon from './hotPointCon/HotPointCon.vue'
  import CalendarCardCon from './calendarCard/CalendarCardCon.vue'
  import RushTitle from './rushCard/RushCardTitle.vue'
  import RushCardType1 from './rushCard/RushCard_Type1.vue'
  import RushCardType2 from './rushCard/RushCard_Type2.vue'

  export default {
    name: 'tmPage',
    components: {
      TmHeader,
      Loader,
      BannerCon,
      TopNavCon,
      HotPointCon,
      CalendarCardCon,
      RushTitle,
      RushCardType1,
      RushCardType2
    },
    data () {
      return {
        loader: true,
        touchMoveStartPoint: 0,
        headerBg: false,
        type2s: [
          'https://img.alicdn.com/tps/i1/TB16M4JPVXXXXbTaXXXM0z2PXXX-372-453.jpg_760x760Q30s0.jpg',
          'https://img.alicdn.com/tps/i1/TB1MhMRPFXXXXacaXXXM0z2PXXX-372-453.jpg_760x760Q30s0.jpg',
          'https://img.alicdn.com/bao/upload/TB19zEVOXXXXXb0aXXXM0z2PXXX-372-453.jpg_760x760Q30s0.jpg'
        ],
        type3s: [
          'https://img.alicdn.com/tps/i1/TB1PJJfPVXXXXXRXFXXG5FDFpXX-561-330.jpg_760x760Q30s0.jpg',
          'https://img.alicdn.com/bao/uploaded/TB1rvHGPpXXXXXJXXXXSutbFXXX.jpg_760x760Q30s0.jpg'
        ],
        type4s: [
          'https://img.alicdn.com/tps/i1/TB1p2AAPFXXXXX1aXXXocn9PXXX-372-522.jpg_760x760Q30s0.jpg',
          'https://img.alicdn.com/bao/uploaded/TB1NMGePVXXXXXSXpXXSutbFXXX.jpg_760x760Q30s0.jpg',
          'https://img.alicdn.com/tps/i1/TB1yShcPVXXXXX8XXXXocn9PXXX-372-522.jpg_760x760Q30s0.jpg'
        ],
        insertBanner: ['https://img.alicdn.com/bao/uploaded/TB1Aio4PpXXXXb4XpXXSutbFXXX.jpg_760x760Q30s0.jpg'],
        type5s: [
          'https://img.alicdn.com/tps/i1/1000005020548252428/TB2LF3dgbBkpuFjy1zkXXbSpFXa_!!0-2-jupush.png_760x760Q30s0.jpg',
          'https://img.alicdn.com/bao/upload/TB1OJswPpXXXXXRXFXXVoDZPXXX-372-441.jpg_760x760Q30s0.jpg',
          'https://img.alicdn.com/tps/i1/TB1BnhNPVXXXXXvXVXXVoDZPXXX-372-441.jpg_760x760Q30s0.jpg'
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        let mobileCon = document.querySelector('#J_MobileCon')
        let bannerCon = document.querySelector('#J_topNavCon')
        // 1秒后隐藏loader
        window.setTimeout(() => {
          this.loader = false
          window.scrollTo(0,0)
        },500)
        // 滚动监听
        mobileCon.addEventListener('touchstart',(event) => {
          event = event || window.event
          this.touchMoveStartPoint = event.touches[0].screenY
        })
        mobileCon.addEventListener('touchmove', (event) => {
          // console.log(`client:${event.touches[0].clientY}====screen${event.touches[0].screenY},====page${event.touches[0].pageY}`)
          if (this.touchMoveStartPoint - event.touches[0].screenY >= bannerCon.clientHeight) {
            // 只能从顶部拉下来才能隐藏、如果一开始就在中间呢？
            this.headerBg = true
          }else {
            this.headerBg = false
          }
        })
      })
    }
  }
</script>
<style lang="scss">
.tm-mobile-page {
  position: relative;
  min-width: 320px;
  overflow: hidden;
  font-size: 12px;
}
.tm-mobile-content {
  // height: 1000px;
  background-color: #f0f0f0;
}
.mui-flex {
  display: flex !important;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -o-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  &>.cell{
    -webkit-box-flex: 1;
    flex: 1;
    width: 0;
    flex-basis:  0;
    max-width: 100%;
    display: block;
    position: relative;
    padding: 0 !important;
  }
}

</style>