<template>
  <div class="category-menu">
    <a class="category-trigger" @click="showPannel"></a>
    <menu-panel id="category-con" v-if="categoryMenu"></menu-panel>
  </div>
</template>
<script>
import MenuPanel from './MenuPanel'


export default {
  name: 'CategoryMenu',
  methods: {
    showPannel: function (event) {
      //  category-con为MenuPanel的ID
      let pannel 

      this.categoryMenu = true
      if (this.categoryMenu) {
        window.setTimeout(() => {
          pannel = document.getElementById('category-con')
          pannel.style.transform = 'translate(0,0)'
        },100)
      }
    }
  },
  components: {
    MenuPanel
  },
  data () {
    return {
      loader: true,
      categoryMenu: false
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
