<template>
  <div class="container">
    <img class="timeout-img" src="../../assets/timeout.png"/>
    <p class="timeout-text">网络链接超时，请稍后再试…</p>
  </div>
</template>

<script>
export default {
  name: 'timeout'
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.container {
  @include wh(100vw, auto);
  text-align: center;
  .timeout-img {
    margin-top: 220px;
    @include wh(400px, 370px);
  }
  .timeout-text {
    margin-top: 60px;
    @include sc(30px, #b8b8b8);
  }
}
</style>

