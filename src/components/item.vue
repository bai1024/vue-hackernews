<template lang="pug">
  li.news-item
    div(v-if='!id')
      p loading
    template(v-else)
      span.score {{ d.score }}
      p.title
        template(v-if='d.url') 
          a(:href='d.url') {{ d.title }}
          span {{ d.url | getDomain}}
        template(v-else)
          a(:href='"/item/" + d.by') {{ d.title }}
      .meta 
        span.by 
          | by
          a(:href='"/user/"+ d.by') {{ d.by }}
        span.time {{ d.time }}
        template(v-if='d.descendants')
          span.comments 
            | | 
            a(:href='"/user/"+ d.by') {{ d.descendants }} comments
</template>

<script>
  import axios from 'axios'
  // import timeago from 'timeago.js'

  export default {
    name: 'item',
    props: {
      id: {
        type: Number,
        required:true
      }
    },
    data () {
      return { 
        d: null
      };
    },
    created() {
       axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.id}.json`)
      .then(res => {
        this.d = res.data
      })
    },
    filters:{
      getDomain(url){
        return '('+ url.match(/https?:\/\/(.+?)\//)[1] + ')'
      },
      timeAgo(ts) {
        return timeago().format(ts * 1000)
      }
    }
  };
</script>

<style lang="stylus">
  li
    list-style: none
    padding: 20px 30px 20px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 20px;
    .score
      color: #f60
      position: absolute
      top: 50%
      left: 0
      margin-top: -10px
      width: 80px
    p
      text-align: left
      > a
        color: #34495e 
        text-decoration: none
      > span
        font-size:0.85em
        color: #828282
        margin-left: 5px
    .meta
      text-align: left
      color: #828282
      font-size: 0.85em
      span
        margin-right: 10px
        > a
           margin-left: 5px
           color: #828282
           &:hover
             color: #f60
</style>