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
      <div class="logo">
        <img src="logo-boolflix.png" alt="logo">
      </div>

      <SearchBar @startSearch="test" />
    </div>

  </header>
</template>


<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.837);

  img {
    width: 10%;
  }

  .container {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .menu {
    color: white;
    display: flex;
  }

  ul {
    list-style: none;
    align-items: center;
  }
}
</style>