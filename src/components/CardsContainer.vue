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
      <Card v-for="(movie, index) in store.moviesList" :key="index" :title="movie.original_title"
        :originalTitle="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" />
    </div>

  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
</style>