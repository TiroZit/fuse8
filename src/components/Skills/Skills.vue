<template lang="pug">
include /_mixins
section.skills
  .skills__container
    h2.skills__title Навыки
    basic-skills.skills__basic-skills
    secondary-skills.skills__secondary-skills
    qualification-skills.skills__qualification-skills
</template>
<script>
import BasicSkills from '@components/Skills/BasicSkills'
import SecondarySkills from '@components/Skills/SecondarySkills'
import QualificationSkills from '@components/Skills/QualificationSkills'

export default {
  name: 'skills',
  components:{
    BasicSkills,
    SecondarySkills,
    QualificationSkills,
  },
}
</script>
<style lang="scss" scoped>
.skills{
  margin-top: rem(70);
  &__title{
    font-weight: 900;
    font-size: rem(60);
  }
  &__basic-skills{
    margin-top: rem(25);
  }
  &__secondary-skills{
    margin-top: rem(55);
  }
  &__qualification-skills{
    margin-top: rem(55);
  }
}
</style>