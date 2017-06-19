<template lang='pug'>
  <transition name='fade'>
    .user-container
      template(v-if='d')
        h1 User: {{ d.id }}
        ul.meta
          li Created: {{ d.created | timeAgo}}
          li Karma: {{ d.karma }}
          li(v-html='d.about').about
        div.links 
          a(:href='"https://news.ycombinator.com/submitted?id="+ d.id') submissons
          | &nbsp|&nbsp
          a(:href='"https://news.ycombinator.com/threads?id="+ d.id') comments
  </transition>
</template>

<script>
import axios from 'axios'

export default {
  name: 'user',

  data () {
    return {
      d:null
    };
  },
  created() {
    var user= this.$route.params.user
    axios.get(`https://hacker-news.firebaseio.com/v0/user/${user}.json`)
      .then(res => {
        this.d = res.data
      })
  },
};
</script>

<style lang='stylus'>  
  .fade-enter-active
    transition: opacity 2s
  .fade-leave-active 
    transition: opacity .5s
  .fade-enter, .fade-leave-active 
    opacity: 0
  
  .user-container
    background: #ffffff
    max-width: 800px
    margin: auto
    padding: 2em 3em
    color: #34495e
    h1 
      text-align: left
      margin: 0;
      font-size: 1.5em;
    .meta
      padding: 0
      list-style: none
      text-align: left
      font-size: 1em;
    .about
      margin: 1em 0;
    .links
      text-align: left
      a
        font-size: 1em
        color: #34495e   
</style>