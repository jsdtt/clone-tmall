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
      RushCardType1
    },
    data () {
      return {
        loader: true,
        touchMoveStartPoint: 0,
        headerBg: false
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