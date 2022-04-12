<template lang="pug">
header
aside-bar
main.page__profile
  about-person(:profiles='profiles')
  about-me
  skills
  more-employees
  button.page__btn-load(@click='fetchProfile') Загрузить данные 
  //- spinner-loader
</template>

<script>
import axios from 'axios';
import Skills from '@components/Skills/Skills';
import MoreEmployees from '@components/MoreEmployees';

export default {
  components:{
    Skills,
    MoreEmployees,
  },
  data(){
    return{
      profiles: [],
    }
  },
  methods:{
    async fetchProfile(){
      try {
        // setTimeout(async() => {
          const response = await axios.get('http://www.pageform.ru/api/profile/');
          this.profiles = response.data.profile;
          console.log(response.data.profile);
        // }, 1000);
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.fetchProfile();
  },
}
</script>

<style lang='scss'>
.page__profile{
  margin-top: rem(50);
  margin-bottom: rem(150);
}
</style>