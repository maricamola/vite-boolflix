<script>
export default {
  name: 'Card',
  props: {
    moviePoster: String,
    img: String,
    title: String,
    originalTitle: String,
    overviewMovie: String,
    language: String,
    vote: Number,
    type: String,
    poster: String,
  }
}
</script>

<template>
  <div class="card">
    <!-- style="width: 16rem;" -->
    <img class="poster" :src="`https://image.tmdb.org/t/p/w342/${poster}`" alt="poster">

    <div class="card-text">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">{{ originalTitle }}</h6>

      <div class="voteFlag">
        <h6 class="card-title"><img class="flag" :src="`flags/language-${language}.svg`" alt="original_language"></h6>

        <div class="vote">
          <i v-for="(star, i) in vote" :key="i" class="fa-solid fa-star"></i>
          <i v-for="(star, i) in 5 - vote" :key="i" class="fa-regular fa-star"></i>
        </div>



      </div>
      <span class="overviewMovie">{{ overviewMovie }}</span>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.card {
  width: calc(80% / 5);

  border: 1px solid black;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  padding: 0;
  margin: 10px;

  .poster {
    width: 100%;
  }

  .flag {
    width: 20px;
  }

  .card-text {
    display: none;
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    padding: 5px;
    overflow: auto;
  }

  .overviewMovie {
    font-size: 14px;
  }

  .voteFlag {
    display: flex;
    justify-content: space-between;
  }
}

.card:hover .card-text {
  text-align: left;
  color: white;
  display: block;
  background-color: rgba(0, 0, 0, 0.915);
}

::-webkit-scrollbar {
  width: 0.4em;
  height: 0.4em;
  background: #292626;
  margin-right: 10px;
}
</style>