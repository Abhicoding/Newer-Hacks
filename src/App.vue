<template>
  <div id="app">
    <navbar></navbar>
    <something_else></something_else>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import something_else from './components/something_else.vue'

export default {
  name: 'App',
  components: { navbar, something_else
  }
}
</script>

<style>
</style>
