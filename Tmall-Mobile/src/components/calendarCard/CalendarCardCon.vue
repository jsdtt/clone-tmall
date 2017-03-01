<template>
  <div class="module-cn" id="J_Tmall_calendarCardCon">
    <div class="layout-type10-con swiper-container-horizontal">
      <div class="swiper-wrapper" id="J_swiperWrapper" @touchstart="touchBegin($event)" @touchmove="touchIng($event)" @touchend="touchOver">
        <div class="swiper-slide" v-for="slide of cardList">
          <a href="" class="component type1" >
            <img :src="slide.imgUrl" alt=""></a>
        </div>
        <div class="swiper-slide-append more"> 
          <a href=""><img src="https://img.alicdn.com/tps/i4/TB1H4.tLXXXXXaWXpXXAIDdRFXX-44-216.png_2200x2200Q30s0.jpg" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CalendarCard',
  data () {
    return {
      cardList: [{
        "imgUrl": "https://img.alicdn.com/tps/TB1m4C4PFXXXXXRaXXXXXXXXXXX-528-326.jpg",
        "pageParam": "scm=1003.2.201512183-1.OTHER_1488622315157_1554530",
        "title": "挪威海产节",
        "style": {
          "height": "109"
        }
        },
        {
          "imgUrl": "https://img.alicdn.com/tps/TB1ZY4xPFXXXXaTXpXXXXXXXXXX-528-326.jpg",
          "pageParam": "scm=1003.2.201512183-2.OTHER_1485904237581_1536590",
          "title": "燕之屋超级品牌日",
          "style": {
            "height": "109"
          }
        },
        {
          "imgUrl": "https://img.alicdn.com/tps/TB1GCS_PFXXXXX_apXXXXXXXXXX-528-326.png_2200x2200Q30s0.jpg",
          "pageParam": "scm=1003.2.201512183-3.OTHER_1487490697941_1554056",
          "title": "家装节-同城购会场",
          "style": {
            "height": "109"
          }
        }],
      touchBeginPoint: -999,
      touchTranslatePx: 0,
      touchFinalTransX: 0
    }
  },
  methods: {
    touchBegin (event) {
      this.touchBeginPoint = event.touches[0].screenX
    },
    touchIng (event) {
      let moveScreen = event.touches[0].screenX,
          moveTarget = document.querySelector('#J_swiperWrapper'),
          movePx 
      
      moveTarget.style['transition-duration'] = '0ms'
      if (this.touchTranslatePx <= 0){
        movePx = this.touchTranslatePx - (this.touchBeginPoint - moveScreen)
      }else {
        movePx = this.touchTranslatePx + (this.touchBeginPoint - moveScreen)
      }
      // movePx = movePx > 0 ? 0 : movePx
      moveTarget.style['transform'] = `translate3d(${movePx}px, 0,0)`
      this.touchFinalTransX = movePx
    },
    touchOver (event) {
      let moveTarget = document.querySelector('#J_swiperWrapper')
      this.touchTranslatePx = this.touchFinalTransX
      if (this.touchFinalTransX < -120){
        moveTarget.style['transition-duration'] = '300ms'
        moveTarget.style['transform'] = `translate3d(-119px, 0,0)`
        this.touchTranslatePx = -119
      }
      if (this.touchFinalTransX > 0) {
        moveTarget.style['transition-duration'] = '300ms'
        moveTarget.style['transform'] = `translate3d(0, 0,0)`
        this.touchTranslatePx = 0
      }     
    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  }
}
</script>
<style scoped lang="scss">
.layout-type10-con .swiper-wrapper {
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  height: 111px;
  transition-property: transform;
  transition-timing-function: ease-out;
  .swiper-slide {
    flex-shrink: 0;
    position: relative;
    margin: 3px 1px 0 1px;
    height: 108px;
    width: 176px;
    .component {
      display: block;
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
.swiper-slide-append {
  img {
    height: 111px;
    margin-top: 3px;
  }
}
</style>
