<template>
  <div>
    <NuxtLink to="/">Home page</NuxtLink>
    <PokemonCard :pokemon="pokemon"></PokemonCard>
  </div>
</template>

<script>
import PokemonCard from '@/components/Pokemoncard.vue'

export default {
  data(){
    return {
      pokemon: []
    }
  },
  async asyncData({route:{params:{name}}}){
    
    // Faites une requête pour récupérer les données pokemon
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemonData = await fetch(apiUrl);
    const pokemon = await pokemonData.json();
    // console.log('flop : ',pokemon)
    return { pokemon }
  },
  components: {
    PokemonCard
  }
}
</script>
