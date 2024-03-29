<template>
  <div>
    <NuxtLink to="/">Home page</NuxtLink>
    <PokemonCard :pokemon="pokemon" :type="type"></PokemonCard>
  </div>
</template>

<script>
import PokemonCard from '@/components/Pokemoncard.vue'

export default {
  data(){
    return {
      pokemon: [],
      type: []
    }
  },
  async asyncData({route:{params:{name}}}){
    
    // Faites une requête pour récupérer les données pokemon
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemonData = await fetch(apiUrl);
    const pokemon = await pokemonData.json();
    console.log('flop : ',apiUrl)
    console.log('flop : ', pokemon)
    return { pokemon }
  },
  // async asyncData({ route: { params: { name } } }) {
  //   console.log(name)
  //   const apiUrl = `https://pokeapi.co/api/v2/type/${name}`
  //   console.log('test: ', apiUrl)
  //   const typeData = await fetch(apiUrl)
  //   const type = await typeData.json()

  //   return { type }
  // },

  components: {
    PokemonCard
  }
}
</script>
