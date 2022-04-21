<template lang="pug">
include /_mixins
header
aside-bar
main.page__navigation.navigation
  .navigation__container
    h1.navigation__title Проектируем дизайн и разрабатываем IT-продукты для бизнеса.
    router-link.navigation__link(to="/") Веб-разработка
    router-link.navigation__link(to="/") Автоматизация бизнеса
    router-link.navigation__link(to="/") Финансовые платформы
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.navigation{
  @include adaptiveValue("margin-top", 100, 0);
  padding-bottom: rem(50);
  &__title{
    @include adaptiveValue("font-size", 60, 26);
    font-weight: 900;
    @include adaptiveValue("margin-bottom", 70, 30);
    max-width: rem(1300);
  }
  &__link{
    display: block;
    @include adaptiveValue("font-size", 55, 21);
    text-decoration: underline;
    &:not(:last-child) {
      @include adaptiveValue("margin-bottom", 50, 20);
    }
  }
}
</style>