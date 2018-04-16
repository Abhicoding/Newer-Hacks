<template>
  <div class="story">
    <div class="media-content">
      <article v-for="(item, index) in story" v-bind:key=item.id class="media">
         <span class="postnum">{{ (index+1) + (page-1)*10 }}</span>
        <div class="content">
          <p>
            {{item.title}} <a v-if="item.url.hostname" v-bind:href="item.url" target="_blank">({{item.url.hostname}})</a>
          </p>
          <small> {{item.karma}} · <router-link @click.native="userlink(item.by)" to="./user"><strong><small>{{item.by}}</small></strong></router-link> · <a>discuss</a> · <a>hide</a> · <time>{{item.elapsed}}</time></small>
        </div>
      </article>
    </div>
    <br>
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
      this.getPosts()
    },
    
    data () {
      return {
        story: [],
        page: 1,
        lastpage: undefined
      }
    },
    
    methods: {

      getPosts: function () { // populates data with stories according to page value and tab
        for (let x = 10 * (this.page - 1); x < 10 * (this.page); x++) {
          fetch('https://hacker-news.firebaseio.com/v0/item/' + this.tab[x] + '.json?print=pretty')
            .then(res => res.json())
            .then(res => {
              if (res.url) {
                let link = new URL(res.url)
                res.url = link
              } else {
                let hostname = ''
                res.url = hostname
              }
              this.now(res)
              this.points(res)
              // console.log(res)
              this.story.push(res)
              })
            .catch((e) => {
              console.log(e);
            })
          }
        },

      pagedown: function () { // changes page number down
        this.page--
      },

      pageup: function () { // changes page number up
        this.page++
      },

      lastPageNum: function () { // calculates the last page number for the tab
        this.lastpage = Math.ceil(this.tab.length/10)
      },

      now: function(input) { // converts UNIX time to time since posted in normal format
        let seconds = Math.ceil(Date.now()/1000) - input.time
        if (seconds < 59) {
          return input.elapsed = (seconds > 1 ? seconds + " seconds ago" : seconds + " second ago") 
        } else if (seconds < 3600) {
          return input.elapsed = (Math.floor(seconds/60) > 1 ? Math.floor(seconds/60) + " minutes ago" : Math.floor(seconds/60) + " minute ago")
        } else if (seconds < 24 * 3600) {
          return input.elapsed = (Math.floor(seconds/3600) > 1 ? Math.floor(seconds/3600) + " hours ago" : Math.floor(seconds/3600) + " hour ago") 
        } else if (seconds < 7 * 24 * 3600) {
          return input.elapsed = (Math.floor(seconds/(24 * 3600)) > 1 ? Math.floor(seconds/(24 * 3600)) + " days ago" : Math.floor(seconds/(24 * 3600)) + " day ago")
        } else {
          return input.elapsed = (Math.floor(seconds/(7 * 24 * 3600)) > 1 ? Math.floor(seconds/(7 * 24 * 3600)) + " weeks ago" : Math.floor(seconds/(7 * 24 * 3600)) + " week ago")
        }
      },

      points: function(input) { //adds point/points suffix to score
        return input.karma = (input.score == 1 ? input.score + " point" : input.score + " points")
      },

      userlink: function(input) {
        this.$emit('userclicked', input)
      }
        
    },
    
    watch: {
      
      '$route' (to, from) { // on watch for tab change
        if (from.name == 'user') {
          this.$emit('statetoggle', [true, false])
        }
        this.story=[]
        this.page=1                   // Modify this watcher to allow back navigation from /user
        this.getPosts(this.tab, this.page)
      },
      
      page: function () { // on watch for page change
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
    font-size: 90%;
    box-shadow: 0.1pc;
    box-sizing: border-box;
    margin-top: 0%;
    margin-left: 2%;
    border: 10px;
    padding: 0%;
    float: left;
  }
  
  .media {
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    margin-top: 0%;
    border-top: 1px solid rgba(180, 180, 180, 0.7);
  }

  .media-content {
    border-bottom: solid 0.1em #466EFF;
  }

  .postnum {
    box-sizing: content-box;
    float: left;
    margin: 1% 0% 0% 2%;
  }

  .content p {
    margin-bottom: 1%;
  }

</style>
