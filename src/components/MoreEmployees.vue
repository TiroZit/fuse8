<template lang="pug">
<post-list/>
include /_mixins
section.more-employees
  .more-employees__container
    title-h2.more-employees__title(id="moreemployees") Больше сотрудников
    .more-employees__items
      article.more-employees__item(v-for="profile in profiles" :key="profile.id_profile")
        div(v-bind:id="profile.id_profile" @click="getNameId(profile.id)")
          img(:src='`http://www.pageform.ru/storage/` + profile.profile_photo_path' alt='' loading='lazy' class='more-employees__item-img')
          a.more-employees__item-footer(href='#')
            .more-employees__item-title {{profile.name}}
            .more-employees__item-subtitle {{profile.position_name}}
    my-button.more-employees__btn-more Посмотреть ещё
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
  },
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
  &__item-img{
    width: 330px;
    height: 330px;
  }
  // .more-employees__items
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(rem(300), rem(324)));
    grid-template-rows: repeat(auto-fit, rem(392));
    justify-content: space-between;
    gap: rem(30);
    @include adaptiveValue("margin-top", 50, 30);
    @include media-breakpoint-down(tablet){
      justify-content: center;
    }
  }
  &__btn-more{
    display: block;
    margin: rem(75) auto rem(0) auto;
    @include media-breakpoint-down(tablet){
      margin: rem(45) auto rem(0) auto;
    }
  }
}
</style>
