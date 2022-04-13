<template lang="pug">
include /_mixins
.personal-facts
  .personal-facts__item(v-for="fact in facts" :key="fact.id_fact")
    .personal-facts__title {{fact.count}}
    .personal-facts__subtitle {{fact.name}}
</template>
<script>
export default {
  name: "personal-facts",
  props:{
    facts: {}
  },
};
</script>
<style lang="scss" scoped>
.personal-facts {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: rem(15);
  border: 2px solid var(--color-blackRaisin);
  background-color: var(--color-yellow);
  padding: rem(20);
  // .personal-facts__item
  &__item {
    flex: 0 0 rem(210);
    text-align: center;
  }
  // .personal-facts__title
  &__title {
    @include adaptiveValue("font-size", 60, 42);
    font-weight: 700;
  }
  // .personal-facts__subtitle
  &__subtitle {
    @include adaptiveValue("font-size", 22, 18);
    font-weight: 500;
  }
}
</style>
