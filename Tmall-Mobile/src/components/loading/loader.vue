<template>
  <transition name="loader">
    <div class="loader">
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script></script>

<style scoped lang="scss">
  @import 'loader-style.css';

  .loader-enter-active, .loader-leave-active {
    transition: opacity .1s
  }
  .loader-enter, .loader-leave-active {
    opacity: 0
  }
</style>