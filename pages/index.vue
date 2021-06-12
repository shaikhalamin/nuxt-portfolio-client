<template>
  <div>
    <Header />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
import Header from '~/components/landingpage/Header.vue'

export default {
  components: {
    Header,
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
