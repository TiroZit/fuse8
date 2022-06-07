<template lang="pug">
include /_mixins
section.about-me
  .about-me__container
    title-h2.about-me__title О себе
    .about-me__body
      .about-me__item(v-for="question in questions" :key="question.id_question")
        input.about-me__item-title.input(type="text" v-bind:value="question.question" placeholder="Название блока")
        textarea.about-me__item-decription.input(type="text" v-bind:value="question.answer" placeholder="Название блока")
      MyButton.about-me__btn.button-add.button Добавить ещё блок
</template>
<script>
import MyButton from '../UI/MyButton.vue'
export default {
  name: 'about-me',
  props: {
    questions: {},
  },
  components: { MyButton },
}
</script>
<style lang="scss" scoped>
.about-me {
  @include adaptiveValue('margin-top', 70, 55);
  // .about-me__container
  &__container {
  }
  // .about-me__title
  &__title {
  }
  // .about-me__body
  &__body {
    margin-top: rem(25);
  }
  // .about-me__item
  &__item {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: rem(30);
    }
  }
  // .about-me__item-title
  &__item-title {
    font-size: rem(18);
    max-width: rem(400);
    padding: rem(5) rem(15) rem(5) rem(20);
  }
  // .about-me__item-decription
  &__item-decription {
    resize: none;
    font-size: rem(18);
    margin-top: rem(15);
    min-height: rem(137);
    padding: rem(10) rem(20);
  }
}
</style>
