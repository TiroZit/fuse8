<template lang="pug">
include /_mixins
section.basic-skills
  h3.basic-skills__title Основные навыки
  .basic-skills__items
    .basic-skills__item(v-for="skillBase in skillsBase" :key="skillBase.length")
      .basic-skills__item-title {{ skillBase }}
</template>
<script>
export default {
  name: 'basic-skills',
  props: {
    skillsBase: {},
  },
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
    align-items: center;
    justify-content: center;
    flex: 0 0 rem(215);
    @include adaptiveValue('flex-basis', 215, 140);
    @include adaptiveValue('min-height', 215, 140);
    text-align: center;
    border-radius: 50%;
    background-color: var(--color-yellow);
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
}
</style>
