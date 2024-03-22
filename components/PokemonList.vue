<template>
  <div>
    <span v-if="$fetchState.pending">Loading...</span>
    <div v-else>
      <!-- <button type="button" @click="recuperationId">GOOOOOOO</button> -->
      <el-table :data="datas" border style="width: 100%" @row-click="goToCard">
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
            <i v-if="scope.row.favorite" class="el-icon-star-off"></i>
            <i v-else class="el-icon-star-on"></i>
          </template>
        </el-table-column>
        <el-table-column label="info">
          <template slot-scope="scope">
            <i class="el-icon-info"></i>
          </template>
        </el-table-column>
      </el-table>
      <button v-show="pagePreviousPath !== null" type="button" @click="goPreviousPage">précédent</button>
      <button type="button" @click="goNextPage">suivant</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      pokedexPath: 'https://pokeapi.co/api/v2/pokemon/',
      pageNextPath: null,
      pagePreviousPath: null,
      datas: '',
      id: '',
      favorite: true
    }
  },
  async fetch() {
    await this.getNextPokemons()
    this.recuperationId()
  },
  // computed: {
  //   tableData(){
  //     return this.datas.map((pokemon, i)=>{
  //       return {...pokemon, id: i+1}
  //     })
  //   },
  // },
  methods: {
    async getNextPokemons() {
      const {results, next, previous} = await this.$axios.$get(this.pokedexPath)
      this.datas = results
      this.pageNextPath = next
      this.pagePreviousPath = previous
      console.log(this.datas)
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
    goToCard(row) {
      const pokemonName = row.name;
      this.$router.push(`/pokemon/${pokemonName}`)
    }
  },
}
</script>