<template lang='pug'>
  .main-container
    items(
      dataURL='https://hacker-news.firebaseio.com/v0/jobstories.json',
      path='/job'
    )
</template>

<script>
  import Items from '@/components/items'
  
  export default {
    components: { Items },
  }
</script>

<style lang="stylus">
  
</style>