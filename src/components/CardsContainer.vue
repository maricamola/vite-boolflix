<script>
import Card from './Card.vue'
import { store } from '../scss/data/store'

export default {
  name: 'CardsContainer',
  components: {
    Card
  },
  data() {
    return {
      store
    }
  },
}

</script>
<template>
  <div class="container">
    <div class="row">
      <h2>I più popolari <i class="fa-solid fa-chevron-right fa-bounce"></i> </h2>

      <Card v-for="(movie, index) in store.moviesList" :key="index" :title="movie.title"
        :originalTitle="movie.original_title" :language="movie.original_language" :overviewMovie='movie.overview'
        :vote="Math.ceil(movie.vote_average / 2)" :poster="movie.poster_path" />

    </div>
  </div>



  <!-- <div class="container">
    <div v-if="originalTitle === movie.original_title" class="row">

      <Card v-for="(movie, index) in store.moviesList" :key="index" :title="movie.title"
        :originalTitle="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" />

    </div>

    <div v-else class="row">

      <Card v-for="(movie, index) in store.moviesList" :key="index" :title="movie.name"
        :originalTitle="movie.original_name" :language="movie.original_language" :vote="movie.vote_average" />

    </div>

  </div> -->
</template>
<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;

  h2 {
    color: #FFFFFF;
    padding: 10px 0;
  }

  i {
    display: none;
    margin-left: 10px;
    font-size: 20px;
  }

  h2:hover i {
    display: inline-block;
  }

  .row {
    justify-content: center;
  }
}
</style>