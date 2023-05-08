<script>
import SearchBar from './SearchBar.vue';

export default {
  name: 'Header',
  components: {
    SearchBar
  },
  methods: {
    test() {
      console.log('aaa');
      this.$emit('updateApi');
    }
  }
}
</script>
<template>
  <header>
    <div class="container">
      <div class="menu">
        <img src="logo-boolflix.png" alt="logo">

        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Serie Tv</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Film</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nuovi e popolari</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">La mia lista</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sfoglia per lingua</a>
          </li>
        </ul>
      </div>



      <SearchBar @startSearch="test" />
    </div>

  </header>
</template>


<style lang="scss" scoped>
header {
  background-color: #141414;

  img {
    width: 10%;
    margin-right: 20px;
    cursor: pointer;
  }

  .container {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .menu {
    display: flex;
    align-items: center;

    ul li a {
      color: rgb(219, 215, 220);
      padding: 10px;
      font-size: 14px;

      &:hover {
        color: #545454;
      }
    }
  }

  ul {
    list-style: none;
    align-items: center;
  }
}
</style>