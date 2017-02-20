<template>
  <!--.self 修饰符表示只有点击元素本身才会被触发回调事件-->
  <div class="menu-pannel" @click.self="callBack($event)">
    <p @click.self="callBack($event)">点击此处返回<span></span></p>
    <div class="pannel-con">
      <div class="tab-header">
        <h1>全部分类</h1>
      </div>
      <div class="tab-con">
        <div class="tab-clone top" :class="{ show: fixedOnTop}" id="J_tabClone" data-index="0">
          为您推荐
        </div>
        <div class="tab-nva" id="J_tabNav">
          <ul @click="activeItem($event)">
            <li :style="nvaTopStyle" data-index="0">为您推荐</li>
            <li v-for="(item, i) in nvaList" :data-index="i+1">{{item}}</li>
          </ul>
        </div>
        <div class="main-con">
          <ul class="tab-ul">
            <li class="tab-li" v-for="tabList in Object.keys(tabConData)">
              <div class="tab-list">
                <h2>{{tabList}}</h2>
                <ul>
                  <li v-for="item in tabConData[tabList]">
                    <a href="">
                      <div class="tab-img"><img :src="item.img" alt=""></div>
                      <p class="tab-desc">{{item.desc}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MenuPanel',
    props: {
      nvaList: {
        type: Array,
        default () {
          return ['国际大牌', '天猫国际', '女装', '女鞋', '男装', '男鞋', '内衣', '母婴', '手机', '数码', '家电', '美妆', '箱包', '运动', '户外', '家装', '家纺', '居家', '视频']
        }
      },
      tabRsponseData: {
        type: Array,
        default () {
          return [
            // index = 0 为您推荐
            {
              '女装': [
                {
                  'img': 'https://img.alicdn.com/tps/i1/TB1xiwzGVXXXXcpaXXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '羽绒服'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1sDZGGVXXXXamXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '棉衣'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1ghAFGVXXXXcRXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '毛呢外套'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i3/TB1sSIAGVXXXXX_XVXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '衬衫'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1AXECGVXXXXcCXFXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '针织衫'
                },
                {
                  'img': 'https://img.alicdn.com/tps/TB1RkdOIpXXXXX8XVXXXXXXXXXX.jpg_210x210Q50s50.jpg',
                  'desc': '牛仔裤'
                }
              ],
              '女鞋': [
                {
                  'img': 'https://img.alicdn.com/tps/i1/TB1Fh.IGVXXXXcFXFXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '短靴'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i1/TB1NOQIGVXXXXaNXFXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '长靴'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i3/TB1.FZFGVXXXXaEaXXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '中筒靴'
                }
              ],
              '男装': [
                {
                  'img': 'https://img.alicdn.com/tps/i1/TB102oFGVXXXXccXVXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '新品羽绒服'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i2/TB1gm44HpXXXXXtXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '夹克'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i1/TB1XJX6HpXXXXXTXXXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '风衣'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i2/TB1GTgMGVXXXXXrXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '羊绒衫'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i1/TB11bxUHpXXXXX1aXXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '棉衣'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i3/TB1cW0QHpXXXXbCXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '修身休闲裤'
                }
              ],
              '家电': [
                {
                  'img': 'https://img.alicdn.com/tps/i1/TB1IQsKGVXXXXXLXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '平板电视'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1TcZzGVXXXXc_apXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '洗衣机'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i3/TB19_gEGVXXXXbAXVXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '冰箱'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i2/TB18cUQGVXXXXanXXXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '电饭煲'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1do7HGVXXXXaoXVXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '空气净化器'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i3/TB1CjwPGVXXXXa1XXXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '扫地机器人'
                }
              ],
              '美妆': [
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1ZsMAGVXXXXcMaXXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '护肤套装'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i1/TB1IDECGVXXXXXOXVXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '面膜'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB19M7HGVXXXXaGXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '身体护理'
                }
              ]
            },
            // index = 1 大牌
            {
              '品牌墙': [
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1PhrmHpXXXXX0XXXXXD.cNVXX-400-200.png_170x170Q90s50.jpg',
                  'desc': '苹果'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1sDZGGVXXXXamXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '棉衣'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1ghAFGVXXXXcRXpXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '毛呢外套'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i3/TB1sSIAGVXXXXX_XVXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '衬衫'
                },
                {
                  'img': 'https://img.alicdn.com/tps/i4/TB1AXECGVXXXXcCXFXXMxXJVFXX-100-100.jpg_210x210Q50s50.jpg',
                  'desc': '针织衫'
                },
                {
                  'img': 'https://img.alicdn.com/tps/TB1RkdOIpXXXXX8XVXXXXXXXXXX.jpg_210x210Q50s50.jpg',
                  'desc': '牛仔裤'
                }
              ]
            }
          ]
        }
      }
    },
    data () {
      return {
        currentItem: '',
        distance: -9999,
        nvaTopStyle: {
          visibility: 'hidden'
        }
      }
    },
    methods: {
      callBack (event) {
        let menu

        menu = event.target
        if (event.target.nodeName.toUpperCase() === 'P') {
          menu = event.target.parentElement
        }
        menu.style.transform = 'translate(-100%, 0)'
      },
      /**
       * 切换Item
      **/
      activeItem (event) {
        // 首次点击Nva取消置顶
        if (this.currentItem === '') {
          this.currentItem = event.target
          this.fixedOnTop = false
          this.nvaTopStyle.visibility = 'visible'
        }
        if (this.currentItem !== event.target) {
          this.currentItem.className = ''
        }
        event.target.className = 'active'
        this.currentItem = event.target
      }
    },
    computed: {
      fixedOnTop () {
        if (this.currentItem === '') {
          return true
        }
        if (this.distance > -1) {
          document.querySelector('#J_tabClone').innerHTML = this.currentItem.innerHTML
          return true
        }
        return false
      },
      tabConData () {
        if (this.currentItem === '') {
          return this.tabRsponseData[0]
        }
        return this.tabRsponseData[this.currentItem.attributes[1].value]
      }
    },
    // 组件初始化的钩子
    mounted () {
      let nvaEle = document.querySelector('#J_tabNav')
      // 左侧nva滚动监听
      nvaEle.addEventListener('scroll', () => { this.distance = event.target.scrollTop - this.currentItem.offsetTop })
    }
  }
