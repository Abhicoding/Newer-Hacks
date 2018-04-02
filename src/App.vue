<template>
  <div id="app">
    <navbar></navbar>
    <story></story>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import story from './components/story.vue'

export default {
  name: 'App',
  components: { navbar, story
  }
}
</script>

<style>
</style>
