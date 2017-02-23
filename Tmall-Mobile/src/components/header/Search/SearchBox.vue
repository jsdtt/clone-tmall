<template>
  <div class="searchbox" :style="{height: winHeight + 'px'}">
    <div class="sb-search">
      <form>
        <input type="search" placeholder="至尊王者农药" v-model="searchValue">
        <input type="submit">
        <input type="reset" v-show="showReset">
      </form>
      <button class="close" id="J_CloseSearchBox"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchbox',
  data () {
    return {
      winHeight: window.innerHeight,
      searchValue: ''
    }
  },
  methods: {
  },
  computed: {
    showReset () {
      if (this.searchValue === '') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.searchbox {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font: 13px/1.5 arial;
  z-index: 999999;
  background-color: #eee;
  .sb-search {
    background-color: rgba(0,0,0,.97);
    position: relative;
    box-shadow: 0 2px 2px rgba(0,0,0,.1);
    height: 44px;
  }
  form {
    position: relative;
    margin-left: 37px;
    margin-right: 10px;
    padding: 5px 0 5px 6px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    input {
      &:first-child {
        background-color: #fff;
        background: transparent;
        padding-left: 25px;
        float: left;
        width: 100%;
        height: 100%;
        vertical-align: middle;
        box-shadow: none;
        -webkit-appearance: none;
        border: 0;
        outline: 0;
        color: #333;
        font-size: 14px;
        background-color: #FFF;
        border-radius: 2px;
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        -ms-border-radius: 2px;
        /* 隐藏取消按钮 */
        &::-webkit-search-cancel-button { 
          -webkit-appearance: none; 
        }

        /* 隐藏放大镜 */
        &::-webkit-search-results-button { -webkit-appearance: none; }
        
      }
      &:nth-child(2) {
        background: url('../CategoryNva/assets/css-sprite.png') no-repeat -82px 2px;
        background-size: 290px 31px;
        position: absolute;
        left: 8px;
        top: 16px;
        margin-top: -10px;
        width: 15px;
        height: 15px;
        border: 0;
        color: transparent;
        padding: 7px 5px;
        box-sizing: initial;
        align-items: flex-start;
        text-align: center;
      }
      &:last-child {
        position: absolute;
        background: url('./reset.png') no-repeat 50% 50%;
        background-size: 20px;
        right: 0;
        top: 50%;
        width: 30px;
        height: 32px;
        margin-top: -16px;
        border: 0;
        color: transparent;
        z-index: 1;
        outline: 0;
      }
    }
  }
  .close {
    position: absolute;
    width: 40px;
    height: 25px;
    left: 0;
    top: 9px;
    background: url('./close.png') no-repeat center center;
    background-size: contain;
    color: #666;
    padding: 8px;
    border: 0;
  }
}
</style>