</script>

<style lang="scss" scoped>
.menu-pannel {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  transform: translate(-100%, 0);
  transition: all .2s ease-in;
  background-color: rgba(0, 0, 0, .7);
  & > p {
    position: absolute;
    width: 15px;
    right: 10px;
    top: 50%;
    margin: -54px 0 0;
    font-size: 14px;
    line-height: 14px;
    color: #B5B5B5;
  }
  .pannel-con{
    width: 91.5458937%;
    height: 100%;
    background-color: #fff;
    position: relative;
    box-shadow: 3px 0 10px #333;
    .tab-header {
      overflow: hidden;
      height: 43px;
      background: #EEE;
      border-bottom: 1px solid #E1E1E1;
      h1 {
        font-weight: 400;
        width: 23%;
        text-align: center;
        line-height: 44px;
        font-size: 14px;
        color: #333;
      }
    }
    .tab-con {
      width: 100%;
      overflow: hidden;
      background-color: #fff;
      position: absolute;
      top: 44px;
      bottom: 0;
      .tab-clone {
        display: none;
        position: absolute;
        font-size: 14px;
        z-index: 9999;
        text-align: center;
        width: 23%;
        left: 0;
        background-color: #fff;
        border-right: 1px solid transparent;
        @extend .general-nva-item;
        color: #000;
      }
      .show {
        display: block;
      }
      .top {
        top: 0;
      }
      .tab-nva {
        overflow-x: hidden;
        overflow-y: auto;
        background: #EEE;
        color: #9B9B9B;
        font-size: 14px;
        text-align: center;
        width: 23%;
        height: 100%;
        float: left;
        li {
          @extend .general-nva-item;
          &:first-child {
            visibility: hidden;
          }
          &.active {
            color: #333;
            background-color: #fff;
          }
        }
      }
      .main-con {
        height: 100%;
        width: 77%;
        float: left;
        overflow-x: hidden;
        overflow-y: auto;
        li {
          box-sizing: border-box;
        }
        .tab-li {
          padding: 10px 4%;
          .tab-list {
            h2 {
              font-size: 14px;
              line-height: 14px;
              color: #9B9B9B;
              padding:11px 0;
            }
            ul {
              overflow: hidden;
            }
            li {
              float: left;
              width: 33.33333%;
              margin: 5px 0;
            }
            a {
              position: relative;
              display: block;
            }
          }
        }
        .tab-img {
          position: relative;
          overflow: hidden;
          background: url('./assets/load-bg.png') center center no-repeat #fff;
          background-size: 50%;
          padding: 76% 0 0;
          width: 76%;
          margin: 0 auto;
          img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .tab-desc {
          line-height: 23px;
          height: 23px;
          padding: 4px 0;
          font-size: 14px;
          color: #5D5D5D;
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}

.general-nva-item {
  cursor: pointer;
  line-height: 59px;
  border-bottom: 1px solid #E1E1E1;
  margin-right: -1px;
}
</style>
