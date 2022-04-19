<template lang="pug">
include /_mixins
router-view
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
// Оболочка
.wrapper {
  display: grid;
  grid-template-rows: rem(80) 1fr;
  overflow: hidden;
  min-height: 100%;
  @include media-breakpoint-down(tablet){
    grid-template-rows: rem(80) rem(80) 1fr;
    grid-template-columns: 1fr;
  }
  @include media-breakpoint-up(tablet){
    grid-template-columns: rem(80) 1fr;
  }
  > header{
    @include media-breakpoint-up(tablet){
      grid-column: 2;
    }
    @include media-breakpoint-down(tablet){
      grid-row: 2;
    }
  }
  > aside{
    @include media-breakpoint-up(tablet){
      grid-row: 1 / span 2;
    }
  }
  > main {
    @include media-breakpoint-up(tablet){
      grid-column: 3;
    }
    @include media-breakpoint-down(tablet){
      grid-row: 3;
    }
  }
}
</style>