<template lang="pug">
header
aside-bar
main.page__profile
  about-person(:profile='profile' ref="username" :facts='facts' v-if="!isProfileLoading")
  about-me(:questions='questions' v-if="!isProfileLoading")
  skills(:skillsBase='skillsBase' :skillsSecondary='skillsSecondary' :qualifications='qualifications' v-if="!isProfileLoading")
  .profile__container(v-if="!isProfileLoading")
    MyButton.profile__btn-save.button-add(@click="save()") Сохранить редактирование
    router-link.profile__exit(to="/" @click="logout()") Выйти
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
      about_person: [],
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
    async fetchCheckAuth() {
      fetch("http://www.pageform.ru/session/")
          .then(response => response.json())
          .then(data => {
            this.login = data.auth
            if (this.login == false) {
              this.$router.push('/auth')
            } else {
              this.id = data.id
              this.fetchProfile(this.id)
            }
          })
    },
    async fetchProfile() {
      const requestOptions = {

        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: this.id}),
      }
      fetch('http://www.pageform.ru/api/profile/', requestOptions)
          .then(response => response.json())
          .then(data => {
            this.isProfileLoading = true
            this.data = data
            this.photoPath = data.profile[0].profile_photo_url
            this.about_person['name'] = data.profile[0].name
            this.about_person['position'] = data.profile[0].position
            this.about_person['photo'] = data.profile[0].profile_photo_url
            this.about_person['about_me'] = data.profile[0].about_me.replaceAll("<br />", "\n");

            this.profile = this.data.profile[0]
            this.facts = this.data.Fact

            this.questions = this.data.question
            this.skillsBase = this.data.skills[1]
            this.skillsSecondary = this.data.skills[2]
            this.qualifications = this.data.certification
            this.isProfileLoading = false
          })
          .catch(error => {
            console.log(error)
          })
    },
    logout(){
      axios.post("http://www.pageform.ru/logout/")
    },
    async save(idProfile) {
      const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({name: document.getElementById('name').value,
          position: document.getElementById('position').value,
          about_me: document.getElementById('about_me').value})
      };

      fetch("http://www.pageform.ru/api/save/", requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error);
          });
    }

  },
  mounted() {
    this.fetchCheckAuth()
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
