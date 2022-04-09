<template lang="pug">
include /_mixins
.personal-facts
  .personal-facts__item
    .personal-facts__title 13
    .personal-facts__subtitle Законченых проектов
  .personal-facts__item
    .personal-facts__title 10
    .personal-facts__subtitle Опыт работы
  .personal-facts__item
    .personal-facts__title 3
    .personal-facts__subtitle Прекрасных детей
  .personal-facts__item
    .personal-facts__title 2
    .personal-facts__subtitle оконченных образований 
</template>
<script>
export default {
  name: "personal-facts",
};
</script>
<style lang="scss" scoped>
.personal-facts {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: rem(15);
  border: 2px solid var(--color-blackRaisin);
  background-color: var(--color-yellow);
  padding: rem(20);
  // .personal-facts__item
  &__item {
    flex: 0 0 rem(210);
    text-align: center;
  }
  // .personal-facts__title
  &__title {
    font-size: rem(60);
    font-weight: 700;
  }
  // .personal-facts__subtitle
  &__subtitle {
    font-size: rem(22);
    font-weight: 500;
  }
}
</style>
