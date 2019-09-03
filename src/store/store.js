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
        search_word (state) {
            axios.get(`${process.env.VUE_APP_URBAN}${state.query}`)
            .then((res) => {
                let res_body = res.data
                console.log(res_body.list)
                state.definitions = res_body.list
            })
            .catch(function(error){
                console.log(error)
            });
                },
        //
        sort_newest (state) {
            state.definitions = _.sortBy(state.definitions, 'written_on').reverse()
        }

        }
    }
)