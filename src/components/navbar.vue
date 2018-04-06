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
        <a></a>
        <router-link to="/v0/newstories" class="navbar-item" native="selected = 1" @click.native="selected = 1; fetchdata('/v0/newstories')" :class="{highlight:selected == 1}">
          New
        </router-link>
        <router-link to="/v0/topstories" class="navbar-item" @click.native="selected = 2; fetchdata('/v0/topstories')" :class="{highlight:selected == 2}">
          Top
        </router-link>
        <router-link to="/v0/beststories" class="navbar-item" @click.native="selected = 3; fetchdata('/v0/beststories')" :class="{highlight:selected == 3}">
          Best
        </router-link>
        <router-link to="/v0/askstories" class="navbar-item" @click.native="selected = 4; fetchdata('/v0/askstories')" :class="{highlight:selected == 3}">
          Ask
        </router-link>
        <router-link to="/v0/jobstories" class="navbar-item" @click.native="selected = 5; fetchdata('/v0/jobstories')" :class="{highlight:selected == 3}">
          Jobs
        </router-link>
        <router-link to="/v0/showstories" class="navbar-item" @click.native="selected = 6; fetchdata('/v0/showstories')" :class="{highlight:selected == 3}">
          Show
        </router-link>
        <a></a>
      </div>
    </div>
  </nav>
  <div>
    <story :story="story"></story>
  </div>
  <span class="pagination">
    <nav class="pagination is-rounded is-small is-centered" role="navigation" aria-label="pagination">
      <a class="pagination-previous" @click="pagedown()">Previous</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="On page 1">{{page}}</a></li>
      </ul>
      <a class="pagination-next" @click="page++">Next page</a>
    </nav>
  </span>
</div>
</template>

<script>
import story from './story.vue'

export default {
  name: 'siteName',
  created () {
    this.fetchdata()
  },
  data () {
    return {
      msg: 'Newer Hacks',
      selected: undefined,
      story: [],
      page: 1
    }
  },
  components: {story},
  methods: {
    fetchdata: function (input= '/v0/newstories') {
      this.story = []
      fetch("https://hacker-news.firebaseio.com" + input + ".json?print=pretty")
      .then(res => res.json())
      .then(res => {
        for (let x=0; x < 10; x++) {
          fetch('https://hacker-news.firebaseio.com/v0/item/' + res[x] + '.json?print=pretty')
          .then(res => res.json())
          .then(res => {
            console.log(res)
            if (res.url) {
              let link = new URL(res.url)
              res.url = link
              // res.url.hostname = ''
            } else {
              let hostname = ''
              res.url = hostname
            }
            this.story.push(res)})
          .catch((e) => {
            console.log(e);
          })
        }
        // console.log(this.story)
      })
    },
    pageup: function (){
      return this.page++
    },
    pagedown: function(){
      if (this.page!== 1) {
      return this.page--
      }
      this.page
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

.pagination nav {
  margin-top: 2%;
  border: none;
  position: inherit;
}

.pagination {
  border-top: 1px solid rgba(180, 180, 180, 0.7);
  margin: 0;
}

.pagination nav {
 display:-webkit-flex;
 min-width: 30%;
 -webkit-box-align: center; 
 margin-left: 30% !important;
}
.pagination-list {
  max-width: 10%;
}

</style>
