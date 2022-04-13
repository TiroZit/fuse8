<template lang="pug">
include /_mixins
section.qualification-skills
  h3.qualification-skills__title Квалификация 
  .qualification-skills__items
    .qualification-skills__item(v-for="qualification in qualifications" :key="qualification.id_certification")
      span {{ qualification.title }}
      span
        time.qualification-skills__time.qualification-skills__time_begin(:datetime='qualification.start_year') {{ qualification.start_year }}
        time.qualification-skills__time.qualification-skills__time_end(:datetime='qualification.ended_year') {{ qualification.ended_year }}
</template>
<script>
export default {
  name: "qualification-skills",
  props:{
    qualifications: {}
  }
};
</script>
<style lang="scss" scoped>
.qualification-skills {
  // .qualification-skills__title
  &__title {
    font-weight: 700;
    @include adaptiveValue("font-size", 26, 18);
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
    @include adaptiveValue("font-size", 26, 18);
    line-height: 1.1;
    &:not(:last-child) {
      @include adaptiveValue("margin-bottom", 30, 15);
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
