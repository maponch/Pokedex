<template>
  <div>
    <span v-if="$fetchState.pending">Loading...</span>
    <div v-else>
      <div v-for="pokemon in pokemons" :key="pokemon.name">{{ pokemon }}</div>
      <!-- <button type="button" @click="recuperationId">GOOOOOOO</button> -->
      <el-table :data="tableDatas" border style="width: 100%" @row-dblclick="goToCard">
        <el-table-column prop="id" label="index" />
        <el-table-column label="photo">
          <template slot-scope="scope">
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${scope.row.id}.png`"
              :alt="scope.row.name" />
          </template>
        </el-table-column>
        <el-table-column prop="name" label="Nom">
        </el-table-column>
        <el-table-column label="favoris" columun-key="favoris" :filters="[{ text: 'favori', value: true }]"
          :filter-method="filterTag">
          <template slot-scope="scope">
            <el-tag :type="scope.row.tag === 'Home' ? 'primary' : 'success'" disable-transitions>{{ scope.row.tag
              }}</el-tag>
          </template>
          <template slot-scope="scope">
            <i :class="{ 'el-icon-star-off': !isPokemonFavorite(scope.row.name), 'el-icon-star-on': isPokemonFavorite(scope.row.name) }"
              @click="toogleFavori(scope.row.name)"></i>
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
      isFav: false
    }
  },
  async fetch() {
    await this.getNextPokemons()
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'PUSH_LIST' || mutation.type === 'REMOVE_LIST') {
        this.$fetch();
      }
    });
  },
  computed: {
    ...mapGetters(['pokemons']),
    filteredPokemons() {
      return this.datas.filter(pokemon => this.isPokemonFavorite(pokemon.name));
    },
    tableDatas(){
      return this.datas.map(d => {
        const hey = d.url
        return {
          ...d,
          id: hey.substring(hey.length - 4).replace(/['n/]/g, ''),
          isFav: this.isPokemonFavorite(d.name)
        }
      })
    }
},

  methods: {
    ...mapActions({
      addPokemonFavoriStore :'ADD_POKEMON_FAV',
      removePokemonFavoriStore : 'DELETE_POKEMON_FAV',
      toogleFavori : 'listFavAjout'
    }),
    // addPokemonFavori(data){
    //   this.favori.push(data)
    //   this.addPokemonFavoriStore(data)
    // },
    // removePokemonFavori(data){
    //   this.removePokemonFavoriStore(data)
    //   const imagine =this.favori.filter((f)=> f !== data)
    //   console.log('remove', imagine)
    // },
    async getNextPokemons() {
      const {results, next, previous} = await this.$axios.$get(this.pokedexPath)
      this.datas = results
      this.pageNextPath = next
      this.pagePreviousPath = previous
      // console.log(this.datas)
    },
    isPokemonFavorite(pokemon) {
      return this.pokemons.includes(pokemon);
    },
    filterTag(value, row) {
      console.log({row})
      return row.isFav === value;
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