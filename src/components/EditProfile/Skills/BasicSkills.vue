<template lang="pug">
include /_mixins
section.basic-skills
  h3.basic-skills__title Основные навыки
  .basic-skills__items
    .basic-skills__item(v-for="skillBase in skillsBase" :key="skillBase.length")
      input.basic-skills__item-title.input(type="text" value="" placeholder="Добавьте навык")
  MyButton.basic-skills__btn.button-add.button Добавить ещё навык
</template>
<script>
import MyButton from '../../UI/MyButton.vue'
export default {
  name: 'basic-skills',
  props: {
    skillsBase: {},
  },
  components: { MyButton },
}
</script>
<style lang="scss" scoped>
.basic-skills {
  &__title,
  &__item {
    font-weight: 700;
    @include adaptiveValue('font-size', 28, 18);
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: rem(25);
    @include adaptiveValue('column-gap', 100, 10);
    row-gap: rem(20);
  }
  &__item {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 0 1 rem(415);
    @include adaptiveValue('flex-basis', 215, 120);
    @include adaptiveValue('min-height', 140, 100);
    input {
      height: 100%;
      @include adaptiveValue('padding', 20, 10);
      overflow-wrap: break-word;
      @include adaptiveValue('font-size', 20, 16);
    }
    // @include media-breakpoint-up(container) {
    //   &:not(:last-child) {
    //     &::after {
    //       content: '';
    //       position: absolute;
    //       top: calc(50% - rem(4));
    //       right: calc(-50% - rem(23.5));
    //       display: block;
    //       width: rem(95);
    //       height: rem(8);
    //       background-color: var(--color-blackRaisin);
    //     }
    //   }
    // }
  }
  &__btn {
    margin-top: rem(30);
  }
}
</style>
