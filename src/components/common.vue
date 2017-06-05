<template lang="pug">
  .container
    header
      nav
        img(src='../assets/logo.png')
        router-link(to='/top') Top
        router-link(to='/new') New
        router-link(to='/show') Show
        router-link(to='/ask') Ask
        router-link(to='/job') Jobs
        p hhahah
    .page-nav hahah
    .main
      .main-container
        router-view 
</template>

<script>
  
</script>

<style lang="stylus">
  header
    background: #f60
    nav
      max-width: 800px
      display: flex
      align-items: center
      margin: auto
      color: white
      padding: 20px 0
      > a
        text-decoration: none
        margin-right: 30px
        font-weight: 500
        color: white
    img
      width: 24px
      margin-right: 30px
    /
    p
      margin-left: auto
</style>