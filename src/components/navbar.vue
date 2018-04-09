<template>
<div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        {{msg}}
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link v-for="(tabitem, index) of tabs" :key=index :to = "tabitem.toLowerCase() + 'stories'"   class="navbar-item" @click.native="selected = index+1; fetchTabData('/v0/' + tabitem.toLowerCase() + 'stories')">
          {{tabitem}}
        </router-link>
      </div>
    </div>
  </nav>
  <div class="story-div">
    <story v-if="tabdata.length > 0" :tab="tabdata"></story>
  </div>
</div>
</template>

<script>
  import story from './story.vue'

  export default {
    
    name: 'siteName',
    
    created () {
      this.fetchTabData()
    },
    
    data () {
      return {
        tabs: ['New', 'Top', 'Best', 'Ask', 'Job', 'Show'],
        msg: 'Newer Hacks',
        selected: undefined,
        tabdata: [],
      }
    },
    
    components: {story},
    
    methods: {
      
      fetchTabData: function (input= '/v0/newstories') { // fetches story ids for the tab
        this.tabdata = []
        fetch("https://hacker-news.firebaseio.com" + input + ".json?print=pretty")
        .then(res => res.json())
        .then(res => {
          this.tabdata = res
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .navbar-brand a {
    font-weight: bold;
    color: #466EFF;
    font-size: 130%;
  }

  .navbar-brand :hover{
    font-weight: bold;
    color: orange;
  }

  .navbar-start a {
    font-size: 90%;
    color: orange;
  }

  .navbar-start a:hover{
    font-size: 90%;
    color: #466EFF;
    font-weight: bold;
    border-bottom: solid 0.2em orange;
    box-sizing: border-box;
  }

  .router-link-active {
    font-size: 80%;
    color: #466EFF !important;
    font-weight: bold;
    box-sizing: border-box;
    border-bottom: solid 0.2em orange;
  }

  .navbar {
    border-bottom: solid 0.1em #466EFF;
  }
  
</style>
