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
            <el-table :data="pokemon.moves" height="250" style="width: 100%">
              <el-table-column label="Liste des attaques" width="180">
                <li v-for=" m in pokemon.moves"> {{ m.move.name }}</li>
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <span v-for=" t in pokemon.types"><el-button round>
            <NuxtLink :to="`/type/${t.type.name}`">{{ t.type.name }}</NuxtLink>
          </el-button></span>
      </div>
      <div class="text item">
        <template>
          <el-tabs v-model="activeName">
            <el-tab-pane label="Take 2x" name="first">



              <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for=" ddf in type.damage_relations.double_damage_from">
                  <FirstPokemonFromType :path="ddf.url"></FirstPokemonFromType>
                </el-carousel-item>
              </el-carousel>
            </el-tab-pane>
            <!-- <el-tab-pane label="Give 2x" name="second">
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
            </el-tab-pane> -->
          </el-tabs>
        </template>
      </div>
    </el-card>
    <div>
      <pre v-for="p in pokemon.types">{{ p.type.url }}</pre>
      <li v-for=" ddf in type.damage_relations.double_damage_from">{{ ddf.name }}</li>

    </div>
  </div>
</template>

<script>
import ListType from '@/components/list/ListType'
import FirstPokemonFromType from './FirstPokemonFromType.vue'
export default {
  components: {
    FirstPokemonFromType
  },
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
      moves : [],
      tab: [],
      activeName: 'first'
    }
  },
  components:{
    ListType
  },
  async fetch(){
    await this.getTypePokemon()
    await this.getUrlType()
    // await this.getPokemonByType()
  },
  methods: {
    async getTypePokemon() {
      this.avantageFaiblessePath += this.pokemon.types[0].type.name + '?limit=3'
      this.type = await this.$axios.$get(this.avantageFaiblessePath)
      console.log('type du pokemon actuel :',this.type)
      // console.log('tdc : ', this.avantageFaiblessePath)
      console.log('Fiche complete du pokemon :', this.pokemon )
    },
    // async getPokemonByType(){
    //   this.path += this.type.damage_relations.double_damage_from[0].name
    //   this.pokemonByType = await this.$axios.get(this.path)
    //   console.log('getPokemonBytype :', this.pokemonByType)
    // },
    // async getUrlType(){
    //   const i = 0
    //   while (i = this.pokemon.types.lenght()){
    //     const url = 'https://pokeapi.co/api/v2/type/'
    //     url += this.pokemon.types[i].type.url
    //     this.urlType = await this.$axios.$get(this.url)
    //       console.log('getUrlType: ', this.urlType)
    //       i++
    //   return { tab }
    //   }
      
    // }
    async getUrlType() {
      const types = this.type.damage_relations;
      for (let i = 0; i < types.length; i++) {
        const typeId = types[i].type.url.split('/').slice(-2, -1)[0]; // Extraire l'ID du type
        const url = 'https://pokeapi.co/api/v2/type/' + typeId;
        try {
          const response = await this.$axios.$get(url);
          console.log('getUrlType:', response);
          // Faites quelque chose avec la réponse de l'API si nécessaire
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      }
    }


  },
  computed: {
    
  }
}
</script>