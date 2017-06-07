<template lang="pug">
    ul.news-list
      item(v-for='id in ids', :id = 'id', :key='id')
</template>

<script>
  import axios from 'axios'
  import Item from '@/components/item'
  export default{
    data(){
      return {
        ids: null
      }
    },
    created(){
     axios.get(" https://hacker-news.firebaseio.com/v0/askstories.json")
      .then(res => {
        this.ids = res.data.slice(0,20)
      })
    },
    components: { Item },
  }
</script>

<style lang="stylus">
    
        
</style>