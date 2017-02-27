<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
}
a{
    text-decoration: none;
    color: #000;
}
body {
  color: #999;
}
body {
    font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
}
a,button,input,textarea{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-modify:read-write-plaintext-only; 
}
input[type=number]::-webkit-textfield-decoration-container {
    background-color: transparent;    
}
input[type=number]::-webkit-inner-spin-button {
     -webkit-appearance: none;
}
input[type=number]::-webkit-outer-spin-button {
     -webkit-appearance: none;
}
input{-webkit-appearance:none;}
</style>
