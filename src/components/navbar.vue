<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      {{msg}}
    </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
        <a class="navbar-item" href="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty">
          New
        </a>
        <a class="navbar-item" href="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty">
          Top
        </a>
        <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
           Best
        </a>
        <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
          Ask
        </a>
        <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
          Jobs
        </a>
        <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
          Show
        </a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'siteName',
  data () {
    return {
      msg: 'Newer Hacks'
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
}
.navbar {
  border-bottom: solid 0.1em steelblue;
}
</style>
