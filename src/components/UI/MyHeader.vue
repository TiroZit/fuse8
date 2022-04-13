<template lang="pug">
include /_mixins
header.header
  .header__container
    h1.header__title
      | Приветствую, 
      b Леонид!
</template>
<script>
export default {
  name: 'my-header'
}
</script>
<style lang="scss" scoped>
.header{
  background: url("@img/bg-header.jpg") left / cover no-repeat;
  &__container{
    display: flex;
    align-items: center;
    height: 100%;
  }
  &__title{
    font-weight: 500;
    @include adaptiveValue("font-size", 28, 22);
    color: var(--color-white);
    & b{
      font-weight: 700;
    }
  }
}
</style>