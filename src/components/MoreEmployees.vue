<template lang="pug">
include /_mixins
section.more-employees
  .more-employees__container
    h2.more-employees__title Больше сотрудников
    .more-employees__items
      article.more-employees__item
        +image('@img/persons/anton-shapovalov.jpg', 'Антон Шаповалов').more-employees__item-img
        a.more-employees__item-footer(href='#')
          .more-employees__item-title Антон Шаповалов
          .more-employees__item-subtitle QA-специалист
      article.more-employees__item
        +image('@img/persons/anton-permyakov.jpg', 'Антон Пермяков').more-employees__item-img
        a.more-employees__item-footer(href='#')
          .more-employees__item-title Антон Пермяков
          .more-employees__item-subtitle Директор, совладелец компании
      article.more-employees__item
        +image('@img/persons/andrey-stepanov.jpg', 'Андрей Степанов').more-employees__item-img
        a.more-employees__item-footer(href='#')
          .more-employees__item-title Андрей Степанов
          .more-employees__item-subtitle Технический директор
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
    @include adaptiveValue("font-size", 60, 42);
  }
  // .more-employees__items
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(rem(300), rem(324)));
    justify-content: space-between;
    gap: rem(30);
    @include adaptiveValue("margin-top", 50, 30);
    @include media-breakpoint-down(tablet){
      justify-content: center;
    }
  }
  // .more-employees__item
  &__item {
    position: relative;
    border: 2px solid var(--color-blackRaisin);
  }
  // .more-employees__item-img
  &__item-img {
    width: 100%;
  }
  // .more-employees__item-footer
  &__item-footer {
    display: block;
    border-top: 2px solid var(--color-blackRaisin);
    padding: rem(15) rem(10);
    background-color: var(--color-yellow);
    &::before{
      content:'';
      position: absolute;
      inset: 0;
    }
  }
  // .more-employees__item-title
  &__item-title {
    @include adaptiveValue("font-size", 24, 18);
  }
  // .more-employees__item-subtitle
  &__item-subtitle {
    font-size: rem(15);
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
