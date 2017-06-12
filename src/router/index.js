import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/common'
import Ask from '@/components/ask'
import Top from '@/components/top'
import Show from '@/components/show'
import Job from '@/components/job'
import New from '@/components/new'
// import Item from '@/components/item'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Common,
      // name:'Common',
      children:[
        {
          path:'',
          redirect:"top",
        },
        {
          path:'top/:page?',
          component:Top,
        },
        {
          path:'new/:page?',
          component:New
        },
        {
          path:'show/:page?',
          component:Show
        },
        {
          path:'ask/:page?',
          component:Ask
        },
        {
          path:'job/:page?',
          component:Job
        },
      ]
    }
  ]
})
