import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import luda from '../components/luda'
import iconfontTest from '../components/iconfontTest'
import vFor from '../components/v-for'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/luda',
      name: 'luda',
      component: luda
    },
    {
      path: '/iconfontTest',
      name: 'iconfontTest',
      component: iconfontTest
    },
    {
      path: '/vFor',
      name: 'vFor',
      component: vFor
    },
  ]
})
