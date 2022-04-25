<template lang="pug">
include /_mixins
header
aside-bar
main.page__department.department
  .department__container
    .department__info
      h1.department__title Web-дизайн
      p.department__text Сложно сказать, почему некоторые особенности внутренней политики подвергнуты целой серии независимых исследований.
    .department__items
      //- employee.department__item(:profile='profile')
      my-button.department__btn-more Посмотреть ещё
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.department{
  @include adaptiveValue("margin-top", 50, 0);
  &__info{
    display: flex;
    justify-content: space-between;
  }
  &__title{
    @include adaptiveValue("font-size", 78, 42);
    font-weight: 900;
  }
  &__text{
    @include adaptiveValue("font-size", 26, 16);
    font-weight: 500;
    flex: 0 1 rem(700);
  }
  &__items{
    @include adaptiveValue("margin-top", 150, 50);
  }
  &__btn-more{
    display: block;
    font-weight: 900;
    margin: rem(75) auto rem(0) auto;
    @include media-breakpoint-down(tablet){
      margin: rem(45) auto rem(0) auto;
    }
  }
}
</style>