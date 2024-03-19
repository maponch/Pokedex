<template>
  <div>
    <p>{{path}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonPath: null,
      data: ''
    }
  },
  async fetch(){
    await this.getOnePokemon()
  },
  methods: {
    async getOnePokemon(){
      const { path } = await this.$axios.$get(`https://pokeapi.co/api/v2/ability/${data.name}`)
      this.data = path 
      console.log('lol : ', this.data)
    },
    
    
  },
  mounted(){

  }
}
</script>