<template>
  <div class="story">
    <article v-for="item in story" class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <br>
          {{item.title}} <a v-bind:href="item.url" target="_blank">({{item.url.hostname}})</a>
        </p>
        <small> {{item.score}} points · <a><strong><small>{{item.by}}</small></strong></a> · <a>discuss</a> · <a>hide</a> · <time>{{item.time}}</time></small>
        </div>
    </div>
  </article>
  </div>
</template>

<script>

export default {
  name: 'story', 
  props: ['story'] ,
  created: function () {
    // console.log(this.story.value)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .story {
    font-size: 75%;
    box-shadow: 0.1pc;
    box-sizing: border-box;
    margin-top: 1%;
    margin-left: 3%;
    border: 10px;
  }
</style>
