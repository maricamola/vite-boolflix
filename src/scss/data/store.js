import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=8b009e1a83ec3c344b8810fb8bc69c36',
  moviesList: [],
  isLoading: true
});