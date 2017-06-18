import Vue from 'vue'
import timeago from "timeago.js"
import Loading from '@/components/Loading'
import VueProgressBar from 'vue-progressbar'

Vue.component('loading', Loading)

Vue.filter('getDomain',function(url){
  if(!url) return
  return '(' + new URL(url).host + ')'
})

Vue.filter('timeAgo',function(ts){
  return timeago().format(ts * 1000)
})

const options = {
  color: 'rgb(255, 202, 43)',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)