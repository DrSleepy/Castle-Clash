import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export const store = new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    searchResult: 'empty state.searchResult',
    selected: 'empty state.selected',
    image: {
      original: 'https://www.jainsusa.com/images/store/landscape/not-available.jpg'
    },
  },
  getters: {
    searchFor: state => {
      return state.searchFor;
    },
    searchResult: state => {
      return state.searchResult;
    },
    selected: state => {
      return state.selected;
    },
  },
  mutations: {
    search: (state, payload) => {
      state.searchResult = payload;
    },
    selected: (state, payload) => {
      state.selected = payload;
    },
    image: (state, payload) => {
      state.searchResult[payload].show.image = state.image;
    },
  },
  actions: {
    search: ({
      commit
    }, payload) => {
      return new Promise((resolve, reject) => {
        fetch.get('http://api.tvmaze.com/search/shows?q=' + payload)
          .then(response => {
            commit('search', response.data);
            resolve(response);
          }, error => {
            reject(error);
          })
      })
    },
    selected: ({
      commit
    }, payload) => {
      commit('selected', payload);
    },
    image: ({
      commit
    }, payload) => {
      commit('image', payload);
    },
  },
});
