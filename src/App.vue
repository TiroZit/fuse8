<template lang="pug">
header
aside-bar
main.page__profile
  about-person(:profile='profile' :facts='facts' v-if="!isProfileLoading")
  spinner-loader(v-else)
  about-me(:questions='questions')
  skills
  more-employees
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
      isProfileLoading: false,
    }
  },
  methods:{
    async fetchProfile(){
      try {
        this.isProfileLoading = true;
        setTimeout(async() => {
          const response = await axios.get('http://www.pageform.ru/api/profile/');
          this.data = response.data;
          this.profile = this.data.profile[0];
          this.facts = this.data.Fact;
          this.questions = this.data.question;
          console.log(this.data);
          console.log(this.questions);
          this.isProfileLoading = false;
        }, 1000);
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
  margin-top: rem(50);
  margin-bottom: rem(150);
}
</style>