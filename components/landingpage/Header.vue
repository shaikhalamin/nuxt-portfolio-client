<template>
  <header>
    <b-jumbotron style="border-radius: 0px; background-color: rgb(66 165 183)">
      <b-container>
        <b-row class="text-center">
          <b-col v-if="profile" cols="12">
            <h1 v-if="profile" class="text-white">
              <b><span class="i-am">I'm</span> {{ profile.full_name }}</b>
            </h1>
            <h2 v-if="profile" class="text-white" style="font-size: 1.125rem">
              {{ profile.specialized_at }}
            </h2>
            <p v-if="profile" class="mt-2 mb-2">
              <i
                class="fa fa-envelope-o mr-1 round-icon"
                aria-hidden="false"
                style="font-size: 18px; color: #fff"
              ></i>
              <span class="text-white font-18">{{ profile.email }}</span>
            </p>
            <b-row v-if="profile" class="text-center">
              <b-col md="6" offset-md="3" class="mt-2 mb-2">
                <b-button variant="dark" size="sm">Download CV</b-button>
                <b-button variant="dark" size="sm">Hire Me</b-button>
              </b-col>
            </b-row>
            <ul v-if="profile" class="nav justify-content-center">
              <li class="nav-item">
                <a
                  class="btn btn-sm"
                  target="_blank"
                  :href="`${profile.linkedin_profile_path}`"
                  ><i
                    class="fa fa-linkedin-square round-icon"
                    aria-hidden="false"
                    style="font-size: 25px; color: #fff"
                  ></i
                ></a>
              </li>
              <li class="nav-item">
                <a
                  class="btn btn-sm"
                  target="_blank"
                  :href="`${profile.github_profile_path}`"
                  ><i
                    class="fa fa-github-square round-icon"
                    aria-hidden="true"
                    style="font-size: 25px; color: #fff"
                  ></i
                ></a>
              </li>
              <li class="nav-item">
                <a
                  class="btn btn-sm"
                  target="_blank"
                  :href="`${profile.twitter_profile_path}`"
                  ><i
                    class="fa fa-twitter-square round-icon"
                    aria-hidden="true"
                    style="font-size: 25px; color: #fff"
                  ></i
                ></a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      profile: 'getProfile',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
