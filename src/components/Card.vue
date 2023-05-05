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
img {
  width: 20px;
}
</style>