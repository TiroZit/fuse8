<template lang="pug">
<post-list/>
include /_mixins
section.more-employees
  .more-employees__container
    title-h2.more-employees__title Больше сотрудников
    .more-employees__items
      article.more-employees__item(v-for="profile in profiles" :key="profile.id_profile")
        div(v-bind:id="profile.id_profile" @click="getNameId(profile.id_profile)")
          img(:src='`http://www.pageform.ru/persons/` + profile.photo' alt='' loading='lazy' class='more-employees__item-img')
          a.more-employees__item-footer(href='#')
            .more-employees__item-title {{profile.first_name}} {{profile.last_name}}
            .more-employees__item-subtitle {{profile.position_name}}
</template>
<script>
export default {
  name: "more-employees",
  props:{
    profiles: {},
  },
  methods: {
    getNameId(id) {
      this.$emit('getProfile', id)
    }
  }
};
</script>
<style lang="scss" scoped>
.more-employees {
  @include adaptiveValue("margin-top", 70, 55);
  font-weight: 900;
  // .more-employees__container
  &__container {
  }
  // .more-employees__title
  &__title {
  }
  // .more-employees__items
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(rem(300), rem(324)));
    justify-content: space-between;
    gap: rem(30);
    @include adaptiveValue("margin-top", 50, 30);
    @include media-breakpoint-down(tablet){
      justify-content: center;
    }
  }
  // .more-employees__item
  &__item {
    position: relative;
    border: 2px solid var(--color-blackRaisin);
  }
  // .more-employees__item-img
  &__item-img {
    width: 100%;
  }
  // .more-employees__item-footer
  &__item-footer {
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
  // .more-employees__item-title
  &__item-title {
    @include adaptiveValue("font-size", 24, 18);
  }
  // .more-employees__item-subtitle
  &__item-subtitle {
    font-size: rem(15);
  }
  &__btn-more{
    display: block;
    font-weight: inherit;
    @include adaptiveValue("font-size", 28, 22);
    border: 2px solid var(--color-blackRaisin);
    margin: rem(75) auto rem(0) auto;
    @include media-breakpoint-down(tablet){
      margin: rem(45) auto rem(0) auto;
    }
    padding: rem(10) rem(25);
  }
}
</style>
