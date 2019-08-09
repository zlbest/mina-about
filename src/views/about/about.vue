<template>
  <div class="wrapper">
    <section class="main-intro">
      <img class="intro-pic" src />
      <p class="intro-name">{{name}}</p>
      <p class="intro-des">{{description}}</p>
    </section>
  </div>
</template>

<script>
import aboutData from "../../data/about"
export default {
  name: "about",
  data() {
    return {
      ...aboutData
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../../style/mixin";
.wrapper {
  @include wh(100vw, 100vh);
}
.main-intro {
  @include flex-column(flex-start, center);
  padding: 38px 40px 80px;
  background: #fff;
  .intro-pic {
    display: block;
    @include wh(126px, 126px);
    margin-bottom: 40px;
    border-radius: 50%;
    background: #d8d8d8;
    box-sizing: content-box;
    border: none;
  }
  .intro-name {
    font-weight: bold;
    @include sc(30px, #000);
  }
  .intro-des {
    padding-top: 20px;
    @include sc(26px, #666);
  }
}
</style>
