<template lang="pug">
include /_mixins
.socials
  a.socials__item(href="#" target="_blank")
    svg.i-behance(style=`fill: currentColor;` aria-hidden)
      use(xlink:href=`img/icons/icons.svg#svg-behance`)
  a.socials__item(href="#" target="_blank")
    svg.i-vk(style=`fill: currentColor;` aria-hidden)
      use(xlink:href=`img/icons/icons.svg#svg-vk`)
  a.socials__item(href="#" target="_blank")
    svg.i-twitter(style=`fill: currentColor;` aria-hidden)
      use(xlink:href=`img/icons/icons.svg#svg-twitter`)
</template>
<script>
export default {
  name: "socials",
}
</script>
<style lang="scss" scoped>
.socials {
  display: flex;
  gap: rem(20);
  // .socials__item
  &__item {
    display: flex;
    width: rem(46);
    height: rem(47);
    border: rem(4) solid var(--color-yellow);
    border-radius: 50%;
    @media (any-hover: hover){
      transition: transform .3s ease 0s;
      &:hover{
        transform: scale(1.1);
      }
    }
    svg{
      margin: auto;
      width: rem(23);
      height: rem(23);
    }
  }
}
</style>