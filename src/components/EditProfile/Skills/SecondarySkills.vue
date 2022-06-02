<template lang="pug">
include /_mixins
section.secondary-skills
  h3.secondary-skills__title Вторичные навыки
  .secondary-skills__items
    .secondary-skills__item(v-for="skillSecondary in skillsSecondary" :key="skillSecondary.length")
      .secondary-skills__item-title {{ skillSecondary }}
      button.secondary-skills__item-remove
    input.secondary-skills__item-input.input(type="text" value="" placeholder="Добавьте навык")
</template>
<script>
export default {
  name: 'secondary-skills',
  props: {
    skillsSecondary: {},
  },
}
</script>
<style lang="scss" scoped>
.secondary-skills {
  &__title,
  &__item {
    font-weight: 700;
    @include adaptiveValue('font-size', 26, 18);
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    @include adaptiveValue('gap', 15, 10);
    margin-top: rem(25);
  }
  &__item {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-blackRaisin);
    padding: rem(10) rem(25);
    @include media-breakpoint-down(tablet) {
      padding: rem(10) rem(15);
    }
  }
  &__item-remove {
    width: rem(23);
    height: rem(23);
    background: url('@img/close.svg') 0 0 no-repeat;
    margin-left: rem(20);
  }
  &__item-input {
    font-size: rem(26);
    padding: rem(10) rem(25);
    @include media-breakpoint-down(tablet) {
      padding: rem(10) rem(15);
    }
  }
}
</style>
