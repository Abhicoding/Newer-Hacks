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
      <story v-show="state[0]" v-if="tabdata.length > 0" :tab="tabdata" v-on:userclicked= "fetchuser"></story>
    </div>
    <div class="user-div">
      <user :userdata="userdata" v-show="state[1]"></user>
    </div>
  </div>
</template>

<script>
  import story from './story.vue'
  import user from './user.vue'
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
        userdata:[],
        state:[true, false]
      }
    },
    
    components: {story, user},
    
    methods: {
      
      fetchTabData: function (input= '/v0/newstories') { // fetches story ids for the tab
        this.tabdata = []
        fetch("https://hacker-news.firebaseio.com" + input + ".json?print=pretty")
        .then(res => res.json())
        .then(res => {
          this.tabdata = res
        })
      },

      fetchuser: function (value) {
        fetch("https://hacker-news.firebaseio.com/v0/user/"+ value +".json?print=pretty")
        .then(res => res.json())
        .then(res => {
          this.userdata = res
          console.log(res)
        })
        this.state[0] = false
        this.state[1] = true
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
