<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/urban_logo.png">
    <word-input/>
    <nav-bar v-if="this.$store.state.definitions.length >= 1"/>
    <def/>
  </div>
</template>

<script>
// @ is an alias to /src
import WordInput from '@/components/WordInput.vue'
import Def from '@/components/Def.vue'
import NavBar from '@/components/nav.vue'
export default {
  name: 'home',
  components: {
    WordInput,
    Def,
    NavBar
  }
  }
</script>

<style scoped>
</style>
