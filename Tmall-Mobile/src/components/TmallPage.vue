<template>
  <div class="tm-mobile-page">
    <tm-header></tm-header>
    <div class="tm-mobile-content"></div>
    <loader v-if="loader"></loader>
  </div>
</template>
<script>
  import TmHeader from './header/Header.vue'
  import Loader from './loading/Loader.vue'

  export default {
    name: 'tmPage',
    components: {
      TmHeader,
      Loader
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
<style>
.tm-mobile-page {
  position: relative;
  min-width: 320px;
  overflow: hidden;
  font-size: 12px;
}
.tm-mobile-content {
  height: 1000px;
}
</style>