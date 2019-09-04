<template>
<transition-group tag='div' class='container' name='fade'>
  <div class="card border-primary" v-for="item in defs" :key="item.defid">
    <h5 class="card-header"> {{item.word}} | {{new Date(item.written_on).getFullYear() }}</h5>
    <div class="card-body">
      <p class="card-title" id="7d48d815-d217-6500-faf0-32760cfa9ae6">{{item.definition}}</p>
      <p class="card-text">{{item.example}}</p>
      <div class="footer">
        <a :href="item.permalink" class="btn btn-outline-primary btn-sm" role='button'> 
          <font-awesome-icon icon='external-link-alt'/> SOURCE
        </a>
        <div>
          <span class='opinion'><font-awesome-icon icon='thumbs-up'/> : {{item.thumbs_up}}</span>
          <span class='opinion'><font-awesome-icon icon='thumbs-down'/> : {{item.thumbs_down}}</span>
        </div>
      </div>
    </div>
  </div>
</transition-group>
</template>

<script>
export default {
  name: 'Def',
  computed: {
    defs() {
      return this.$store.state.definitions
    }
  },
  beforeRouteEnter (to, from, next) {
  next(vm => {
    vm.$store.state.query = to.params.word;
    vm.$store.commit('search_word');
  })
  }
}
</script>

<style scoped>
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
transition: .4s;
}

div .card:hover {
box-shadow: 2px 2px 10px rgba(0,0,0,0.4);
}

.footer {
  display: flex;
  justify-content: space-between;

}

.opinion {
  margin-left: 5px;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active, .fade-leave-active {
  transition: all 1.5s;
}
</style>

