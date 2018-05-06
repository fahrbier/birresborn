import Vue from 'vue'
import Router from 'vue-router'
import 'jquery/dist/jquery.min.js'
import HelloWorld from '@/views/HelloWorld'
import Vereine from '@/views/Vereine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/vereine/:id',
      name: 'Vereine',
      component: Vereine
    }
  ]
})
