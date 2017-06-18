<template lang='pug'>
  .items
    <vue-progress-bar></vue-progress-bar>
    template(v-if='data')
      page-nav(
        :totalPage='totalPage'
        :onPrev='onPrev'
        :onNext='onNext'
        :currentPage='page'
      )
      <transition name='fade'>
        ul.news-list
          item-list(
            v-for="item in items",
            :key="item.id",
            :item="item",
          )
      </transition>
</template> 

<script>
  import axios from 'axios'
  import ItemList from '@/components/item-list'
  import pageNav from '@/components/page-nav'

  export default {
    name: '',
    props: {
      dataURL: {
        type: String,
        required: true,
      },
      path:{
        type: String,
        required: true,
      }
    },
    data() {
      return {
        page: null,
        items: null,
        data: null,
      };
    },
    created() {
      axios.get(this.dataURL)
        .then(res => {
          this.data = res.data
          this.page = Number(this.$route.params.page) || 1
        })
    },
    computed:{
      totalPage() {
        return Math.ceil(this.data.length / 20)
      }
    },
    methods: {
      fetchAllItem() {
        var url = 'https://hacker-news.firebaseio.com/v0/item/'
        var start = (this.page - 1) * 20
        var ids = this.data.slice(start,start + 20)
        this.$Progress.start()
        Promise.all(ids.map(id => {
          return axios.get(url + id + '.json')
        })).then(d => {
          this.items = d.map(res => res.data)
          this.$Progress.finish()
        })
      },
      onPrev() {
        this.$router.push(this.path + '/' + (this.page - 1))
      },
      onNext() {
        this.$router.push(this.path + '/' + (this.page + 1))
      }
    },
    watch:{
      "$route": function() {
        this.page = Number(this.$route.params.page) || 1
        this.items = null
      },
      page:function(){
        this.fetchAllItem()
      }
    },
    components: { ItemList, pageNav}
};
</script>

<style lang='stylus'>
  .fade-enter-active
    transition: opacity 2s
  .fade-leave-active 
    transition: opacity .5s
  .fade-enter, .fade-leave-active 
    opacity: 0
    
  #nprogress
    .bar
      background: rgb(255, 202, 43) !important
      height: 4px

    
  .page-nav
    background: white
  .news-list
    max-width: 800px
    margin: auto
    margin-top: 20px
    background: white
    padding: 0
    border-radius: 5px
</style>