import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
import _ from 'underscore'
Vue.use(Vuex)
export default new Vuex.Store(
    {
        state: {
            query: '',
            definitions: []
        },
        mutations: {
            sort_newest: (state) => {
                state.definitions = _.sortBy(state.definitions, 'written_on').reverse()
            },
            set_definitions(state, payload) {
                state.definitions = payload.definitions
            }
        },
        actions: {
            async search_word({ commit, state }) {
                try {
                    let res = await axios.get(`${process.env.VUE_APP_URBAN}${state.query}`);
                    let definitons = res.data.list;
                    commit('set_definitions', { definitions: definitons });
                }
                catch (e) {
                    console.log('网络请求错误', e)
                }
            },
        }

    }
)