<template>
  <div id="app">
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
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
