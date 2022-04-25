<template lang="pug">
include /_mixins
article.employee
  img.employee__img(:src='`@img/persons/` + profile.photo' :alt='profile.title' loading='lazy')
  router-link.employee__footer(:to='`/profile_` + profile.id')
    .employee__title {{ profile.title }}
    .employee__subtitle {{ profile.subtitle }}
</template>
<script>
export default {
  name: 'employee',
  props: {
    profile: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style lang="scss" scoped>
.employee{
  font-weight: 900;
  &__item {
    position: relative;
    border: 2px solid var(--color-blackRaisin);
  }
  // .employee__img
  &__img {
    width: 100%;
    height: rem(317);
  }
  // .employee__footer
  &__footer {
    display: block;
    border-top: 2px solid var(--color-blackRaisin);
    padding: rem(15) rem(10);
    background-color: var(--color-yellow);
    &::before{
      content:'';
      position: absolute;
      inset: 0;
    }
  }
  // .employee__title
  &__title {
    @include adaptiveValue("font-size", 24, 18);
  }
  // .employee__subtitle
  &__subtitle {
    font-size: rem(15);
  }
}
</style>