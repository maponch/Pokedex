<template>
  <div>
    <NuxtLink to="/">Home page</NuxtLink>
    <PokemonCard></PokemonCard>
  </div>
</template>
<script>
import PokemonCard from '@/components/Pokemoncard.vue'
export default {
  data(){
    return {
    }
  },
  async asyncData(ctx) {
    console.log('route : ', ctx.route)
    },
  components: {
    PokemonCard
  }
}
</script>