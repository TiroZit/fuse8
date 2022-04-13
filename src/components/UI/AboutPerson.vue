<template lang="pug">
include /_mixins
section.about-person
  .about-person__container
    .about-person__wrapper
      img.about-person__avatar(:src='`@img/persons/` + profile.photo' alt='' loading='lazy')
      .about-person__info
        .about-person__info-headings
          h1.about-person__title
            | {{ profile.first_name }}
            |  
            | {{ profile.last_name }}
          .about-person__subtitle {{ profile.position_name }}
        .about-person__info-paragraphs
          p.about-person__paragraph(v-html="profile.about_me")
        socials.about-person__socials
    personal-facts.about-person__facts(:facts='facts')
</template>
<script>
export default {
  name: "about-person",
  props:{
    profile: {},
    facts: {}
  },
};
</script>
<style lang="scss" scoped>
.about-person {
  // .about-person__container
  &__container {
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    @include media-breakpoint-down(laptop-xxl){
      justify-content: center;
    }
  }
  // .about-person__avatar
  &__avatar {
    @include adaptiveValue("width", 384, 268);
    @include adaptiveValue("height", 540, 378);
    @include media-breakpoint-down(laptop-xl){
      margin-bottom: rem(20);
    }
  }
  // .about-person__info
  &__info {
    flex: 0 1 rem(855);
    @include media-breakpoint-up(laptop-xl){
      margin-left: rem(20);
    }
  }
  // .about-person__info-headings
  &__info-headings {
  }
  // .about-person__title
  &__title {
    @include adaptiveValue("font-size", 78, 54);
    font-weight: 900;
  }
  // .about-person__subtitle
  &__subtitle {
    font-size: rem(18);
    font-weight: 500;
    color: var(--color-gray);
  }
  // .about-person__info-paragraphs
  &__info-paragraphs {
    @include adaptiveValue("margin-top", 50, 35);
  }
  // .about-person__paragraph
  &__paragraph {
    @include adaptiveValue("font-size", 24, 18);
    font-weight: 700;
  }
  // .about-person__socials
  &__socials {
    @include adaptiveValue("margin-top", 30, 20);
  }
  &__facts{
    @include adaptiveValue("margin-top", 85, 55);
  }
}
</style>
