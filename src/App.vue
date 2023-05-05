<script>
import axios from 'axios'
import Header from './components/Header.vue'
import CardsContainer from './components/CardsContainer.vue'
import Loader from './components/partials/Loader.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
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
    CardsContainer,
    Main,
    Footer,
    Loader
  },
  methods: {
    getApi() {
      store.isLoading = true;
      axios.get(store.apiUrl, {
        params: {
          query: ('Avatar')
        }
      })
        .then(result => {
          store.moviesList = result.data.results;
          store.isLoading = false;

          //Al primo caricamento filtro gli i title e li salvo nello store
          if (store.filterMovies.length === 0) {
            store.moviesList.forEach(element => {
              if (!store.filterMovies.includes(element.title)) {
                store.filterMovies.push(element.title)
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
  <Header />

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