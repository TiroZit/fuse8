<template lang="pug">
include /_mixins
section.qualification-skills
  h3.qualification-skills__title Квалификация 
  .qualification-skills__items
    .qualification-skills__item
      span Курсы Skillbox
      span
        time.qualification-skills__time.qualification-skills__time_begin(datetime='2021') 2021
        time.qualification-skills__time.qualification-skills__time_end(datetime='2022') 2022
    .qualification-skills__item
      span Курсы GeekBrains
      span
        time.qualification-skills__time.qualification-skills__time_begin(datetime='2019') 2019
        time.qualification-skills__time.qualification-skills__time_end(datetime='2020') 2020

</template>
<script>
export default {
  name: "qualification-skills",
};
</script>
<style lang="scss" scoped>
.qualification-skills {
  // .qualification-skills__title
  &__title {
    font-weight: 700;
    font-size: rem(26);
  }
  // .qualification-skills__items
  &__items {
    margin-top: rem(25);
  }
  // .qualification-skills__item
  &__item {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: rem(26);
    line-height: 1.1;
    &:not(:last-child) {
      margin-bottom: rem(30);
    }
  }
  // .qualification-skills__time
  &__time {
    // .qualification-skills__time_begin
    &_begin {
      &:not(:last-child) {
        &::after{
          content:' - ';
        }
      }
    }
    // .qualification-skills__time_end
    &_end {
    }
  }
}
</style>
