<template>
  <div>
    <h1>Carte Pokémon</h1>
    <pre>{{ pokemon.name }}</pre> <!-- Affichez les données pokemon -->
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: [],
      required: true
    }
  }
}
</script>