<template>
  <div class="category-menu">
    <a class="category-trigger" @click="showPannel"></a>
    <menu-panel id="category-con"></menu-panel>
    <loader v-if="loader"></loader>
  </div>
</template>
<script>
import MenuPanel from './MenuPanel'
import Loader from '../../loading/Loader'

export default {
  name: 'CategoryMenu',
  methods: {
    showPannel: function (event) {
      //  category-con为MenuPanel的ID
      let pannel = document.getElementById('category-con')
      pannel.style.transform = 'translate(0,0)'
    }
  },
  components: {
    MenuPanel,
    Loader
  },
  data () {
    return {
      loader: true
    }
  },
  created () {
    
  },
  mounted () {
    window.setTimeout(() => {
      this.loader = false 
    }, 2000);
  }
}
</script>
<style scoped lang="scss">
.category-menu {
  position: relative;
  width: auto;
  background-color: pink;
  .category-trigger {
    color: #fff;
    width: 25px;
    height: 45px;
    display: block;
    margin-left:  18px;
    background: url('./assets/css-sprite.png') no-repeat 2px 6px;
    background-size: 282px 31px;
  }
}
</style>
