<template lang="pug">
include /_mixins
section.about-me
  .about-me__container
    h2.about-me__title О себе
    .about-me__body
      .about-me__item(v-for="question in questions" :key="question.id_question")
        h3.about-me__item-title {{question.question}}
        p.about-me__item-decription {{question.answer}}
</template>
<script>
export default {
  name: "about-me",
  props:{
    questions: {}
  }
};
</script>
<style lang="scss" scoped>
.about-me {
  @include adaptiveValue("margin-top", 70, 55);
  // .about-me__container
  &__container {
  }
  // .about-me__title
  &__title {
    font-weight: 900;
    @include adaptiveValue("font-size", 60, 42);
  }
  // .about-me__body
  &__body {
    margin-top: rem(25);
  }
  // .about-me__item
  &__item {
    &:not(:last-child) {
      @include adaptiveValue("margin-bottom", 70, 30);
    }
  }
  // .about-me__item-title
  &__item-title {
    font-weight: 500;
    @include adaptiveValue("font-size", 38, 22);
    width: fit-content;
    background-color: var(--color-yellow);
    padding: rem(5) rem(15) rem(5) rem(20);
    @include media-breakpoint-up(container){
      margin-left: rem(-20);
    }
  }
  // .about-me__item-decription
  &__item-decription {
    @include adaptiveValue("font-size", 26, 16);
    margin-top: rem(5);
  }
}
</style>
