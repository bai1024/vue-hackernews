import Vue from 'vue'
import timeago from "timeago.js"

Vue.filter('getDomain',function(url){
  if(!url) return
  return '(' + new URL(url).host + ')'
})

Vue.filter('timeAgo',function(ts){
  return timeago().format(ts * 1000)
})