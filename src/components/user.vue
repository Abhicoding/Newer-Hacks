<template>
  <article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img src="https://api.adorable.io/avatars/999/abott@adorable.png">
    </p>
  </figure>
    <div class="media-content">
      <div class="content">
        <p>user : 
          <strong>{{userdata.id}}</strong>
          <br>
        </p>
        <p>created :
          <span>{{(new Date(userdata.created).toGMTString())}}</span>
          <br>
        </p>
        <p>karma : 
          <span>{{userdata.karma}}</span>
          <br>
        </p>
        <span>about : <span v-html='userdata.about'></span>
          <br>
        </span>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="far fa-arrow-alt-circle-up"></i></span>Submitted
          </a>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
export default {
    name: 'user',
    props:['userdata']
}
</script>

<style scoped>
  .media {
    margin: 2%;
  }
  
  .icon span {
    margin-right: 2%;
  }
  
  .level-item a {
    box-sizing: content-box;
    width:auto;
  }
  
  p {
    margin-bottom: 1%;
  }

</style>
