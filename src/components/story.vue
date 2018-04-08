<template>
  <div class="story">
    <article v-for="item in story" v-bind:key=item.id class="media">
      <div class="media-content">
        <div class="content">
          <p>
            <br>
            {{item.title}} <a v-if="item.url.hostname" v-bind:href="item.url" target="_blank">({{item.url.hostname}})</a>
          </p>
          <small> {{item.score}} points · <a><strong><small>{{item.by}}</small></strong></a> · <a>discuss</a> · <a>hide</a> · <time>{{item.time}}</time></small>
          </div>
      </div>
    </article>
    <div>
        <pagination v-if="story.length > 0" :pagenum="page" :last='lastpage' v-on:pageprevious="pagedown" v-on:pagenext="pageup"></pagination>
    </div>
  </div>
</template>

<script>
import pagination from './pagination.vue'

export default {
  
  name: 'story', 
  
  props: ['tab'] ,
  
  created: function () {
    this.lastPageNum()
    return this.getPosts(this.tab, this.page)
  },
  
  data () {
    return {
      story: [],
      page: 1,
      lastpage: undefined
    }
  },
  
  methods: {

    getPosts: function (tab, num) {
      for (let x = 10 * (num - 1); x < 10 * (num); x++) {
          fetch('https://hacker-news.firebaseio.com/v0/item/' + tab[x] + '.json?print=pretty')
          .then(res => res.json())
          .then(res => {
            if (res.url) {
              let link = new URL(res.url)
              res.url = link
            } else {
              let hostname = ''
              res.url = hostname
            }
            this.story.push(res)})
          .catch((e) => {
            console.log(e);
          })
        }
      },

    pagedown: function () {
      this.page--
    },

    pageup: function () {
      this.page++
    },

    lastPageNum: function () {
      this.lastpage = Math.ceil(this.tab.length/10)
    }
      
  },
  
  watch: {
    
    tab: function () {
      this.story=[]
      this.page=1
      this.getPosts(this.tab, this.page)
    },
    
    page: function () {
      this.story=[]
      this.getPosts(this.tab, this.page)
    }
  },
  
  components: {
    pagination
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {
    font-size: 75%;
    box-shadow: 0.1pc;
    box-sizing: border-box;
    margin-top: 0%;
    margin-left: 5%;
    border: 10px;
    padding: 0%;
  }
  .media {
    padding-top: 1%;
    padding-bottom: 1%;
    margin-top: 0%;
    border-top: 1px solid rgba(180, 180, 180, 0.7);
  }
</style>
