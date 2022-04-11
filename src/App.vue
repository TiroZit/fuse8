<template lang="pug">
header
aside-bar
main.page__profile
  about-person
  about-me
  skills
  more-employees
</template>

<script>
import Skills from '@components/Skills/Skills'
import MoreEmployees from '@components/MoreEmployees'

export default {
  components:{
    Skills,
    MoreEmployees,
  },
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style lang='scss'>
.page__profile{
  margin-top: rem(50);
  margin-bottom: rem(150);
}
</style>