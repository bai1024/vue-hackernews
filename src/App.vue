<template lang="pug"  >
  #app
    <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style src='normalize.css'></style>
<style lang='stylus'>
  body
    background: #f2f3f5
  #app 
    font-family: '.SF NS Text', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
</style>
