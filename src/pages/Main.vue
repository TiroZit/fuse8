<template lang="pug">
include /_mixins
my-header
aside-bar
main.page__main
  .page__container
    article.post.post_brown
      .post__info
        h2.post__title Обновите свой профиль
        p.post__text Обновите информацию в своём профиле, чтобы людям было легче найти или узнать о вас больше
        my-button.post__btn Редактировать
      img.post__img(src='@img/edit-profile.jpg' alt='офис' loading='lazy')
    .post__empty
      b Скоро тут что то будет...
      span но это не точно)
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.page__main{
  @include adaptiveValue("margin-top", 50, 0);
}
.post{
  display: flex;
  margin-top: rem(50);
  &_brown{
    background-color: #B2AA99;
  }
  &__info{
    flex: 1 1 rem(600);
    font-weight: 500;
    @include adaptiveValue("padding", 50, 15);
  }
  &__title{
    @include adaptiveValue("font-size", 45, 28);
    font-weight: 900;
  }
  &__text{
    @include adaptiveValue("font-size", 21, 16);
    max-width: rem(480);
    margin-top: em(10,21);
    @include adaptiveValue("margin-bottom", 70, 30);
  }
  &__btn{
    @include adaptiveValue("font-size", 21, 16);
    padding: rem(10) rem(30);
  }
  &__img{
    width: percent(600, 1351);
    @include media-breakpoint-down(mobile){
      display: none;
    }
  }
  &__empty{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: rem(200);
    b{
      @include adaptiveValue("font-size", 29, 20);
      font-weight: 500;
    }
    span{
      @include adaptiveValue("font-size", 21, 16);
    }
  }
}
</style>