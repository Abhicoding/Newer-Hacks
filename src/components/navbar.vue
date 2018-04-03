<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="#">
      {{msg}}
    </a>
  </div>
  <div class="navbar-menu">
    <div class="navbar-start">
        <a class="navbar-item" @click="selected = 1" :class="{highlight:selected == 1}" href="/new">
          New
        </a>
        <a class="navbar-item" @click="selected = 2" :class="{highlight:selected == 2}" href="/top">
          Top
        </a>
        <a class="navbar-item" @click="selected = 3" :class="{highlight:selected == 3}" href="#">
           Best
        </a>
        <a class="navbar-item" @click="selected = 4" :class="{highlight:selected == 4}" href="#">
          Ask
        </a>
        <a class="navbar-item" @click="selected = 5" :class="{highlight:selected == 5}" href="#">
          Jobs
        </a>
        <a class="navbar-item" @click="selected = 6" :class="{highlight:selected == 6}" href="#">
          Show
        </a>
        <a></a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'siteName',
  data () {
    return {
      msg: 'Newer Hacks',
      selected: undefined
    }
  },
  methods: {
    validate: ()=>{      
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

.highlight {
  font-size: 80%;
  color: #466EFF !important;
  font-weight: bold;
  margin: 0%;
  box-sizing: border-box;
  border-bottom: solid 0.2em orange;
}

.navbar {
  border-bottom: solid 0.1em #466EFF;
}
</style>
