<template>
  <div>
    <!-- Affichez les données pokemon -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-row :gutter="20">
          <span>{{ pokemon.name }}</span>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name" width="75%" />
          </el-col>
          <el-col :span="16">
            <el-table :data="pokemon.moves" height="250" style="width: 50%">
              <el-table-column label="Liste des attaques" width="180">
                <li v-for=" m in pokemon.moves"> {{ m.move.name }}</li>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <span v-for=" t in pokemon.types"><el-button round>{{ t.type.name }}</el-button></span>
      </div>
      <div class="text item">
        <template>
          <el-tabs>
            <el-tab-pane label="Take 2x" name="first">
              <li v-for=" ddf in type.damage_relations.double_damage_from">take double damage from : {{ ddf.name }}
              </li>
              <li v-for=" ddfUrl in type.damage_relations.double_damage_from">{{ ddfUrl.url }}</li> </el-tab-pane>
                <el-tab-pane label="Give 2x" name="second">
              <li v-for=" ddt in type.damage_relations.double_damage_to">take double dammage to : {{ ddt.name }}</li>
            </el-tab-pane>
            <el-tab-pane label="1/2 from" name="third">
              <li v-for=" hdf in type.damage_relations.half_damage_from">half damage from : {{ hdf.name }}</li>
            </el-tab-pane>
            <el-tab-pane label="1/2 to" name="fourth">
              <li v-for=" hdt in type.damage_relations.half_damage_to">half damage to : {{ hdt.name }}</li>
            </el-tab-pane>
            <el-tab-pane label="0 from" name="fifth">
              <li v-for=" ndf in type.damage_relations.no_damage_from">no dammage from : {{ ndf.name }}</li>
            </el-tab-pane>
            <el-tab-pane label="0 to" name="sixth">
              <li v-for=" ndt in type.damage_relations.no_damage_to">No damage to : {{ ndt.name }}</li>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
    </el-card>
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
      path: 'https://pokeapi.co/api/v2/type/',
      type: { damage_relations: {
        double_damage_from: [],
        double_damage_to: [],
        half_damage_from: [],
        half_damage_to: [],
        no_damage_from: [],
        no_damage_to: []
      }},
      moves : []
    }
  },
  async fetch(){
    await this.getTypePokemon()
    await this.getPokemonByType()
  },
  methods: {
    async getTypePokemon() {
      this.avantageFaiblessePath += this.pokemon.types[0].type.name + '?limit=3'
      this.type = await this.$axios.$get(this.avantageFaiblessePath)
      console.log('grrrrrr',this.type)
      // console.log('tdc : ', this.avantageFaiblessePath)
      console.log('getTypePokemon :', this.pokemon )
    },
    async getPokemonByType(){
      this.pathath += this.type.damage_relations.double_damage_from[0].name
      this.pokemonByType = await this.$axios.get(this.path)
      console.log('getPokemonBytype :', this.pokemonByType)
    },
  }
}
</script>