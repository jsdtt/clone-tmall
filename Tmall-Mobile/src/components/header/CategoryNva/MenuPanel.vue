<template>
  <!--.self 修饰符表示只有点击元素本身才会被触发回调事件-->
  <div class="menu-pannel" @click.self="callBack($event)">
    <p @click.self="callBack($event)">点击此处返回<span></span></p>
    <div class="pannel-con">
      <div class="tab-header">
        <h1>全部分类</h1>
      </div>
      <div class="tab-con">
        <div class="tab-clone top" :class="{ show: fixedOnTop}" id="J_tabClone">
          为您推荐
        </div>
        <div class="tab-nva" id="J_tabNav">
          <ul @click="activeItem($event)">
            <li :style="nvaTopStyle">为您推荐</li>
            <li v-for="(item, i) in nvaList" :data-index="i" >{{item}}</li>
          </ul>
        </div>
        <div class="main-con"></div>
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
        return ['天猫国际', '女装', '女鞋', '男装', '男鞋', '内衣', '母婴', '手机', '数码', '家电', '美妆', '箱包', '运动', '户外', '家装', '家纺', '居家', '视频']
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
  p {
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
