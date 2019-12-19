<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">雨</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/urbandict">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "UI"
};
</script>

<style scoped>
</style>