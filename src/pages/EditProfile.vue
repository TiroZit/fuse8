<template lang="pug">
header
aside-bar
main.page__profile
  about-person(:profile='profile' :facts='facts' v-if="!isProfileLoading")
  about-me(:questions='questions' v-if="!isProfileLoading")
  skills(:skillsBase='skillsBase' :skillsSecondary='skillsSecondary' :qualifications='qualifications' v-if="!isProfileLoading")
  .profile__container(v-if="!isProfileLoading")
    MyButton.profile__btn-save.button-add Сохранить редактирование
    router-link.profile__exit(to="/home") Выйти

  spinner-loader(v-else)
</template>

<script>
import axios from 'axios'

import Skills from '@components/EditProfile/Skills/Skills'
import AboutPerson from '@components/EditProfile/AboutPerson'
import Socials from '@components/EditProfile/Socials'
import PersonalFacts from '@components/EditProfile/PersonalFacts'
import AboutMe from '@components/EditProfile/AboutMe'
import MyButton from '../components/UI/MyButton.vue'

export default {
  components: {
    Skills,
    AboutPerson,
    Socials,
    PersonalFacts,
    AboutMe,
    MyButton,
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
    }
  },
  methods: {
    async fetchProfile(idProfile = 1) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: idProfile }),
      }
      fetch('http://www.pageform.ru/api/profile/', requestOptions)
        .then(response => response.json())
        .then(data => {
          this.isProfileLoading = true
          setTimeout(async () => {
            this.profiles = await axios.get(
              'http://www.pageform.ru/api/allProfiles/'
            )
            this.profiles = this.profiles.data.profile
            console.log(this.profiles)
            this.data = data
            this.profile = this.data.profile[0]
            this.facts = this.data.Fact
            console.log(this.data)
            this.questions = this.data.question
            this.skillsBase = this.data.skills[1]
            this.skillsSecondary = this.data.skills[2]
            this.qualifications = this.data.certification

            this.isProfileLoading = false
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
  mounted() {
    this.fetchProfile()
  },
}
</script>

<style lang="scss">
.page__profile {
  @include adaptiveValue('margin-top', 50, 0);
  @include adaptiveValue('margin-bottom', 150, 50);
}
.profile {
  &__btn-save {
    font-weight: 900;
    margin-top: rem(100);
  }
  &__exit {
    display: block;
    font-weight: 700;
    font-size: rem(28);
    margin-top: rem(10);
  }
}
</style>
