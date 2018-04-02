<template>
  <div class="story">
    <article class="media">
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small>
          <br>
          {{msg}}
        </p>
        <small><a>comments</a> · <a>hide</a> · 3 hrs</small>
        </div>
    </div>
  </article>
  </div>
</template>

<script>
export default {
  name: 'story',
  data () {
    return {
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.'
    }
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
