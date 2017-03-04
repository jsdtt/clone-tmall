<template>
  <div class="module-cn j_tmall_rushCardForH5">
    <div class="layout-type1-con">
      <div class="j_exposure"></div>
      <ul class="mui-flex">
        <li class="cell" v-for="item of cons">
          <a href="" class="component type1">
            <img :src="item" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RushCardType2',
  props: {
    cons: {
      type: Array,
      default () {
        return [
          'https://img.alicdn.com/tps/i1/TB16M4JPVXXXXbTaXXXM0z2PXXX-372-453.jpg_760x760Q30s0.jpg',
          'https://img.alicdn.com/tps/i1/TB1MhMRPFXXXXacaXXXM0z2PXXX-372-453.jpg_760x760Q30s0.jpg',
          'https://img.alicdn.com/bao/upload/TB19zEVOXXXXXb0aXXXM0z2PXXX-372-453.jpg_760x760Q30s0.jpg'
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
a.component.type1 {
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
    width: 100%;
    margin: 0;
  }
}
</style>