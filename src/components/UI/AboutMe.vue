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
  margin-top: rem(70);
  // .about-me__container
  &__container {
  }
  // .about-me__title
  &__title {
    font-weight: 900;
    font-size: rem(60);
  }
  // .about-me__body
  &__body {
    margin-top: rem(25);
  }
  // .about-me__item
  &__item {
    &:not(:last-child) {
      margin-bottom: rem(70);
    }
  }
  // .about-me__item-title
  &__item-title {
    font-weight: 500;
    font-size: rem(38);
    width: fit-content;
    background-color: var(--color-yellow);
    padding: rem(5) rem(15) rem(5) rem(20);
    @include media-breakpoint-up(container){
      margin-left: rem(-20);
    }
  }
  // .about-me__item-decription
  &__item-decription {
    font-size: rem(26);
    margin-top: rem(5);
  }
}
</style>
