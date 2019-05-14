<template>
    <div >
      <!--伪类选择器-->
      <a class="a" href="">首页</a>
      <!--伪元素-->
      <p>我是微元素</p>
      <!-- 清除浮动 -->
      <div class="wrap">
        <div class="box"></div>
        <div class="box1"></div>
        <!--用来清除子元素浮动-->
        <div class="clear"></div>
      </div>
      66666666666666
    </div>
</template>

<script>
    export default {
        name: "luda"
      
    }
</script>

<style>
  @import "./css/luda.less";
</style>
