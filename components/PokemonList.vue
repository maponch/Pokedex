<template>
<div>
  <span v-if="$fetchState.pending">Loading...</span>
  <div v-else>
    <pre>{{  data }}</pre>
    <button type="button" @click="goNextPage">suivant</button>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      pokedexPath: 'https://pokeapi.co/api/v2/pokemon',
      pageNextPath: null,
      data: '',
    }
  },
  async fetch() {
    await this.getPokemons()
  },
  methods: {
    async getPokemons() {
      const {results, next} = await this.$axios.$get(this.pokedexPath)
      this.data = results
      this.pageNextPath = next
    },

    goNextPage() {
      this.pokedexPath = this.pageNextPath
      this.$fetch()
    }
  }
}
</script>