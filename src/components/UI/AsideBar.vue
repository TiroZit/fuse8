<template lang="pug">
include /_mixins
aside.aside
  .aside__logo
    +image("@img/logo.jpg", 'логотип', '66', '100')
  .aside__menu
    .aside__burger.active
      button.burger(type='button')
        span
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.aside {
  position: relative;
  background-color: var(--color-yellow);
  padding: 0 rem(17) rem(34) rem(17);
  &__logo {
    position: relative;
    margin-bottom: rem(50);
    &::after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: var(--color-black);
    }
  }
  &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__burger {
    padding: rem(20) 0;
    &.active {
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      background-color: var(--color-black);
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
    background-color: #fff;
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
  .menu-open & {
    span {
      width: 0;
    }
    &::before,
    &::after {
    }
    &::before {
      top: calc(50% - rem(1));
      transform: rotate(-45deg);
    }
    &::after {
      bottom: calc(50% - rem(1));
      transform: rotate(45deg);
    }
  }
}
</style>
