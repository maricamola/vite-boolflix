<script>
export default {
  name: 'Jumbotron'
}
</script>


<template>
  <div class="jumbotron">
    <img src="jumbotron.jpg" alt="">
    <div class="text">
      <img src="favicon.png" alt="">
      FILM PRESENTS :
      <br>
      <span class="title">Avatar 2</span>
      <br>
      <button type="button" class="btn btn-light btn-lg"><i class="fa-solid fa-play fa-beat"></i> Riproduci</button>
      <button type="button" class="btn btn-secondary btn-lg"><i class="fa-solid fa-circle-info"></i> Altre Info</button>
    </div>
  </div>
</template>




<style lang="scss" scoped>
.jumbotron {
  width: 100%;
  height: 500px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }

  .text {
    position: absolute;
    left: 0;
    bottom: 0;
    color: white;
    margin: 50px;

    img {
      width: 40px;
      margin-left: 20px;
    }

    .title {
      font-size: 100px;
      font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

    }

    button {
      margin: 10px;
    }

    button i {
      margin: 5px;
    }
  }
}
</style>