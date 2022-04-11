<template lang="pug">
include /_mixins
section.basic-skills
  h3.basic-skills__title Основные навыки
  .basic-skills__items
    .basic-skills__item Креативное мышление
    .basic-skills__item Web-design
    .basic-skills__item UX-design
    .basic-skills__item Фигменный стиль
</template>
<script>
export default {
  name: 'basic-skills'
}
</script>
<style lang="scss">
.basic-skills{
  &__title,
  &__item{
    font-weight: 700;
    font-size: rem(28);
  }
  &__items{
    display: flex;
    justify-content: space-between;
    margin-top: rem(25);
  }
  &__item{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 rem(215);
    min-height: rem(215);
    text-align: center;
    border-radius: 50%;
    background-color: var(--color-yellow);
    &:not(:last-child) {
      &::after{
        content:'';
        position: absolute;
        top: calc(50% - rem(4));
        right: calc(-50% - rem(23.5));
        display: block;
        width: rem(95);
        height: rem(8);
        background-color: var(--color-blackRaisin);
      }
    }
  }
}
</style>