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
      <Card v-for="movie in moviesList" :key="movie.id" :img="movie.image" :title="movie.title" :language="movie.language"
        :vote="movie.vote" />
    </div>

  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
}
</style>