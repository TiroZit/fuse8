<template lang="pug">
include /_mixins
section.about-person
  .about-person__container
    .about-person__wrapper
      .about-person__avatar
        img(v-bind:src='`storage/` + profile.profile_photo_path' id="photo" alt='' loading='lazy')
        .about-person__btns
          input.about-person__btn-edit.about-person__btn-edit_photo.input(type="file" id="file" ref="file" v-on:change="handleFileUpload()")
          button.about-person__btn-edit.about-person__btn-edit_thumbnail(@click="getNameId()") Редактировать миниатюру
      .about-person__info
        .about-person__info-headings
          h1.about-person__title
            input.about-person__title-input.input(type="text" id="name" v-bind:value="profile.name" placeholder="Имя Фамилия" )
          .about-person__subtitle
            input.about-person__subtitle-input.input(type="text" id="position" v-bind:value="profile.position" value="" placeholder="Должность")
        .about-person__info-paragraphs
          p.about-person__paragraph
            textarea.about-person__paragraph-input.input(type="text" id="about_me" placeholder="Информация о себе" v-bind:value="profile.about_me")
        socials.about-person__socials
    personal-facts.about-person__facts(:facts='facts')


</template>
<script>
import axios from "axios";

export default {
  name: 'about-person',
  props: {
    profile: {},
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      if (this.file.type.indexOf('image') === 0) {
        let formData = new FormData();
        formData.append("file", this.file);
        axios.post('http://www.pageform.ru/api/test', formData,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
        ).then( data => {
          let photo = data.data.photo
          document.getElementById('photo').src='storage/' + photo;
          this.profile.profile_photo_path = photo
        })
            .catch(function () {
              console.log('FAILURE!!');
            });
      } else {
        this.$refs.file.value = ''
      }
    }
  }
}
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
    @include media-breakpoint-down(laptop-xxl) {
      justify-content: center;
    }
  }
  // .about-person__avatar
  &__avatar {
    position: relative;
    display: flex;
    align-items: flex-end;
    @include adaptiveValue('width', 384, 268);
    @include adaptiveValue('height', 540, 378);
    img {
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
    }
    @include media-breakpoint-down(laptop-xl) {
      margin-bottom: rem(20);
    }
  }
  &__btns {
    position: relative;
    z-index: 1;
    padding: rem(25) rem(33);
  }
  &__btn-edit {
    font-weight: 700;
    font-size: rem(16);
    width: 100%;
    padding: rem(15) 0;
    border: 2px solid var(--color-black);
    &:not(:last-child) {
      margin-bottom: rem(20);
    }
  }
  // .about-person__info
  &__info {
    flex: 0 1 rem(855);
    @include media-breakpoint-up(laptop-xl) {
      margin-left: rem(20);
    }
  }
  // .about-person__info-headings
  &__info-headings {
  }
  // .about-person__title
  &__title {
    @include adaptiveValue('font-size', 40, 24);
    font-weight: 900;
    &-input {
      padding: rem(20);
    }
  }
  // .about-person__subtitle
  &__subtitle {
    font-size: rem(18);
    font-weight: 500;
    color: var(--color-gray);
    margin-top: rem(20);
    &-input {
      padding: rem(5) rem(20);
    }
  }
  // .about-person__info-paragraphs
  &__info-paragraphs {
    @include adaptiveValue('margin-top', 50, 35);
  }
  // .about-person__paragraph
  &__paragraph {
    @include adaptiveValue('font-size', 24, 18);
    font-weight: 700;
    &-input {
      resize: none;
      width: 100%;
      min-height: rem(350);
      padding: rem(20);
    }
  }
  // .about-person__socials
  &__socials {
    @include adaptiveValue('margin-top', 30, 20);
  }
  &__facts {
    @include adaptiveValue('margin-top', 85, 55);
  }
}
</style>
