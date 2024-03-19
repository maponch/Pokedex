export default {
  ssr: false,
  modules: ['@nuxtjs/axios'],
  axios: { baseURL: 'https://pokeapi.co/api/v2/pokemon/ditto' },
  components: true,
  routes: {
    prefetchLinks: true
  }
}