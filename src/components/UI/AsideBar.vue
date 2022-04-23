<template lang="pug">
include /_mixins
aside.aside
  router-link.aside__logo(to="/")
    svg.i-logo(aria-hidden)
      use(xlink:href=`img/icons/icons.svg#svg-logo`)
  .aside__menu
    router-link.aside__burger(to="/navigation" active-class="active")
      button.burger(type='button')
        span
    router-link.aside__search(to="/search" active-class="active")
      svg.i-search(style=`fill: currentColor;` aria-hidden)
        use(xlink:href=`img/icons/icons.svg#svg-search`)
    router-link.aside__edit(to="/profile" active-class="active")
      svg.i-pencil(style=`fill: currentColor;` aria-hidden)
        use(xlink:href=`img/icons/icons.svg#svg-pencil`)
    router-link.aside__avatar(to="/profile")
      +image('@img/avatar.jpg', 'аватар', '41', '41')
</template>
<script>
export default {
  name: 'aside-bar'
};
</script>
<style scoped lang="scss">
.aside {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  @include media-breakpoint-up(tablet){
    height: 100%;
    padding-bottom: rem(20);
  }
  @include media-breakpoint-down(tablet){
    display: flex;
    width: 100%;
    height: rem(80);
    padding-right: rem(10);
  }
  background-color: var(--color-yellow);
  &__logo {
    position: relative;
    display: block;
    @include media-breakpoint-up(tablet){
      margin-bottom: rem(30);
    }
    @include media-breakpoint-down(tablet){
      @include adaptiveValue("margin-right", 30, 15, 768);
    }
    & .i-logo{
      width: rem(80);
      height: rem(80);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      @include media-breakpoint-up(tablet){
        left: calc(50% - rem(33));
        bottom: 0;
      }
      width: rem(66);
      height: 2px;
      background-color: #000;
      @include media-breakpoint-down(tablet){
        right: 0;
        top: calc(50% - rem(33));
        width: 2px;
        height: rem(66);
      }
    }
  }
  &__menu {
    display: flex;
    align-items: center;
    @include media-breakpoint-up(tablet){
      flex-direction: column;
    }
    @include media-breakpoint-down(tablet){
      justify-content: center;
      width: 100%;
    }
  }
  &__burger,
  &__search,
  &__edit {
    display: flex;
    align-items: center;
    justify-content: center;
    @include media-breakpoint-up(tablet){
      height: rem(60);
    }
    @include media-breakpoint-down(tablet){
      flex: 0 1 rem(60);
    }
    &.active {
      @include media-breakpoint-up(tablet){
        width: 100%;
      }
      @include media-breakpoint-down(tablet){
        height: 100%;
      }
      background-color: var(--color-black);
    }
  }
  &__search{
    color: var(--color-blackRaisin);
    &.active{
      color: var(--color-white);
    }
    & .i-search {
      width: rem(30);
      height: rem(30);
    }
    
  }
  &__edit{
    color: var(--color-blackRaisin);
    &.active{
      color: var(--color-white);
    }
    & .i-pencil {
      width: rem(30);
      height: rem(30);
    }
  }
  &__avatar{
    @include media-breakpoint-up(tablet){
      margin-top: rem(35);
    }
    @include media-breakpoint-down(tablet){
      padding-left: rem(10);
      margin-left: auto;
    }
    & img{
      border-radius: 50%;
    }
  }
}
.burger {
  display: block;
  position: relative;
  width: rem(30);
  height: rem(22);
  margin: 0 auto;
  z-index: 5;
  span,
  &::before,
  &::after {
    content: "";
    transition: all 0.3s ease 0s;
    right: 0;
    position: absolute;
    width: 100%;
    height: rem(4);
    background-color: #000;
  }
  &::before {
    top: 0;
  }
  &::after {
    bottom: 0;
  }
  span {
    top: calc(50% - rem(2));
  }
  .active & {
    span,
    &::before,
    &::after {
      background-color: var(--color-white);
    }
  }
}
</style>
