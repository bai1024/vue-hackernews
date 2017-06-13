<template lang='pug'>
  .page-nav
    span.page-nav__btn(
      :class='{"page-nav__btn--disabled": prevDisabled}'
      @click='onPrev'
    )
     < prev
    span.page-nav__num {{ currentPage }} / {{ totalPage }}
    span.page-nav__btn(
      :class='{"page-nav__btn--disabled": nextDisabled}'
      @click='onNext'
    ) more >
</template>

<script>
export default {

  name: 'page-nav',
  props:{
    onPrev:{
      type: Function,
      required: true
    },
    onNext:{
      type: Function,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    totalPage:{
      type: Number,
      required: true
    }
  },
  data () {
    return {

    };
  },
  computed: {
    prevDisabled() {
      return this.currentPage === 1
    },
    nextDisabled() {
      return this.currentPage === this.totalPage
    },
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
  .page-nav__num
    margin: 10px
</style>