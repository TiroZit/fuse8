<template lang="pug">
header
aside-bar
main.page__profile
  about-person(:profile='profile' :facts='facts' v-if="!isProfileLoading")
  about-me(:questions='questions' v-if="!isProfileLoading")
  skills(:skillsBase='skillsBase' :skillsSecondary='skillsSecondary' :qualifications='qualifications' v-if="!isProfileLoading")
  spinner-loader(v-else)
  more-employees(:profiles='profiles' v-if="!isProfileLoading" @getProfile= "fetchProfile")
</template>

<script>
import axios from "axios";

import Skills from "@components/Skills/Skills";
import MoreEmployees from "@components/MoreEmployees";
import AboutPerson from "@components/Profile/AboutPerson";
import Socials from "@components/Profile/Socials";
import PersonalFacts from "@components/Profile/PersonalFacts";
import AboutMe from "@components/Profile/AboutMe";

export default {
  components: {
    Skills,
    MoreEmployees,
    AboutPerson,
    Socials,
    PersonalFacts,
    AboutMe,
  },
  data() {
    return {
      profiles: [],
      data: [],
      profile: [],
      facts: [],
      questions: [],
      skillsBase: [],
      skillsSecondary: [],
      qualifications: [],
      isProfileLoading: false,
    };
  },
  methods: {
    async fetchProfile(idProfile = 1){

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: idProfile })
      };
      fetch("http://www.pageform.ru/api/profile/", requestOptions)
          .then(response => response.json())
          .then(data => {
            this.isProfileLoading = true;
            setTimeout(async() => {
              this.profiles = await axios.get("http://www.pageform.ru/api/allProfiles/")
              this.profiles = this.profiles.data.profile
              console.log(this.profiles)
              this.data = data;
              this.profile = this.data.profile[0];
              this.facts = this.data.Fact;
              console.log(this.data)
              this.questions = this.data.question;
              this.skillsBase = this.data.skills[1];
              this.skillsSecondary = this.data.skills[2];
              this.qualifications = this.data.certification;

              this.isProfileLoading = false;
            }, );
          })
          .catch(error => {
            console.log(error);
          });
    },
  },
  mounted() {
    this.fetchProfile();
  },
};
</script>

<style lang="scss">
.page__profile {
  @include adaptiveValue("margin-top", 50, 0);
  @include adaptiveValue("margin-bottom", 150, 50);
}
</style>
