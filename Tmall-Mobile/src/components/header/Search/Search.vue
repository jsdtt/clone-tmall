<template>
  <div class="mobile-search cell">
    <form action="" id="J_MobileSearch" >
      <div class="s-combobox">
        <div class="s-combobox-input-wrap">
          <div class="search-input" @click="showSearchBox">搜索商品/店铺</div>
        </div>
      </div>
      <input type="submit" class="search-button">
    </form>
  </div>
</template>

<script>

export default {
  name: 'TmSearch',
  components: {

  },
  data () {
    return {
      showBox: false
    }
  },
  methods: {
    showSearchBox () {
      this.showBox = true
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-search {
  margin: 6px 18px 0;
  height: 33px;
  background: #fff;
  opacity: .9;
  border-radius: 2px;
  line-height: 33px;
  .search-input {
    margin-left: 10px;
    font-size: 14px;
    outline: 0;
    border: 0;
  }
  .search-button {
    position: absolute;
    top: 0;
    right: 10px;
    width: 20px;
    height: 30px;
    border: 0;
    cursor: pointer;
    background: url('../CategoryNva/assets/css-sprite.png') no-repeat -82px 2px;
    background-size: 282px 31px;
    background-color: #fff;
    text-indent: -1000em;
  }
}


</style>
