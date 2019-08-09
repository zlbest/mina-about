import Vue from 'vue'
import Router from 'vue-router'

const about = resolve => require(['./views/about/about'], resolve)
const mainInfo = resolve => require(['./views/mainInfo/mainInfo'], resolve)
const advice = resolve => require(['./views/advice/advice'], resolve)
const timeout = resolve => require(['./views/timeout/timeout'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/mainInfo',
      name: 'mainInfo',
      component: mainInfo,
      meta: {
        title: '主体信息'
      }
    },
    {
      path: '/advice',
      name: 'advice',
      component: advice,
      meta: {
        title: '意见反馈'
      }
    },
    {
      path: '/timeout',
      name: 'timeout',
      component: timeout,
      meta: {
        title: '链接超时'
      }
    },
  ]
})
