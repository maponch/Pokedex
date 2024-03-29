<template>
  <div>
    <el-skeleton style="width: 240px" :loading="$fetchState.pending" animated>
      <template slot="template">
        <el-skeleton-item variant="image" style="width: 240px; height: 240px;" />
      </template>
      <img :src="pokemon.imgSrc" :alt="`nom du pokemon: ${pokemon.name}`" />

      <h3>{{ pokemon.name }}</h3>
    </el-skeleton>
  </div>
</template>
<script>
import pokemonHelper from '@/mixins/pokemonHelper'
export default {
  methods: {
  },
  mixins: [pokemonHelper],
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pokemon: '',
    }
  },
  async fetch() {
    const { pokemon } = await this.$axios.$get(this.path)
    this.pokemon = {
      ...pokemon[0].pokemon,
      imgSrc: this.getPokemonImageFromUrl(pokemon[0].pokemon.url)
    }
  }
}
</script>