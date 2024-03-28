<template>
  <div>
    <NuxtLink to="/">Home page</NuxtLink>
    <h1>Liset des différents types</h1>
    <type-pokemon></type-pokemon>
  </div>
</template>
<script>
import TypePokemon from '@/components/TypePokemon.vue'
export default{

  components: {
    TypePokemon,

  }
}
</script>