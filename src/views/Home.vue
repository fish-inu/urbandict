<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <word-input/>
  </div>
</template>

<script>
// @ is an alias to /src
import WordInput from '@/components/WordInput.vue'

export default {
  name: 'home',
  components: {
    WordInput
  }
}
</script>
