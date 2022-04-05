<template lang="pug">
header
aside-bar
main
</template>

<script>
import AsideBar from './components/UI/AsideBar.vue';

export default {
  components:{
    AsideBar,
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
@import './scss/style';
header{
  font-size: rem(200);
}
</style>