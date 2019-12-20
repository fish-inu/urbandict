<template>
  <div>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link" @click="sort_newest" href='#'>Newest</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" @click="sort_thumbup" href="#">Thumbsup</a>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
      sort_newest: function(e) {
        e.preventDefault();
        this.$store.commit('sort_newest')
      },
      sort_thumbup: function(e) {
        e.preventDefault();
        this.$store.commit('sort_thumbup')
      }
      }
}
</script>

<style>
ul {
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>
