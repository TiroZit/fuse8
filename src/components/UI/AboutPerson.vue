<template lang="pug">
include /_mixins
section.about-person
  .about-person__container
    .about-person__wrapper
      .about-person__avatar
        +image('@img/persons/mark-walton.jpg', 'Марк Уолтон', '384', '540')
      .about-person__info
        .about-person__info-headings
          h1.about-person__title Марк Уолтон
          .about-person__subtitle Основатель компании
        .about-person__info-paragraphs
          p.about-person__paragraph Марк — основатель fuse8 и сооснователь британского агентства Delete. Он обладает деловой хваткой и превосходными знаниями в области цифровых технологий и маркетинга.
          p.about-person__paragraph Марк играет важную роль в управлении компанией и отвечает за развитие каждого отдельного сотрудника fuse8 и Delete, предоставляя всё необходимое для профессионального роста и процветания.
        socials.about-person__socials
    personal-facts.about-person__facts
</template>
<script>
export default {
  name: "about-person",
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
  }
  // .about-person__avatar
  &__avatar {
  }
  // .about-person__info
  &__info {
    flex: 0 1 rem(855);
    margin-left: rem(20);
  }
  // .about-person__info-headings
  &__info-headings {
  }
  // .about-person__title
  &__title {
    font-size: rem(78);
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
    margin-top: rem(50);
  }
  // .about-person__paragraph
  &__paragraph {
    font-size: rem(24);
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: rem(20);
    }
  }
  // .about-person__socials
  &__socials {
    margin-top: rem(30);
  }
  &__facts{
    margin-top: rem(85);
  }
}
</style>
