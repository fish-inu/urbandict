<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <word-input @clickbtn='search_query'/>
    <def :ls='ls'/>
  </div>
</template>

<script>
// @ is an alias to /src
import WordInput from '@/components/WordInput.vue'
import Def from '@/components/Def.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    WordInput,
    Def
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
      }

  }
}
</script>
