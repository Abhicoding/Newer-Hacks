<template>
  <div id="app">
    <navbar></navbar>
    <!-- <router-view class="view two" name="b"></router-view> -->
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
