<script>
import axios from 'axios'
import Header from './components/Header.vue'
import CardsContainer from './components/CardsContainer.vue'
import Loader from './components/partials/Loader.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
import Jumbotron from './components/Jumbotron.vue'
import { store } from './scss/data/store'


export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: {
    Header,
    Jumbotron,
    CardsContainer,
    Main,
    Footer,
    Loader
  },
  methods: {
    getApi() {

      let fullUrl = store.baseUrl;

      if (store.seriesType === 'seriesTv') {
        fullUrl += 'search/tv';
      } else if (store.seriesType === 'movies') {
        fullUrl += 'search/movie';
      } else if (store.seriesType === 'all') {
        fullUrl += 'movie/popular';
      }

      store.isLoading = true;
      axios.get(fullUrl, {
        params: {
          api_key: store.api_key,
          query: store.nameToSearch
        }
      })
        .then(result => {
          store.moviesList = result.data.results;
          store.isLoading = false;

          //Al primo caricamento filtro i title e li salvo nello store
          if (store.filterMovies.length === 0) {
            store.moviesList.forEach(element => {
              if (!store.filterMovies.includes(element.tv)) {
                store.filterMovies.push(element.tv)
              }
            });
          }
        })
    }
  },
  mounted() {
    this.getApi();
  }
}
</script>

<template>
  <Header @updateApi="getApi" />

  <Jumbotron />

  <Loader v-if="store.isLoading" />

  <div v-else>

    <CardsContainer />

    <Main />

    <Footer />

  </div>
</template>

<style lang="scss">
@use './scss/main'
</style>