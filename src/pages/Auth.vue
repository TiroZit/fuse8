<template lang="pug">
include /_mixins
main.page__auth
  .page__container
    .auth-card 
      .auth-card__wrapper
        h1.auth-card__title Добро пожаловать в Fuse8
        p.auth-card__text Войдите в учетную запись через корпоративную почту или Google
        form.auth-card__form(action="#" method="post")
          input.auth-card__input(type='email' name='email' placeholder="Введите адрес электронной почты" required)
          div или
          my-button.auth-card__btn
            |Войти через
            svg.i-google(aria-hidden)
              use(xlink:href='img/icons/icons.svg#svg-google')
    .aside-auth
      svg.i-logo
        use(xlink:href=`img/icons/icons.svg#svg-logo`)
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.page__auth {
  background-image: url('@img/auth-bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @include adaptiveValue('font-size', 26, 18);
  font-weight: 500;
}
.page__container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@include media-breakpoint-down(tablet-xl) {
  .aside-auth {
    display: none;
  }
}
@include media-breakpoint-up(tablet-xl) {
  .aside-auth {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-yellow);
    svg {
      width: rem(156);
    }
  }
}
.auth-card {
  @include adaptiveValue('padding', 80, 20);
  background-color: var(--color-white);
  width: fit-content;
  box-shadow: 0px 9.81713px 19.6343px rgba(0, 0, 0, 0.25);
  &__wrapper {
    max-width: rem(600);
  }
  &__title {
    @include adaptiveValue('font-size', 50, 28);
    font-weight: 900;
  }
  &__text {
    margin-top: rem(15);
    @include adaptiveValue('font-size', 28, 18);
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(10);
    margin-top: rem(30);
  }
  &__input {
    width: 90%;
    border-bottom: 2px solid var(--color-black);
    transition: border-bottom 0.3s;
    &.focus-visible {
      outline: none;
      border-bottom: 2px solid var(--color-yellow);
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    @include adaptiveValue('font-size', 26, 18);
    font-weight: 500;
    svg {
      width: rem(32);
      height: rem(32);
      margin-left: rem(15);
    }
  }
}
</style>
