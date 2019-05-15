<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/urban_logo.png">
    <word-input @clickbtn='search_query'/>
    <nav-bar v-if="ls.length >= 1" @bynewest='sort_newest'/>
    <def :ls='ls'/>
  </div>
</template>

<script>
// @ is an alias to /src
import WordInput from '@/components/WordInput.vue'
import Def from '@/components/Def.vue'
import NavBar from '@/components/nav.vue'
import axios from 'axios'
import _ from 'underscore'
export default {
  name: 'home',
  components: {
    WordInput,
    Def,
    NavBar
  },
  data() {
    return {
      ls: []
    }
  },
  methods: {
    search_query: function(query) {
      axios.get(`${process.env.VUE_APP_URBAN}${query}`)
      .then((res) => {
        let res_body = res.data
        console.log(res_body.list)
        this.ls = res_body.list
      })
      .catch(function(error){
        console.log(error)
      });
      },
    sort_newest: function() {
      this.ls = _.sortBy(this.ls, 'written_on').reverse()
    }
  }
}
</script>

<style scoped>
</style>
