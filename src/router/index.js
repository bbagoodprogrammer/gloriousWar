import Vue from 'vue'
import Router from 'vue-router'
import GloriousWar from '@/view/GloriousWar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GloriousWar',
      component: GloriousWar
    }
  ]
})
