import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home'
import OfficialWebsite from '@/view/OfficialWebsite.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/:id',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'OfficialWebsite',
      component: OfficialWebsite
    }
  ]
})
