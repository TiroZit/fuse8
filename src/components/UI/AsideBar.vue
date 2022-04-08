<template lang="pug">
include /_mixins
aside.aside
  .aside__logo
    svg.i-logo(aria-hidden)
      use(xlink:href=`img/icons/icons.svg#svg-logo`)
  .aside__menu
    .aside__burger
      button.burger(type='button')
        span
    a.aside__search(href='#')
      svg.i-search(style=`fill: currentColor;` aria-hidden)
        use(xlink:href=`img/icons/icons.svg#svg-search`)
    a.aside__edit.active(href='#')
      svg.i-pencil(style=`fill: currentColor;` aria-hidden)
        use(xlink:href=`img/icons/icons.svg#svg-pencil`)
    a.aside__avatar(href='#')
      +image('@img/avatar.jpg', 'аватар', '41', '41')
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.aside {
  position: relative;
  background-color: var(--color-yellow);
  &__logo {
    position: relative;
    margin-bottom: rem(50);
    & .i-logo{
      width: rem(100);
      height: rem(100);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: calc(50% - rem(33));
      bottom: 0;
      width: rem(66);
      height: 2px;
      background-color: #000;
    }
  }
  &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__burger,
  &__search,
  &__edit {
    display: flex;
    align-items: center;
    justify-content: center;
    height: rem(62);
    &.active {
      width: 100%;
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
    margin-top: rem(35);
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
    span {
      width: 0;
    }
    &::before,
    &::after {
      background-color: var(--color-white);
    }
    &::before {
      top: calc(50% - rem(2));
      transform: rotate(-45deg);
    }
    &::after {
      bottom: calc(50% - rem(2));
      transform: rotate(45deg);
    }
  }
}
</style>
