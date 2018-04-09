<template>
  <div class="pagination">
    <nav class="pagination is-rounded is-small is-centered" role="navigation" aria-label="pagination">
      <a v-if="pagenum != 1" class="pagination-previous" @click="$emit('pageprevious')">Previous</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="On page ">{{pagenum}}</a></li>
      </ul>
      <a v-if="(pagenum !== last)" class="pagination-next" @click="$emit('pagenext')">Next page</a>
    </nav>
  </div>
</template>

<script>

  export default {
    name:'pagination',
    
    props:['pagenum', 'last']
  }
</script>

<style>

  .pagination nav { 
    margin: auto !important;
  }

  .pagination-next, .pagination-previous {
    background-color: orange;
  }

  .pagination-next:hover, .pagination-previous:hover {
    background-color:#466EFF;
    color:white;
  }

  .pagination-link {
    background-color:#466EFF;
    color: white;
  }

  .pagination-link:hover {
    background-color: orange;
    color:black;
  }

</style>
