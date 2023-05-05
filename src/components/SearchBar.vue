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
      <select class="form-select" aria-label="Default select example">
        <option selected>Categoria</option>
        <option value="1">Film</option>
        <option value="2">Serie Tv</option>
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