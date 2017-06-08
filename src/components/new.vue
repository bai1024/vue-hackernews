<template lang="pug">
  ul.news-list
    <vue-progress-bar></vue-progress-bar>
    item(v-for='id in ids', :id = 'id', :key='id')
</template>

<script>
  import Item from '@/components/item'
  import axios from 'axios'
  import VueProgressBar from 'vue-progressbar'

  export default{
    data(){
      return {
        ids: null
      }
    },
    created(){
      this.$Progress.start()
      axios.get(" https://hacker-news.firebaseio.com/v0/newstories.json")
      .then(res => {
        this.ids = res.data.slice(0,20)
        this.$Progress.finish()
      })
    },
    components: { Item },
  }
</script>

<style lang="stylus">
        
</style>