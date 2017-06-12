<template lang='pug'>
  .items
    page-nav(
     
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
  import VueProgressBar from 'vue-progressbar'

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
        Promise.all(ids.map(id => {
          return axios.get(url + id + '.json')
        })).then(d => {
          this.$Progress.finish()
          this.items = d.map(res => res.data)
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
      page:function(){
        this.fetchAllItem()
      }
    },
    components: { ItemList, pageNav}
};
</script>

<style lang='stylus'>
  .fade-enter-active
    transition: opacity 10s
  .fade-leave-active 
    transition: opacity .5s
  .fade-enter, .fade-leave-active 
    opacity: 0
    
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