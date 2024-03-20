<template>
  <div>
    <p>heyy</p>
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