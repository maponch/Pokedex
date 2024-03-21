<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ pokemon.name }}</span>
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      </div>
      <div class="text item">
        <li v-for=" t in pokemon.types"> type : {{ t.type.name }}</li>
        <li v-for=" m in pokemon.moves"> attaque : {{ m.move.name }}</li>
        <li v-for=" ddf in type.damage_relations.double_damage_from">take double damage from : {{ ddf.name }}</li>
        <li v-for=" ddt in type.damage_relations.double_damage_to">take double dammage to : {{ ddt.name }}</li>
        <li v-for=" ndf in type.damage_relations.no_damage_from">no dammage from : {{ ndf.name }}</li>
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
      avantageFaiblessePath: 'https://pokeapi.co/api/v2/type/',
      type: { damage_relations: {
        double_damage_from: [],
        double_damage_to: [],
        half_damage_from: [],
        half_damage_to: [],
        no_damage_from: []

      }}
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
      this.avantageFaiblessePath += this.pokemon.types[0].type.name
      this.type = await this.$axios.$get(this.avantageFaiblessePath)
      console.log('grrrrrr',this.type)
      console.log('tdc : ', this.avantageFaiblessePath)
  },
  }
}
</script>