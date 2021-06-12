export const state = () => ({
  profile: [],
  lastId: null,
})

export const getters = {
  getProfile(state) {
    return state.profile
  },
  getLastId(state) {
    return state.lastId
  },
}

export const mutations = {
  setMenuParentId(state, id) {
    state.lastId = id
  },
  SET_PROFILE(state, payload) {
    state.profile = payload
  },
}

export const actions = {
  //   async nuxtServerInit({ dispatch }) {
  //     await dispatch('modules/products/getmenus')
  //   },
  async fetchProfile({ commit }, profileId) {
    try {
      const profile = await this.$axios.$get('/profile/1')
      await commit('SET_PROFILE', profile)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  },
}
