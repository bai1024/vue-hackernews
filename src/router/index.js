import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/common'
import Ask from '@/components/ask'
import Top from '@/components/top'
import Show from '@/components/show'
import Job from '@/components/job'
import New from '@/components/new'
import Item from '@/components/item'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Common,
      // name:'Common',
      children:[
        {
          path:'',
          redirect:"top",
        },
        {
          path:'top/:page?',
          component:Top,
          meta: {
            progress: {
              func: [
                {call: 'color', modifier: 'temp', argument: '#ffb000'},
                {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                {call: 'location', modifier: 'temp', argument: 'top'},
                {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
              ]
            }
          }
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
        {
          path:'item/:id',
          component:Item
        },
        {
          path:'user/:user',
          component:User
        }
      ]
    }
  ]
})
