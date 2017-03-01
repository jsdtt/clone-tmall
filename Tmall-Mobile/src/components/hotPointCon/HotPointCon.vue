<template>
  <div class="module-cn" id="J_tmallHotPointCon">
    <div class="j_tmallHotPoint layout-type2-con">
      <ul class="mui-flex">
        <li class="cell">
          <div class="component type33">
            <div class="component-type33-img-con">
              <img src="https://img.alicdn.com/tps/i2/TB1FEnkIpXXXXbkaXXXVQpuFVXX-136-100.png_2200x2200Q30s0.jpg" alt="" class="component-type33-img">
            </div>
            <img class="component-type33-logo" src="https://gw.alicdn.com/tps/i1/TB1O72lIpXXXXX5XVXXmqjTHFXX-60-60.png_2200x2200Q30s0.jpg" height="22px" width="22px">
            <div class="swiper-container">
              <div class="swiper-wrapper" id="J_tmallHotPointSwiper">
                <a href="" class="swiper-slide swiper-slide-duplicate" v-for="point of hotPointList">
                  <div class="title">{{point.title}}</div>
                  <span class="sub-title">{{point.subTitle}}</span>
                </a>
              </div>           
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotPoint',
  props: {
    hotPointList: {
      type: Array,
      default () {
        return [{
          "sort": "103.0",
          "titleIcon": "//img.alicdn.com/tps/i3/TB1MaHcKpXXXXaWaXXXr1czJXXX-84-42.jpg",
          "subTitle": "满99减50+新品上市6.4折起",
          "pageParam": "scm=1003.1.201609180.topTopic_4_1163868",
          "title": "防雾霾从头开始，个人洗护低至6.4折",
          "web-action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=1&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_4_1163868&syncIds=null",
          "action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=1&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_4_1163868&syncIds=null",
          "_pos_": "1",
          "bizId": "TMRD4"
        },
        {
          "sort": "102.0",
          "titleIcon": "//img.alicdn.com/tps/i3/TB1MaHcKpXXXXaWaXXXr1czJXXX-84-42.jpg",
          "subTitle": "第2件1元抢+买一送一",
          "pageParam": "scm=1003.1.201609180.topTopic_3_1163868",
          "title": "家装节时令生鲜，第2件1元",
          "web-action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=2&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_3_1163868&syncIds=null",
          "action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=2&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_3_1163868&syncIds=null",
          "_pos_": "2",
          "bizId": "TMRD3"
        },
        {
          "sort": "101.0",
          "titleIcon": "//img.alicdn.com/tps/i3/TB1MaHcKpXXXXaWaXXXr1czJXXX-84-42.jpg",
          "subTitle": "满150减10+满299减30",
          "pageParam": "scm=1003.1.201609180.topTopic_1_1163868",
          "title": "皇族金辉泰国香米满150减10",
          "web-action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=3&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_1_1163868&syncIds=null",
          "action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=3&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_1_1163868&syncIds=null",
          "_pos_": "3",
          "bizId": "TMRD1"
        },
        {
          "sort": "100.0",
          "titleIcon": "//img.alicdn.com/tps/i3/TB1MaHcKpXXXXaWaXXXr1czJXXX-84-42.jpg",
          "subTitle": "全店满199减10+全店税值折扣",
          "pageParam": "scm=1003.1.201609180.topTopic_2_1163868",
          "title": "Costco型男服饰满199减10",
          "web-action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=4&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_2_1163868&syncIds=null",
          "action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=4&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_2_1163868&syncIds=null",
          "_pos_": "4",
          "bizId": "TMRD2"
        },
        // 最后增加个第一个显示的item
        {
          "sort": "103.0",
          "titleIcon": "//img.alicdn.com/tps/i3/TB1MaHcKpXXXXaWaXXXr1czJXXX-84-42.jpg",
          "subTitle": "满99减50+新品上市6.4折起",
          "pageParam": "scm=1003.1.201609180.topTopic_4_1163868",
          "title": "防雾霾从头开始，个人洗护低至6.4折",
          "web-action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=1&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_4_1163868&syncIds=null",
          "action": "https://pages.tmall.com/wow/hotspot/act/rais?abtest=_AB-LR1283-PR1283&pos=1&abbucket=_AB-M1283_B15&acm=201609180.1003.1.1163868&scm=1003.1.201609180.topTopic_4_1163868&syncIds=null",
          "_pos_": "1",
          "bizId": "TMRD4"
        }]
      }
    }
  },
  data () {
    return {
      swiperItem: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      let hotSwiper = document.querySelector('#J_tmallHotPointSwiper')
      let swiperList = document.getElementsByClassName('swiperList')
      window.setInterval(() => {
        this.swiperItem = this.swiperItem + 1 === this.hotPointList.length ? 1 : this.swiperItem + 1
        hotSwiper.style['transition-duration'] = '300ms'
        hotSwiper.style.transform = `translate3d(0, -${40 * this.swiperItem}px,0)`
        if (this.swiperItem === this.hotPointList.length -1) {
          hotSwiper.style.transform = `translate3d(0, -${40 * this.swiperItem}px,0)`
          // 再第二轮即将开始的瞬间，将div拉回到0，0的位置
          window.setTimeout(() => {
            hotSwiper.style['transition-duration'] = '0ms'
            hotSwiper.style.transform = `translate3d(0, 0,0)`
          },259)
        }
      },3000)
    })
  }
}
</script>
<style scoped lang="scss">
.layout-type2-con {
  background-color: #fff;
  padding: 0;
  
}
.component {
  background-color: #fff;
  background-clip: content-box;
  overflow: hidden;
  display: block;
  &.type33 {
    padding: 10px 0;
    position: relative;
    .swiper-container {
      height: 40px;
      display: block;
      padding-left: 102px;
      overflow: hidden;
      &>.swiper-wrapper {
        flex-direction: column;
      }
      .swiper-wrapper {
        display: block;
        white-space: nowrap;
        padding-left: 5px;
        height: 40px;
        .title {
          height: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 98%;
        }
        .sub-title {
          color: #ff2f2f;
          height: 18px;
          line-height: 18px;
          vertical-align: middle;
          display: inline-block;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 98%;
        }
      }
    }
  }
  &:after {
    clear: both;
    display: table;
    content: '';
  } 
}
.component-type33-img-con {
  position: absolute;
  height: 40px;
  border-right: 1px solid #e7e7e7;
  display: inline-block;
  img {
    height: 100%;
    margin-left: 7px;
    margin-right: 5px;
  }
}
.component-type33-logo {
  position: absolute;
  top: 20px;
  left: 77px;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  position: relative;
  display: block;
  // 可能需要通过js动态设置
  height: 40px;
}
</style>