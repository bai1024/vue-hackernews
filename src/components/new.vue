<template lang='pug'>
  .main-container
    items(
      dataURL='https://hacker-news.firebaseio.com/v0/newstories.json',
      path='/new'
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