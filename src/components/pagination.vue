<template>
  <div class="pagination">
    <nav class="pagination is-rounded is-small is-centered" role="navigation" aria-label="pagination">
      <a v-if="pagenum != 1" class="pagination-previous" @click="$emit('pageprevious')">Previous</a>
      <ul class="pagination-list">
        <li><a class="pagination-link" aria-label="On page ">{{pagenum}}</a></li>
      </ul>
      <a class="pagination-next" @click="$emit('pagenext')">Next page</a>
    </nav>
  </div>
</template>

<script>

export default {
  name:'pagination',
  props:['pagenum']
}
</script>

<style>
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
 margin: auto !important;
}

.pagination-list {
  max-width: 10%;
}
</style>
