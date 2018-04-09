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
        <strong>John Smith</strong>
        <br>
      </p>
      <p>created :
        <date>31 Dec 2022</date>
        <br>
      </p>
      <p>karma : 9000
        <br>
      </p>
      <p>about : Somthings about me
        <br>
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <a class="level-item">
          <span class="icon is-small"><i class="far fa-arrow-alt-circle-up"></i></span>Submitted
        </a>
        <a class="level-item" title="comments">
          <span class="icon is-small"><i class="fas fa-comment"></i></span>Comments
        </a>
        <a class="level-item" title="favorites">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>Favorites
        </a>
      </div>
    </nav>
  </div>
</article>
</template>

<script>
export default {
    name: 'user'
}
</script>

<style>
  .icon span {
    margin-right: 2%;
  }
  .level-item a {
    box-sizing: content-box;
    width:auto;
  }
</style>
