<template>
 <div class="module-cn j_Tmall_rushCardTitleForH5Con">
   <div class="layout-type2-con">
     <ul class="mui-flex">
       <li class="cell">
         <div class="component type39">
           <span class="vline left" :style="{'border-color':lineColor}"></span>
           <img :src="imgUrl" alt="">
           <span class="title" :style="{color: titleColor}">{{cardTitle}}</span>
           <span class="vline right" :style="{'border-color':lineColor}"></span>
         </div>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    cardTitle: String,
    imgUrl: String,
    lineColor: String,
    titleColor: String
  }
}
</script>

<style scoped lang="scss">
.component.type39 {
  display: block;
  color: #051B28;
  font-size: 14px;
  line-height: 28px;
  height: 28px;
  text-align: center;
  .vline {
    display: inline-block;
    border-bottom: 1px solid;
    width: 34px;
    margin-bottom: 5px;
    &.left {
      margin-right: 6px;
    }
    &.right {
      margin-left: 6px;
    }
  }
  img {
    // margin: 0 auto 5px;
    height: 15px;
  }
}
</style>
