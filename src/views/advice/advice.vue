<template>
  <div class="wrapper">
    <img class="advice-img" src="../../assets/advice.png"/>
    <p class="advice-text">功能建设中，敬请期待</p>
  </div>
</template>

<script>
export default {
  name: 'advice'
}
</script>


<style lang="scss" scoped>
@import '../../style/mixin.scss';
.wrapper {
  @include wh(100vw, auto);
  .advice-img {
    display: block;
    margin-top: 220px;
    margin-left: 120px;
    @include wh(400px, 370px);
  }
  .advice-text {
    margin-top: 60px;
    @include sc(30px, #b8b8b8);
    text-align: center;
  }
}
</style>
