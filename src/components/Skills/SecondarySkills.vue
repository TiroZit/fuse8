<template lang="pug">
include /_mixins
section.secondary-skills
  h3.secondary-skills__title Вторичные навыки
  .secondary-skills__items
    .secondary-skills__item Арт-дизайн
    .secondary-skills__item CSS
    .secondary-skills__item Брендинг
    .secondary-skills__item Графический дизайнер
    .secondary-skills__item HTML
    .secondary-skills__item Социальные сети
    .secondary-skills__item Иллюстрации
</template>
<script>
export default {
  name: 'secondary-skills',
}
</script>
<style lang="scss" scoped>
.secondary-skills{
  &__title,
  &__item{
    font-weight: 700;
    font-size: 26px;
  }
  &__items{
    display: flex;
    flex-wrap: wrap;
    column-gap: rem(16);
    row-gap: rem(18);
    margin-top: rem(25);
  }
  &__item{
    border: 1px solid var(--color-blackRaisin);
    padding: rem(10) rem(25);
  }
}
</style>