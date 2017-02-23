<template>
  <div class="tm-mobile-header">
    <div class="header-content mui-flex">
      <tm-menu></tm-menu>
      <tm-search></tm-search>
      <my-info></my-info>
    </div>
    <search-box v-if="showBox"></search-box>
  </div>
</template>
<script>
  import TmMenu from './CategoryNva/CategoryMenu.vue'
  import TmSearch from './Search/Search.vue'
  import MyInfo from './MyInfo/MyInfo.vue'
  import SearchBox from './Search/SearchBox.vue'

  export default {
    name: 'tmall-header',
    components: {
      TmMenu,
      TmSearch,
      MyInfo,
      SearchBox
    },
    data () {
      return {
        showBox: false
      }
    },
    methods: {
    },
    mounted () {
      this.$nextTick( () => {
        let searchForm = document.querySelector('#J_MobileSearch')
        let closeSearch 

        searchForm.addEventListener('click', () => {
          this.showBox = true
          // 当用户点击搜索框的时候对返回按钮增加事件绑定
          // 延迟500毫秒、确保DOM已经渲染完成
          window.setTimeout( () => {
            closeSearch = document.querySelector('#J_CloseSearchBox')
            closeSearch.addEventListener('click', () => {
              this.showBox = false
            },500)
          })
        })
        
      })
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
.mui-flex {
  & *, & {
    box-sizing: border-box;
  }
}
.mui-flex {
    display: -webkit-box!important;
    display: -webkit-flex!important;
    display: -ms-flexbox!important;
    display: flex!important;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    > .cell {
      flex: 1;
      width: 0;
      position: relative;
      padding: 0 !important;
      display: block;
      -webkit-box-flex: 1;
      max-width: 100%;
      flex-basis: 0;
    }
}
</style>
