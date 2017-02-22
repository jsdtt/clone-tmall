<template>
  <div class="tm-mobile-header">
    <div class="header-content miu-fiex">
      <tm-menu></tm-menu>
    </div>
  </div>
</template>
<script>
  import TmMenu from './CategoryNva/CategoryMenu.vue'

  export default {
    name: 'tmall-header',
    components: {
      TmMenu
    }
  }
</script>
<style scoped lang="scss">
.tm-mobile-header {
  position: fixed;
  top: -1px;
  width: 100%;
  z-index: 9998;
  .header-content {
      position: relative;
      background: -webkit-linear-gradient(rgba(0,0,0,.7), rgba(0, 0, 0, 0));
      background: -o-linear-gradient(rgba(0,0,0,.7), rgba(0, 0, 0, 0));
      background: linear-gradient(rgba(0,0,0,.7), rgba(0, 0, 0, 0));
      transition: background-color .2 linear; 
      transform: translateZ(0); 
    }
}
.miu-fiex {
  & *, & {
    box-sizing: border-box;
  }
}
</style>
