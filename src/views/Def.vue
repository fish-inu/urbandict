<template>
<div class="card border-primary mb-3" id='card'>
  <div class="card-header">Word</div>
  <div class="card-body">
    <h4 class="card-title" id="b8cc33c3-a109-7b46-acd5-5378e40a371a">Primary card title</h4>
    <p class="card-text">{{def}}</p>
  </div>
</div>
</template>

<script>

export default {
  name: 'Def',
  data() {
    return {
        def:''
    }
},
  mounted() {    
      this.$root.$on('onquery', function(meaning) {
        this.def = meaning;
    });
      }
}
</script>

<style scoped>
#card {
max-width: 20rem;
display: flex;
align-content: center;
margin-top: 5px;
margin-left: 10px;
margin-right: 10px;
}
</style>

