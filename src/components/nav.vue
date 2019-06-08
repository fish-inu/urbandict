<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" @click="bynewest">/Newest/</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">/Thumbsup/</a>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        bynewest: function() {
            this.$emit('bynewest')
        }
    }
}
</script>

<style>
</style>
