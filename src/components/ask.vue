<template lang='pug'>
  .main-container
    items(
      dataURL='https://hacker-news.firebaseio.com/v0/askstories.json',
      path='/ask'
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