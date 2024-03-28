<template>
  <div>
    <NuxtLink to="/types">Type List</NuxtLink>
    <h1>Pokedex v 1</h1>
    <searchBar></searchBar>
    <PokemonList></PokemonList>
  </div>
</template>
<script>
import PokemonList from '@/components/PokemonList.vue';
import SearchBar from '@/components/SearchBar.vue';
export default{
  components: {
    PokemonList,
    SearchBar
  }
}
</script>