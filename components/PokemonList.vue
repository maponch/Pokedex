<template>
<div>
  <span v-if="$fetchState.pending">Loading...</span>
  <div v-else>
    <pre>{{  data }}</pre>
    <button type="button" @click="goPreviousPage">précédent</button>
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
      pagePreviousPath: null,
      data: '',
    }
  },
  async fetch() {
    await this.getNextPokemons()
    await this.getPreviousPokemons()
  },
  methods: {
    async getNextPokemons() {
      const {results, next} = await this.$axios.$get(this.pokedexPath)
      this.data = results
      this.pageNextPath = next
    },
    async getPreviousPokemons(){
      const {results, previous} = await this.$axios.$get(this.pokedexPath)
      this.data = results
      console.log(previous)
      this.pagePreviousPath = previous
    },
    goNextPage() {
      this.pokedexPath = this.pageNextPath
      this.$fetch()
    },

    goPreviousPage() {
      this.pokedexPath = this.pagePreviousPath
      this.$fetch()
    }
  }
}
</script>