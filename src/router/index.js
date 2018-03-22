import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/view/home'
import OfficialWebsite from '@/view/OfficialWebsite.vue'
import PersonalCenter from '@/view/personalCenter.vue'
import SearchList from '@/view/searchList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/:id/:type ',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'OfficialWebsite',
      component: OfficialWebsite
    },
    {
      path: '/personalcenter',
      name: 'personalcenter',
      component: PersonalCenter
    },
    {
      path: '/searchlist',
      name: 'searchlist',
      query: {
        sc: 'sc'
      },
      component: SearchList
    }
  ]
})
