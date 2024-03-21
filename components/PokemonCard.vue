<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ pokemon.name }}</span>
          <img :src="pokemon.sprites.front_default"
            :alt="pokemon.name" />
      </div>
      <div class="text item">
        <li v-for=" t in pokemon.types"> type : {{ t.type.name }}</li>
        <li v-for=" m in pokemon.moves"> attaque : {{ m.move.name }}</li>
      </div>
    </el-card>
    <!-- Affichez les données pokemon -->

  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      required: true
    }
  },
  data(){
    return {
      avantageFaiblessePath: 'https://pokeapi.co/api/v2/type/'
    }
  },
  async fetch(){
    await this.getTypePokemon()
  },
  methods: {
    display(){
      console.log('tdc : ',this.pokemon)
    },
    async getTypePokemon() {
      this.type = await this.$axios.$get(this.avantageFaiblessePath)
      console.log('grrrrrr',this.type)
      console.log('tdc : ', this.pokemon)
  },
  }
}
</script>