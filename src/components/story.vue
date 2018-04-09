<template>
  <div class="story">
    <div class="media-content">
      <article v-for="(item, key) in story" v-bind:key=item.id class="media">
         <span class="postnum">{{ (key+1) + (page-1)*10 }}</span>
        <div class="content">
          <p>
            {{item.title}} <a v-if="item.url.hostname" v-bind:href="item.url" target="_blank">({{item.url.hostname}})</a>
          </p>
          <small> {{item.score}} points · <a><strong><small>{{item.by}}</small></strong></a> · <a>discuss</a> · <a>hide</a> · <time>{{item.time}}</time></small>
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
      return this.getPosts(this.tab, this.page)
    },
    
    data () {
      return {
        story: [],
        page: 1,
        lastpage: undefined,
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
              this.story.push(res)
              })
            .catch((e) => {
              console.log(e);
            })
          }
          console.log(this.story)
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
    font-size: 90%;
    box-shadow: 0.1pc;
    box-sizing: border-box;
    margin-top: 0%;
    margin-left: 4%;
    border: 10px;
    padding: 0%;
    float: left;
  }
  
  .media {
    padding-top: 1%;
    padding-bottom: 1%;
    margin-top: 0%;
    border-top: 1px solid rgba(180, 180, 180, 0.7);
  }

  .media-content {
    border-bottom: solid 0.1em #466EFF;
  }

  .postnum {
    float: left;
    margin: 1% 0% 0% 2%;
  }

</style>
