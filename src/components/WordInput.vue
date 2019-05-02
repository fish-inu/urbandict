<template>
<div>
  <form class="form-inline my-2 my-lg-0" _lpchecked="1" id='form'>
  <input v-model='query' class="form-control mr-sm-2" type="text" placeholder="Type whatever you want">
  <button @click="getquery" type="button" class="btn btn-primary">Search</button>
  </form>

<div class='container'>
  <div class="card border-primary mb-1" v-for="item in ls" :key="item.defid">
    <h5 class="card-header">{{item.word}}</h5>
    <div class="card-body">
      <p class="card-title" id="7d48d815-d217-6500-faf0-32760cfa9ae6">{{item.definition}}</p>
      <p class="card-text">{{item.example}}</p>
    </div>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WordInput',
  data() {
    return {
      query: '',
      ls: []
    }
  },
  methods: {
    getquery: function() {
        axios.get(`http://api.urbandictionary.com/v0/define?term=${this.query}`)
        .then((res) => {
          let res_body = res.data
          console.log(res_body.list)
          this.ls = res_body.list
        })
        .catch(function(error){
          console.log(error)
        });
    /*  this.$router.push('meaning')
      this.$root.$emit('onquery', this.query)      
      console.log('已发送') */
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

.container {
  display: flex;
  flex-direction: column;
}

.card-header {
  text-align: left;
}
.card-body {
    text-align:left;
}
div .card {
margin-top: 10px;
margin-bottom: 10px;
margin-left: 50px;
margin-right: 50px;
width: calc(100% - 30px);
border-radius: 5px;
}


</style>
