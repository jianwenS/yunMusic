import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import me from './views/me.vue'
import find from './views/find.vue'
import vio from './views/vio.vue'
import login from './views/login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'find',
          name: 'find',
          component: find,
        },
        {
          path: 'me',
          name: 'me',
          component: me,
        },
        {
          path: 'vio',
          name: 'vio',
          component: vio,
        }
      ]
    }
  ]
})
