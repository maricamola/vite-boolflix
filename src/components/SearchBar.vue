<script>
import { store } from '../scss/data/store'

export default {
  name: 'SearchBar',

  data() {
    return {
      store
    }
  },
}

</script>


<template>
  <div class="searchBar d-flex">

    <div class="search d-flex me-5">
      <input v-model.trim="store.nameToSearch" @keyup.enter="$emit('startSearch')" class="form-control me-3" type="text"
        placeholder="Ricerca" aria-label="default input example">
      <button class="btn btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>

    <div class="select d-flex">
      <select @change="$emit('startSearch')" v-model="store.seriesType" class="form-select"
        aria-label="Default select example">
        <!-- <option v-for="tv in store.filterMovies" :key="tv" :value="tv">{{ tv }}</option> -->
        <option value="seriesTv">Tv series</option>
        <option value="movies">Movies</option>
        <option selected value="all">All</option>
      </select>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.searchBar {
  align-items: center;
  justify-content: space-between;

  .search {
    align-items: center;

    button {
      color: gray;
      border: 1px solid grey;
    }
  }

  .form-control {
    width: 250px;
  }

  .form-select {
    width: fit-content;
  }
}
</style>