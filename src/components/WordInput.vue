<template>
<div>
  <form class="form-inline my-2 my-lg-0" _lpchecked="1" id='form' @submit="passup_query">
  <input v-model='query' autofocus class="form-control mr-sm-2" type="text" placeholder="Type whatever you want">
  <button @click="passup_query" type="submit" class="btn btn-primary">Search</button>
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
    passup_query: function(e) {
      e.preventDefault();
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
