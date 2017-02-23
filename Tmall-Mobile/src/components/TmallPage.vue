<template>
  <div class="tm-mobile-page">
    <tm-header></tm-header>
    <div class="tm-mobile-content">
      <banner-con></banner-con>
    </div>
    <loader v-if="loader"></loader>
  </div>
</template>
<script>
  import TmHeader from './header/Header.vue'
  import Loader from './loading/Loader.vue'
  import BannerCon from './banner/BannerCon.vue'

  export default {
    name: 'tmPage',
    components: {
      TmHeader,
      Loader,
      BannerCon
    },
    data () {
      return {
        loader: true
      }
    },
    mounted () {
      window.setTimeout(() => {
        this.loader = false
      },1000)
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
  height: 1000px;
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