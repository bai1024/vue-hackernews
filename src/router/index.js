import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/common'
import Ask from '@/components/ask'
import Top from '@/components/top'
import Show from '@/components/show'
import Job from '@/components/job'
import New from '@/components/new'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Common,
      // name:'Common',
      children:[
        // {
        //   path: "",
        //   redirect: "top",
        // },
        {
          path:'top',
          component:Top,
        },
        {
          path:'new',
          component:New
        },
        {
          path:'show',
          component:Show
        },
        {
          path:'ask',
          component:Ask
        },
        {
          path:'job',
          component:Job
        },
      ]
    }
  ]
})
