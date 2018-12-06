import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    Videos: null,
    tags: [],
    userId: null,
    user_access: null,
  },
  mutations: {
    updateUserinfo(state, user) {
      state.Videos = user;
    },
    updateUserId(state, id) {
      state.userId = id;
    },
    updateUserAccess(state, access) {
      state.user_access = access;
    },
  },
  actions: {
    async getUserId({ commit, dispatch }, payload) {
      commit('updateUserAccess', payload.access_id);
      // eslint-disable-next-line no-return-await
      return await axios.get(`https://edflix-platform.herokuapp.com/api/v1/users/${payload.sub_id}`,
        {
          headers: {
            Authorization: `Bearer ${payload.access_id}`,
          },
        })
        .then((result) => {
          commit('updateUserId', result.data);
          dispatch('getUserData', { id: result.data.id, ass: payload.access_id });
        })
        .catch(dispatch('CreateNewUser', payload));
    },
    async getUserData({ commit }, datau) {
      await axios.get(`https://edflix-platform.herokuapp.com/api/v1/users/${datau.id}/items`,
        {
          headers: {
            Authorization: `Bearer ${datau.ass}`,
          },
        })
        .then(result => commit('updateUserinfo', result.data))
        .catch(console.error);
    },
    async CreateNewUser({ commit }, datau) {
      const senddata = { name: datau.nameuser, email: datau.emailuser, external_id: datau.sub_id };
      console.log(senddata);
      await axios.post('https://edflix-platform.herokuapp.com/api/v1/users',
        senddata,
        {
          headers: {
            Authorization: `Bearer ${datau.access_id}`,
          },
        })
        .then(result => commit('updateUserId', result.data))
        .catch(console.error);
    },
  },
  getters: {
    doneTodos: state => state.Videos,
  },
});
