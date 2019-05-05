<template>
<div>
  <form class="form-inline my-2 my-lg-0" _lpchecked="1" id='form'>
  <input v-model='query' class="form-control mr-sm-2" type="text" placeholder="Type whatever you want">
  <button @click="passup_query" type="button" class="btn btn-primary">Search</button>
  </form>
</div>
</template>

<script>

export default {
  name: 'WordInput',
  data() {
    return {
      query: ''
      }
  },
  methods: {
    passup_query: function() {
      this.$emit('clickbtn', this.query)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
    display: flex;
    justify-content: center;
}
</style>
