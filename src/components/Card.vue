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
  <div class="sc-card col m-3">
    <h4>{{ title }}</h4>
    <p>{{ originalTitle }}</p>
    <p><img :src="`flags/language-${language}.svg`" alt="original_language">
    </p>
    <p>{{ vote }}</p>

    <span class="caption">
      Descrizione movie
    </span>
  </div>
</template>

<style lang="scss" scoped>
.sc-card {
  flex-grow: 1;
  flex-basis: calc(100% / 8);
  flex-wrap: wrap;
  height: 250px;
  border: 1px solid black;
  text-align: end;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  img {
    width: 20px;
  }
}

.caption {
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}

.sc-card:hover .caption {
  display: block;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 20px;
}
</style>