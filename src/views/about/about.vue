<template>
  <div class="wrapper">
    <section class="main-intro">
      <img class="intro-pic" :src="picUrl"/>
      <p class="intro-name">{{name}}</p>
      <p class="intro-des">{{description}}</p>
    </section>
    <ul class="main-list">
      <li class="list-1">
        <label>服务类别</label>
        <span>{{serviceClass}}</span>
      </li>
      <li class="list-2" @click="goMainInfo">
        <label>主体信息</label>
        <span>{{mainInfo}}</span>
      </li>
      <li class="list-3">
        <label>客服电话</label>
        <a :href="'tel:'+serviceTel">{{serviceTel}}</a>
      </li>
    </ul>
    <section class="add-like">
      <div class="like-btn" :class="{'like': likeStatus == '1'}" @click="addLike"></div>
      <p>为该小程序点赞</p>
    </section>
  </div>
</template>

<script>
import { getAboutInfo } from '../../service/dataExchange'
export default {
  name: "about",
  data() {
    return {
      picUrl: '', //图片地址
      name: '', //名称
      description: '', //描述
      serviceClass: '', //服务类别
      mainInfo: '', //主体信息
      serviceTel:'', //客服电话
      likeStatus: '', //点赞状态 1-已赞，0-未赞
    }
  },
  created: async function() {
    const { data } = await getAboutInfo()
    this.picUrl = data.picUrl || require('../../assets/logo.png')
    this.name = data.name
    this.description = data.description
    this.serviceClass = data.serviceClass
    this.mainInfo = data.mainInfo
    this.serviceTel = data.serviceTel
    this.likeStatus = localStorage.getItem('likeFlag') || data.likeStatus
  },
  methods: {
    addLike () { //点赞
      if(this.likeStatus != '1'){
        localStorage.setItem('likeFlag', '1')
        this.likeStatus = '1'
      }
    },
    goMainInfo () { //跳转主体信息
      this.$router.push('/mainInfo')
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
    //background: #d8d8d8;
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
.main-list {
  margin-top: 20px;
  .list-1,
  .list-2,
  .list-3 {
    position: relative;
    @include wh(100vw, 88px);
    padding: 0 40px;
    background: #fff;
    & > label {
      @include sc(30px, #000);
      line-height: 88px;
    }
    & > span{
      padding-left: 60px;
      line-height: 88px;
      @include sc(30px, #a8a8a8);
    }
    & > a {
      padding-left: 60px;
      line-height: 88px;
      @include sc(30px, #1177ed);
    }
  }
  .list-1::after {
    display: block;
    content: '';
    width: calc(100vw - 40px);
    height: 1Px;
    background: #f1f1f1;
  }
  .list-2::after {
    position: absolute;
    right: 40px;
    top: 36px;
    display: inline-block;
    content: '';
    @include wh(15px, 15px);
    border-right: 3px solid #cdcdcd;
    border-bottom: 3px solid #cdcdcd;
    transform: rotate(-45deg);
  }
  .list-3 {
    margin-top: 20px;
  }
}
.add-like {
  margin-top: 124px;
  .like-btn {
    margin: 0 auto;
    @include wh(120px, 120px);
    transition: opacity .5s;
    @include background-cover('../../assets/icon_like0.png');
    &.like {
      @include background-cover('../../assets/icon_like1.png');
    }
  }
  & > p {
    margin-top: 10px;
    text-align: center;
    @include sc(24px, #a8a8a8);
  }
}
</style>
