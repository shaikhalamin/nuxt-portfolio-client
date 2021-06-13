<template>
  <div>
    <Header />
    <About />
    <Experience />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import Header from '~/components/landingpage/Header.vue'
import About from '~/components/landingpage/About.vue'
import Experience from '~/components/landingpage/Experience.vue'

export default {
  components: {
    Header,
    About,
    Experience,
  },
  data() {
    return {
      imgsrc: null,
    }
  },
  async fetch({ store, redirect, params, $axios }) {
    await store.dispatch('fetchProfile', 1)
  },
  computed: {
    ...mapState({
      lastId: (state) => state.lastId,
    }),
    ...mapGetters({
      getProfile: 'getProfile',
      getLastId: 'getLastId',
    }),
  },
  methods: {
    ...mapActions({}),
  },
}
</script>

<style>
i.round-icon {
  display: inline-block;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #000;
  padding: 0.5em 0.6em;
}
</style>
