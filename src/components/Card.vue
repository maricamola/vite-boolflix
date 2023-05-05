<script>
export default {
  name: 'Card',
  props: {
    moviePoster: String,
    img: String,
    title: String,
    originalTitle: String,
    language: String,
    vote: Number
  }
}
</script>

<template>
  <div class="sc-card col">
    <h4>{{ title }}</h4>
    <p>{{ originalTitle }}</p>
    <p><img :src="`flags/language-${language}.svg`" alt="original_language">
    </p>
    <p>{{ vote }}</p>
  </div>
</template>

<style lang="scss" scoped>
.sc-card {
  flex-grow: 1;
  flex-basis: calc(100% / 5);
  height: 250px;
  border: 1px solid black;
  text-align: end;
}

img {
  width: 20px;
}
</style>