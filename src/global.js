import Vue from 'vue'
import timeago from "timeago"

Vue.filter('getDomain',function(url){
  if(!url) return
  return '(' + new URL(url).host + ')'
})

Vue.filter('timeago',function(ts){
  return timeago().formate(ts * 1000)
})