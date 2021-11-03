const user = localStorage.getItem('user');
const initialState = user
  ? { status: { loggedIn: true }, user: user, token: localStorage.getItem('token') || '' }
  : { status: { loggedIn: false }, user: null, token: '' };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
      login({ commit }, user) {
          console.log(user.user)
          commit('authSuccess', {token: user.token, user: user.user})
          return new Promise(resolve => {
            setTimeout(() => {
              localStorage.setItem("token", user.token);
              localStorage.setItem("user", user.user);
              resolve();
            }, 1000);
          });
      },
      register({ commit }, user) {
          commit('authSuccess', user)
      },
      logout({ commit }) {
          commit('logout')
      },
      error({ commit }) {
          commit('authFailure')
      }
  },
  mutations: {
    authSuccess(state, {token, user}) {
      state.status.loggedIn = true;
      state.token = token;
      state.user = user;
      console.log('mut', user)
    },
    authFailure(state) {
      state.status.loggedIn = false;
      state.user - null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.token = '';
      state.user = null;
    }
  },
  getters: {
      isLoggedIn: state => !!state.token,
      authStatus: state => state.status
  }
};

