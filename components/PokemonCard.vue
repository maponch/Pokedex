<template>
  <div>
    <!-- Affichez les données pokemon -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
        <span>{{ pokemon.name }}</span>
        <li v-for=" t in pokemon.types"> type : {{ t.type.name }}</li>
      </div>
      <div class="text item">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Attack" name="seventh">
              <li v-for=" m in pokemon.moves"> attaque : {{ m.move.name }}</li>
            </el-tab-pane>
            <el-tab-pane label="Take 2x" name="first">
              <li v-for=" ddf in type.damage_relations.double_damage_from">take double damage from : {{ ddf.name }}
              </li>
            </el-tab-pane>
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
      type: { damage_relations: {
        double_damage_from: [],
        double_damage_to: [],
        half_damage_from: [],
        half_damage_to: [],
        no_damage_from: [],
        no_damage_to: []
      }},
    }
  },
  async fetch(){
    await this.getTypePokemon()
  },
  methods: {
    async getTypePokemon() {
      this.avantageFaiblessePath += this.pokemon.types[0].type.name
      this.type = await this.$axios.$get(this.avantageFaiblessePath)
      // console.log('grrrrrr',this.type)
      // console.log('tdc : ', this.avantageFaiblessePath)
  },
  }
}
</script>