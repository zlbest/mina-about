const aboutData = {
  picUrl: '', //图片地址
  name: '福利社区', //名称
  description: '福利社区各类优惠，专为您提供各类优惠信息活动等各种聚集各类优惠和各类福利，好玩优惠等你来。', //描述
  serviceClass: '金融服务', //服务类别
  mainInfo: '平安科技（深圳）有限公司', //主体信息
  serviceTel:'95511', //客服电话
  likeStatus: localStorage.getItem('likeFlag') || 0, //点赞状态 1-已赞，0-未赞
}

export default aboutData