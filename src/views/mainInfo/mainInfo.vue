<template>
  <div class="container">
    <section class="main-intro">
      <img class="intro-pic" src="../../assets/logo.png"/>
      <p class="intro-name">{{ name }}</p>
    </section>
    <ul class="main-content">
      <li>
        <p class="main-title">开发者</p>
        <p class="main-text">{{ developer }}</p>
      </li>
      <li>
        <p class="main-title">服务类别</p>
        <p class="main-text">{{ serviceType }}</p>
      </li>
      <li>
        <p class="main-title">数据及服务由以下网址提供</p>
        <p class="main-text" v-for="(item,index) in websites" :key="index">{{ item }}</p>
      </li>
      <li>
        <p class="main-title">版本信息</p>
        <p class="main-text">{{ version }}</p>
      </li>
      <li>
        <p class="main-title">更新时间</p>
        <p class="main-text">{{ date }}</p>
      </li>
      <li>
        <p class="main-title">服务声明</p>
        <p class="main-text">{{ serviceDeclaration }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { getMainInfo } from '../../service/dataExchange';
export default {
  name: 'mainInfo',
  data() {
    return {
      name: '', //小程序名称
      developer: '',//小程序开发者
      serviceType: '',//服务类型
      websites: [],//提供网站
      version: '',//版本信息
      date: '',//更新时间
      serviceDeclaration: ''//服务声明
    }
  },
  created: function() {
    getMainInfo().then((res) => {
      let data = res.data;
      this.name = data.name;
      this.developer = data.developer;
      this.serviceType = data.serviceType;
      this.websites = data.websites;
      this.version = data.version;
      this.date = data.date;
      this.serviceDeclaration = data.serviceDeclaration;
    })
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
@import "../../style/mixin";
.container {
  width: 100vw;
  min-height: 100vh;
}
.main-intro {
  @include wh(100%,300px);
  @include flex-column(center, center);
  background: #fff;
  .intro-pic {
    display: block;
    @include wh(126px, 126px);
    border-radius: 50%;
    background: #d8d8d8;
    box-sizing: content-box;
    border: none;
  }
  .intro-name {
    margin-top: 40px;
    font-weight: bold;
    @include sc(30px, #000);
  }
}
.main-content{
  margin-top: 40px;
  padding: 24px 40px;
  background-color: white;
  li{
    margin-bottom: 40px;
    .main-title{
      font-size: 30px;
      color: #000;
    }
    .main-text{
      font-size: 26px;
      color: #a8a8a8;
    }
  }
}
</style>

