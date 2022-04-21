<template lang="pug">
include /_mixins
header
aside-bar
main.page__search.search
  .search__container
    form.search__form
      input.search__input(type="search" placeholder="Введите имя сотрудника, или депортамент")
      button.search__btn(type="submit")
        svg.i-search(style=`fill: currentColor;` aria-hidden)
          use(xlink:href=`img/icons/icons.svg#svg-search`)
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.search{
  @include adaptiveValue("margin-top", 150, 0);
  &__form{
    position: relative;
  }
  &__input{
    @include adaptiveValue("font-size", 55, 26);
    font-weight: 500;
    width: 100%;
    border-bottom: 3px solid var(--color-blackRaisin);
    transition: border-bottom .3s ease 0s;
    padding: rem(10);
    @include adaptiveValue("padding-right", 55, 35);
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration{
      appearance: none;
    }
    &.focus-visible{
      outline: 0;
      border-bottom: 3px solid var(--color-yellow);
    }
  }
  &__btn{
    position: absolute;
    top: calc(50% - 25%);
    right: 0;
    .i-search{
      @include adaptiveValue("width", 42, 30);
      @include adaptiveValue("height", 48, 36);
    }
  }
}
</style>