<template lang="pug">
include /_mixins
aside-bar
my-header
main.page__main
  .page__container
    article.edit-profile.edit-profile_brown
      .edit-profile__info
        h2.edit-profile__title Обновите свой профиль
        p.edit-profile__text Обновите информацию в своём профиле, чтобы людям было легче найти или узнать о вас больше
        button.edit-profile__btn Редактировать
      img.edit-profile__img(src='@img/edit-profile.jpg' alt='офис' loading='lazy')
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.page__main{
  @include adaptiveValue("margin-top", 100, 50);
}
.edit-profile{
  display: flex;
  &_brown{
    background-color: #B2AA99;
  }
  &__info{
    flex: 1 1 rem(600);
    @include adaptiveValue("padding", 50, 15);
  }
  &__title{
    @include adaptiveValue("font-size", 45, 28);
    font-weight: 900;
  }
  &__text{
    @include adaptiveValue("font-size", 21, 16);
    font-weight: 500;
    max-width: rem(480);
    margin-top: em(10,21);
    @include adaptiveValue("margin-bottom", 70, 30);
  }
  &__btn{
    @include adaptiveValue("font-size", 21, 16);
    font-weight: 500;
    padding: rem(10) rem(30);
    border: 2px solid var(--color-blackRaisin);
  }
  &__img{
    width: percent(600, 1351);
    @include media-breakpoint-down(mobile){
      display: none;
    }
  }
}
</style>