<template>
  <div class="tm-mobile-page">
    <tm-header></tm-header>
    <div class="tm-mobile-content"></div>
  </div>
</template>
<script>
  import TmHeader from './header/Header.vue'

  export default {
    name: 'tmPage',
    components: {
      TmHeader
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