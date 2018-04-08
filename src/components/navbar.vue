<template>
<div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        {{msg}}
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="newstories" class="navbar-item" @click.native="selected = 1; fetchTabData('/v0/newstories')">
          New
        </router-link>
        <router-link to="topstories" class="navbar-item" @click.native="selected = 2; fetchTabData('/v0/topstories')">
          Top
        </router-link>
        <router-link to="beststories" class="navbar-item" @click.native="selected = 3; fetchTabData('/v0/beststories')">
          Best
        </router-link>
        <router-link to="askstories" class="navbar-item" @click.native="selected = 4; fetchTabData('/v0/askstories')">
          Ask
        </router-link>
        <router-link to="jobstories" class="navbar-item" @click.native="selected = 5; fetchTabData('/v0/jobstories')">
          Jobs
        </router-link>
        <router-link to="showstories" class="navbar-item" @click.native="selected = 6; fetchTabData('/v0/showstories')">
          Show
        </router-link>
        <a></a>
      </div>
    </div>
  </nav>
  <div>
    <story v-if="tabdata.length> 0" :tab="tabdata"></story>
  </div>
</div>
</template>

<script>
import story from './story.vue'

export default {
  name: 'siteName',
  created () {
    this.fetchTabData()
    this.selected = 1
  },
  data () {
    return {
      msg: 'Newer Hacks',
      selected: undefined,
      tabdata: [],
    }
  },
  components: {story},
  methods: {
    
    fetchTabData: function (input= '/v0/newstories') {
      this.tabdata = []
      fetch("https://hacker-news.firebaseio.com" + input + ".json?print=pretty")
      .then(res => res.json())
      .then(res => {
        this.tabdata = res
        console.log(this.tabdata, '###')
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
  font-size: 120%;
}
.navbar-brand :hover{
  font-weight: bold;
  color: orange;
}

.navbar-start a {
  font-size: 75%;
  color: orange;
}

.navbar-start a:hover{
  font-size: 80%;
  color: #466EFF;
  font-weight: bold;
  border-bottom: solid 0.2em orange;
  box-sizing: border-box;
}

.router-link-active {
  font-size: 80%;
  color: #466EFF !important;
  font-weight: bold;
  margin: 0%;
  box-sizing: border-box;
  border-bottom: solid 0.2em orange;
}

.highlight:not(:last-child) {
    margin-bottom: 0%;
}

.navbar {
  border-bottom: solid 0.1em #466EFF;
}
</style>
