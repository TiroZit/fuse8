<template lang="pug">
include /_mixins
section.qualification-skills
  h3.qualification-skills__title Квалификация 
  .qualification-skills__items
    .qualification-skills__item(v-for="qualification in qualifications" :key="qualification.id_certification")
      input.qualification-skills__title.input(type="text" value="" placeholder="Курс")
      span
        input.qualification-skills__time.qualification-skills__time_begin.input(type="number" value="" placeholder="Год начала")
        input.qualification-skills__time.qualification-skills__time_end.input(type="number" value="" placeholder="Год окончания")
  MyButton.qualification-skills__btn.button-add.button Добавить ещё курс
</template>
<script>
import MyButton from '../../UI/MyButton.vue'
export default {
  name: 'qualification-skills',
  props: {
    qualifications: {},
  },
  components: { MyButton },
}
</script>
<style lang="scss" scoped>
.qualification-skills {
  // .qualification-skills__title
  &__title {
    font-weight: 700;
    @include adaptiveValue('font-size', 26, 18);
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
    font-size: rem(18);
    line-height: 1.1;
    &:not(:last-child) {
      @include adaptiveValue('margin-bottom', 30, 15);
    }
  }
  &__title {
    font-size: rem(18);
    max-width: rem(236);
  }
  // .qualification-skills__time
  &__time {
    display: flex;
    margin-top: rem(10);
    max-width: rem(200);
    &:not(:last-child) {
      margin-bottom: rem(10);
    }
    // .qualification-skills__time_begin
    &_begin {
      &:not(:last-child) {
        &::after {
          content: ' - ';
        }
      }
    }
    // .qualification-skills__time_end
    &_end {
    }
  }
  &__btn {
    margin-top: rem(20);
  }
  input {
    padding: rem(5) rem(10);
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
}
</style>
