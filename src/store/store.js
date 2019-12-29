import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";
import _ from "underscore";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    query: "",
    definitions: [],
    loading: false
  },
  mutations: {
    sort_newest: state => {
      state.definitions = _.sortBy(state.definitions, "written_on").reverse();
    },
    sort_thumbup: state => {
      state.definitions = _.sortBy(state.definitions, "thumbs_up").reverse();
    },
    set_definitions(state, payload) {
      state.definitions = payload.definitions;
    }
  },
  actions: {
    async search_word({ commit, state }) {
      try {
        state.loading = true;
        let res = await axios.get(`${process.env.VUE_APP_URBAN}${state.query}`);
        state.loading = false;
        let definitons = res.data.list;
        commit("set_definitions", { definitions: definitons });
      } catch (e) {
        console.log("网络请求错误", e);
        state.loading = false;
      }
    }
  }
});
