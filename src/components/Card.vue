<script>
export default {
  name: 'Card',
  props: {
    img: String,
    title: String,
    language: String,
    vote: String
  }
}
</script>

<template>
  <div class="sc-card col">
    <img src="" alt="">
    <h4>{{ title }}</h4>
    <p>{{ language }}</p>
    <p>{{ vote }}</p>
  </div>
</template>

<style lang="scss"></style>