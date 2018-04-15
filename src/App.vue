<template>
  <div id="app">
    <!-- <user></user> -->
    <router-link to='/'></router-link>
    <router-view></router-view>
    <!-- <router-view class="view two" name="b"></router-view> -->
  
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import user from './components/user.vue'

export default {
  name: 'App',
  data () {
    return {
      currentTab : 'Top'
    }
  },
  components: { navbar, user
  }
}
</script>

<style>
</style>
