<template>
<div class="my-info cell fixed">
  <a href="" class="my-info-trigger status-login">登陆</a>
</div>
</template>
<script>
export default {
  name: 'MyInfo'
}
</script>
<style scoped lang="scss">
  .my-info {
    -webkit-box-flex: 0!important;
    -webkit-flex: none!important;
    -ms-flex: none!important;
    flex: none!important;
    width: auto !important;
    .my-info-trigger {
      height: 45px;
      line-height: 45px;
      margin-right: 18px;
      color: #fff;
      display: block;
    }
    .status-login {
      width: 25px;
      text-indent: -10000em;
      background: url('../CategoryNva/assets/css-sprite.png') no-repeat -37px 7px;
      background-size: 282px 31px;
    }
  }
</style>