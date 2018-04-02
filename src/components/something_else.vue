<template>
  <div class="hello">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'something_else',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  color: turquoise;
}
</style>
