<template lang="pug">
  li.news-item
    div(v-if='!item')
    template(v-else)
      span.score {{ item.score }}
      p.title
        template(v-if='item.url') 
          a(:href='item.url') {{ item.title }}
          span {{ item.url | getDomain}}
        template(v-else)
          a(:href='"/item/" + item.by') {{ item.title }}
      .meta 
        span.by 
          | by
          a(:href='"/user/"+ item.by') {{ item.by }}
        span.time {{ item.time }}
        template(v-if='item.descendants')
          span.comments 
            | | 
            a(:href='"/user/"+ item.by') {{ item.descendants }} comments
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'item',
    props: {
      item: {
        type: Object,
        required:true
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
      font-weight: 700
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