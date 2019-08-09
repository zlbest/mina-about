<template>
  <div class="wrapper">
    about
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>


<style lang="scss" scoped>
@import '../../style/mixin';
.wrapper {
  @include wh(100vw, 100vh);
  @include sc(30px, #333);
}
</style>
