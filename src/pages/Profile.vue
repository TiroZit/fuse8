<template lang="pug">
header
aside-bar
main.page__profile
  about-person(:profile='profile' :facts='facts' v-if="!isProfileLoading")
  about-me(:questions='questions' v-if="!isProfileLoading")
  skills(:skillsBase='skillsBase' :skillsSecondary='skillsSecondary' :qualifications='qualifications' v-if="!isProfileLoading")
  //- spinner-loader(v-else)
  //- more-employees
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
      data: [],
      profile: [],
      facts: [],
      questions: [],
      skillsBase: [],
      skillsSecondary: [],
      qualifications: [],
      isProfileLoading: false,
    }
  },
  methods:{
    async fetchProfile(){
      try {
        this.isProfileLoading = true;
        // setTimeout(async() => {
          const response = await axios.get('http://www.pageform.ru/api/profile/');
          this.data = response.data;
          this.profile = this.data.profile[0];
          this.facts = this.data.Fact;
          this.questions = this.data.question;
          this.skillsBase = this.data.skills[1];
          this.skillsSecondary = this.data.skills[2];
          this.qualifications = this.data.certification;
          console.log(this.data);
          console.log(this.profile);
          this.isProfileLoading = false;
        // }, 1000);
      } catch (error) {
        console.log(error);
      } finally {
        
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
  @include adaptiveValue("margin-top", 50, 0);
  @include adaptiveValue("margin-bottom", 150, 50);
}
</style>