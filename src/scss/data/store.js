import { reactive } from "vue";

export const store = reactive({
  baseUrl: 'https://api.themoviedb.org/3/',
  api_key: '8b009e1a83ec3c344b8810fb8bc69c36',
  imageUrl: 'https://image.tmdb.org/t/p/w342/',
  language: 'it-IT',
  moviesList: [],
  isLoading: true,
  filterMovies: [],
  nameToSearch: '',
  moviesType: null,
  seriesType: 'all',
});