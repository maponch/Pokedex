<template>
  <div>
    <span v-if="$fetchState.pending">Loading...</span>
    <div v-else>
      <div v-for="pokemon in pokemons" :key="pokemon.name">{{ pokemon }}</div>
      <!-- <button type="button" @click="recuperationId">GOOOOOOO</button> -->
      <el-table :data="datas" border style="width: 100%" @row-dblclick="goToCard">
        <el-table-column prop="id" label="index" />
        <el-table-column label="photo">
          <template slot-scope="scope">
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${scope.row.id}.png`"
              :alt="scope.row.name" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Nom">
        </el-table-column>
        <el-table-column label="favoris">
          <template slot-scope="scope">
            <i v-if="favori.includes(scope.row.name)" class="el-icon-star-off"
              @click="removePokemonFavori(scope.row.name)"></i>
            <i v-else class=" el-icon-star-on" @click="addPokemonFavori(scope.row.name)"></i>
          </template>
        </el-table-column>
        <el-table-column label="info">
          <template slot-scope="{row}">
            <nuxt-link :to="`pokemon/${row.name}`">Voir<i class="el-icon-view el-icon--right"></i></nuxt-link>
          </template>
        </el-table-column>
      </el-table>
      <button v-show="pagePreviousPath !== null" type="button" @click="goPreviousPage">précédent</button>
      <button type="button" @click="goNextPage">suivant</button>
    </div>

  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      pokedexPath: 'https://pokeapi.co/api/v2/pokemon/',
      pageNextPath: null,
      pagePreviousPath: null,
      datas: '',
      id: '',
      favori: [],
    }
  },
  async fetch() {
    await this.getNextPokemons()
    this.recuperationId()
  },
  computed: mapGetters(['pokemons']),
  methods: {
    ...mapActions({
      addPokemonFavoriStore :'ADD_POKEMON_FAV',
      removePokemonFavoriStore : 'DELETE_POKEMON_FAV'
    }),
    addPokemonFavori(data){
      this.favori.push(data)
      this.addPokemonFavoriStore(data)
      console.log('add : ', this.favori)
    },
    removePokemonFavori(data){
      this.removePokemonFavoriStore(data)
      const imagine =this.favori.filter((f)=> f !== data)
      console.log('remove', imagine)
    },
    async getNextPokemons() {
      const {results, next, previous} = await this.$axios.$get(this.pokedexPath)
      this.datas = results
      this.pageNextPath = next
      this.pagePreviousPath = previous
      // console.log(this.datas)
    },
    recuperationId() {
      this.datas.forEach(pokemon => {
        const hey = pokemon.url
        const bonIndex = hey.substring(hey.length - 4).replace(/['n/]/g, '')
        pokemon.id = bonIndex
        this.id = bonIndex
      })
    },
    async getPreviousPokemons(){
      const {results, previous} = await this.$axios.$get(this.pokedexPath)
      this.datas = results
      this.pagePreviousPath = previous
    },
    goNextPage() {
      this.pokedexPath = this.pageNextPath
      this.$fetch()
    },
    goPreviousPage() {
      this.pokedexPath = this.pagePreviousPath
      this.$fetch()
    },
    // goToCard(row) {
    //   const pokemonName = row.name;
    //   this.$router.push(`/pokemon/${pokemonName}`)
    //   console.log('gtc :' ,row.name)
    // },
    goToCard(data) {
      const pokemonName = data.name;
      this.$router.push(`/pokemon/${pokemonName}`)
      console.log('goToCard :', data.name)
    },
  },
}
</script>