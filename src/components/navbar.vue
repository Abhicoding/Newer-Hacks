<template>
<div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        {{msg}}
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/v0/newstories" class="navbar-item" @click.native="selected = 1; fetchdata('/v0/newstories')" :class="{highlight:selected == 1}">
          New
        </router-link>
        <router-link to="/v0/topstories" class="navbar-item" @click.native="selected = 2; fetchdata('/v0/topstories')" :class="{highlight:selected == 2}">
          Top
        </router-link>
        <router-link to="/v0/beststories" class="navbar-item" @click.native="selected = 3; fetchdata('/v0/beststories')" :class="{highlight:selected == 3}">
           Best
        </router-link>
        <span>{{$router.fullPath}}</span>
        <!-- <a class="navbar-item" @click="selected = 4" :class="{highlight:selected == 4}" href="#">
          Ask
        </a>
        <a class="navbar-item" @click="selected = 5" :class="{highlight:selected == 5}" href="#">
          Jobs
        </a>
        <a class="navbar-item" @click="selected = 6" :class="{highlight:selected == 6}" href="#">
          Show
        </a> -->
        <a></a>
      </div>
    </div>
  </nav>
  <story :story="story"></story>
</div>
</template>

<script>
import story from './story.vue'

export default {
  name: 'siteName',
  data () {
    return {
      msg: 'Newer Hacks',
      selected: undefined,
      story: []
    }
  },
  components: {story},
  methods: {
    fetchdata: function (input) {
      this.story = []
      fetch("https://hacker-news.firebaseio.com" + input + ".json?print=pretty")
      .then(res => res.json())
      .then(res => {
        for (let x=0; x < 2; x++) {
          fetch('https://hacker-news.firebaseio.com/v0/item/' + res[x] + '.json?print=pretty')
          .then(res => res.json())
          .then(res => {
            let link = new URL(res.url)
            // console.log(link, res.url)
            res.url = link
            this.story.push(res)})
          .catch((e) => {
            console.log(e);
          })
        }
        console.log(this.story)
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
