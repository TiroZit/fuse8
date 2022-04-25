<template lang="pug">
include /_mixins
section.more-employees
  .more-employees__container
    title-h2.more-employees__title Больше сотрудников
    .more-employees__items
      //- employee.more-employees__item(:profile='profile')
      //- article.more-employees__item
      //-   +image('@img/persons/anton-shapovalov.jpg', 'Антон Шаповалов').more-employees__item-img
      //-   a(href='#')
      //-     .more-employees__item-title Антон Шаповалов
      //-     .more-employees__item-subtitle QA-специалист
      //- article.more-employees__item
      //-   +image('@img/persons/anton-permyakov.jpg', 'Антон Пермяков').more-employees__item-img
      //-   a.more-employees__item-footer(href='#')
      //-     .more-employees__item-title Антон Пермяков
      //-     .more-employees__item-subtitle Директор, совладелец компании
      //- article.more-employees__item
      //-   +image('@img/persons/andrey-stepanov.jpg', 'Андрей Степанов').more-employees__item-img
      //-   a.more-employees__item-footer(href='#')
      //-     .more-employees__item-title 
      //-     .more-employees__item-subtitle 
    button.more-employees__btn-more Посмотреть ещё
</template>
<script>
export default {
  name: "more-employees",
};
</script>
<style lang="scss" scoped>
.more-employees {
  @include adaptiveValue("margin-top", 70, 55);
  font-weight: 900;
  // .more-employees__container
  &__container {
  }
  // .more-employees__title
  &__title {
  }
  // .more-employees__items
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(rem(300), rem(324)));
    grid-template-rows: repeat(auto-fit, rem(392));
    justify-content: space-between;
    gap: rem(30);
    @include adaptiveValue("margin-top", 50, 30);
    @include media-breakpoint-down(tablet){
      justify-content: center;
    }
  }
  &__btn-more{
    display: block;
    font-weight: inherit;
    @include adaptiveValue("font-size", 28, 22);
    border: 2px solid var(--color-blackRaisin);
    margin: rem(75) auto rem(0) auto;
    @include media-breakpoint-down(tablet){
      margin: rem(45) auto rem(0) auto;
    }
    padding: rem(10) rem(25);
  }
}
</style>
