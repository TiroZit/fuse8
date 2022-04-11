<template lang="pug">
include /_mixins
section.more-employees
  .more-employees__container
    h2.more-employees__title Больше сотрудников
    .more-employees__items
      article.more-employees__item
        .more-employees__item-img
          +image('@img/persons/anton-shapovalov.jpg', 'Антон Шаповалов', '324', '320')
        a.more-employees__item-footer(href='#')
          .more-employees__item-title Антон Шаповалов
          .more-employees__item-subtitle QA-специалист
      article.more-employees__item
        .more-employees__item-img
          +image('@img/persons/anton-permyakov.jpg', 'Антон Пермяков', '324', '320')
        a.more-employees__item-footer(href='#')
          .more-employees__item-title Антон Пермяков
          .more-employees__item-subtitle Директор, совладелец компании
      article.more-employees__item
        .more-employees__item-img
          +image('@img/persons/andrey-stepanov.jpg', 'Андрей Степанов', '324', '320')
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
  margin-top: rem(65);
  font-weight: 900;
  // .more-employees__container
  &__container {
  }
  // .more-employees__title
  &__title {
    font-size: rem(60);
  }
  // .more-employees__items
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: rem(15);
    margin-top: rem(50);
  }
  // .more-employees__item
  &__item {
    position: relative;
    border: 2px solid var(--color-blackRaisin);
  }
  // .more-employees__item-img
  &__item-img {
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
    font-size: rem(24);
  }
  // .more-employees__item-subtitle
  &__item-subtitle {
    font-size: rem(15);
  }
  &__btn-more{
    display: block;
    font-weight: inherit;
    font-size: rem(28);
    border: 2px solid var(--color-blackRaisin);
    margin: rem(75) auto rem(0) auto;
    padding: rem(10) rem(25);
  }
}
</style>
