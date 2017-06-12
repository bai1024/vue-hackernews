<template lang='pug'>
  .page-nav
    span.page-nav__btn(
      
    )
     < prev
    span 1/2
    span.page-nav__btn(
    
    ) more >
</template>

<script>
export default {

  name: 'page-nav',

  data () {
    return {

    };
  }
};
</script>

<style lang='stylus'>
  .page-nav
    padding: 10px 0
    color: #34495e
    font-size: 1em
  .page-nav__btn
    cursor: pointer
    &:first-child
      margin-left: auto
    &:last-child
      margin-right: auto
  .page-nav__btn--disabled
    color: #ccc
    cursor: not-allowed
  .page-nav__current
    margin: 10px
</style>