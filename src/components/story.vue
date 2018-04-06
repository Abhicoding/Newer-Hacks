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
