<template>
<div class="module-cn" id="J_personal_bannerCon">
  <div class="layout-type-con big-layout j_personal_banner">
    <ul class="mui-flex">
      <li class="cell">
        <div class="component">
          <div class="swiper-wrapper" id="J_SwiperWrapper">
            <a href="" class="swiper-slide" v-for="item of bannerList" :style="{width: adviceWidth + 'px'}">
              <img :src="item" alt="" class="j_SliderBanner" width="100%">
            </a>
          </div>
        </div>
        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet" :class="{'swiper-active': (bulletItem === 0) || (bulletItem === bannerList.length -1)}"></span>
          <span class="swiper-pagination-bullet" v-for="index of 7" :class="{'swiper-active': bulletItem === index }"></span>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'BannerCon',
  props: {
    bannerList: {
      type: Array,
      default () {
        return [
          'https://gw.alicdn.com/imgextra/i3/123/TB22CJ3fZtnpuFjSZFvXXbcTpXa_!!123-0-yamato.jpg_2200x2200Q30s0.jpg',
          'https://img.alicdn.com/imgextra/i1/34/TB2jI2GfOpnpuFjSZFkXXc4ZpXa_!!34-0-yamato.jpg_2200x2200Q30s0.jpg',
          'https://img.alicdn.com/tps/i4/TB1uTaIPFXXXXaDXpXXSutbFXXX.jpg_2200x2200Q30s0.jpg',
          'https://gw.alicdn.com/imgextra/i3/140/TB2DsjJe80kpuFjy1zdXXXuUVXa_!!140-0-yamato.jpg_2200x2200Q30s0.jpg',
          'https://gw.alicdn.com/imgextra/i2/8/TB2WftQeYplpuFjSspiXXcdfFXa_!!8-0-yamato.jpg_2200x2200Q30s0.jpg',
          'https://gw.alicdn.com/imgextra/i2/29/TB2_I.ufNBmpuFjSZFsXXcXpFXa_!!29-0-yamato.jpg_2200x2200Q30s0.jpg',
          'https://gw.alicdn.com/imgextra/i3/139/TB2fx4agipnpuFjSZFIXXXh2VXa_!!139-0-yamato.jpg_2200x2200Q30s0.jpg',
          'https://img.alicdn.com/imgextra/i1/90/TB22IwcftRopuFjSZFtXXcanpXa_!!90-0-yamato.jpg_2200x2200Q30s0.jpg',
          // 最后多加一张第一张的图片
          'https://gw.alicdn.com/imgextra/i3/123/TB22CJ3fZtnpuFjSZFvXXbcTpXa_!!123-0-yamato.jpg_2200x2200Q30s0.jpg'
        ]
      }
    }
  },
  data () {
    return {
      bulletItem: 0,
      adviceWidth: document.documentElement.clientWidth
    }
  },
  mounted () {
    this.$nextTick(() => {
      let swiper = document.querySelector('#J_SwiperWrapper')
      // 设置banner的宽度为屏幕的宽度

      // 滚动Banner定时器
      window.setInterval(() => {
        this.bulletItem = this.bulletItem + 1 === this.bannerList.length ? 1 : this.bulletItem + 1
        swiper.style['transition-duration'] = '300ms'
        swiper.style.transform = `translate(${-this.adviceWidth * this.bulletItem}px, 0)`
        if (this.bulletItem === this.bannerList.length -1) {
          swiper.style.transform = `translate(${-this.adviceWidth * this.bulletItem}px, 0)`
          // 再第二轮即将开始的瞬间，将div拉回到0，0的位置
          window.setTimeout(() => {
            swiper.style['transition-duration'] = '0ms'
            swiper.style.transform = `translate(0, 0)`
          },259)
        }
      },3000)
    })
  }
}
</script> 
<style lang="scss" scoped>
.component {
  background-color: #fff;
  background-clip: content-box;
  overflow: hidden;
  display: block;
  // 似乎height不写死也无伤大雅
  // height: 199.82399999999998px;
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    // transition: transform .3s ease-out;
  }
}
.swiper-slide {
  // width: 414px;
  height: 100%;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  display: block;
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms;
  z-index: 10;
  left: 0;
  width: 100%;
  bottom: 5px;
  .swiper-pagination-bullet {
    margin: 0 1px;
    width: 7px;
    height: 7px;
    opacity: .5;
    border: 1px solid rgba(0,0,0,.5);
    border-radius: 50%;
    display: inline-block;
    background-color: #000;
  }
  .swiper-active {
    background-color: #fff;
  }
}
</style>
