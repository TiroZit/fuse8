<template lang="pug">
header
aside-bar
main.page__profile
  about-person
  about-me
  skills
</template>

<script>
import Skills from '@components/Skills/Skills'
export default {
  components:{
    Skills,
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
}
</style>