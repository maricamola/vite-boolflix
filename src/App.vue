<script>
import axios from 'axios'
import Header from './components/Header.vue'
import CardsContainer from './components/CardsContainer.vue'
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
    Footer
  },
  methods: {
    getApi() {
      axios.get(store.apiUrl)
        .then(result => {
          store.moviesList = result.data
          console.log(store.moviesList);
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

  <CardsContainer />

  <Main />

  <Footer />
</template>

<style lang="scss">
@use './scss/main'
</style>