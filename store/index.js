export const state = () => ({
  user: 0
})

export const mutations = {
  setUser(state, user) {
    state.user = (user === null) ? null : {...user}
  }
}

export const getters = {
  user (state) {
    return state.user
  }
}
