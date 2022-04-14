<template lang="pug">
include /_mixins
section.skills
  .skills__container
    title-h2.skills__title Навыки
    basic-skills.skills__basic-skills(:skillsBase='skillsBase')
    secondary-skills.skills__secondary-skills(:skillsSecondary='skillsSecondary')
    qualification-skills.skills__qualification-skills(:qualifications='qualifications')
</template>
<script>
import BasicSkills from '@components/Skills/BasicSkills'
import SecondarySkills from '@components/Skills/SecondarySkills'
import QualificationSkills from '@components/Skills/QualificationSkills'

export default {
  name: 'skills',
  props:{
    skillsBase: {},
    skillsSecondary: {},
    qualifications: {},
  },
  components:{
    BasicSkills,
    SecondarySkills,
    QualificationSkills,
  },
}
</script>
<style lang="scss" scoped>
.skills{
  @include adaptiveValue("margin-top", 70, 55);
  &__title{
  }
  &__basic-skills{
    margin-top: rem(25);
  }
  &__secondary-skills{
    @include adaptiveValue("margin-top", 55, 40);
  }
  &__qualification-skills{
    @include adaptiveValue("margin-top", 55, 40);
  }
}
</style>