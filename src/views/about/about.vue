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
export default {
  name: "about",
  data() {
    return {
      picUrl: '', //图片地址
      name: '福利社区', //名称
      description: '福利社区各类优惠，专为您提供各类优惠信息活动等各种聚集各类优惠和各类福利，好玩优惠等你来。', //描述
      serviceClass: '金融服务', //服务类别
      mainInfo: '平安科技（深圳）有限公司', //主体信息
      serviceTel:'95511', //客服电话
      likeStatus: localStorage.getItem('likeFlag') || 0, //点赞状态 1-已赞，0-未赞
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
