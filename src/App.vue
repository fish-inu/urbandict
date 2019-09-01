<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">雨</a>
      <ul class="navbar-nav">
      <li class="nav-item "><router-link class='nav-link' to="/">Home</router-link></li>
      <li class="nav-item "><router-link class='nav-link' to="/about">About</router-link></li> 
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
