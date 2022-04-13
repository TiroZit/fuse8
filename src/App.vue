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
	
  @include media-breakpoint-up(tablet){
    grid-template-columns: rem(80) 1fr;
  }
	grid-template-rows: rem(80) 1fr;
	min-height: 100%;
	overflow: hidden;
	> header{
		grid-column: 2;
	}
	> aside{
		grid-row: 1 / span 2;
    @include media-breakpoint-down(tablet){
      display: none;
    }
	}
	> main {
		grid-column: 2;
	}
}
</style>