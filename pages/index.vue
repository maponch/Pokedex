<template>
<div>
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