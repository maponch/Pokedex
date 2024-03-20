<template>
<div>
  <span v-if="$fetchState.pending">Loading...</span>
  <div v-else>
    <ul>
      <li v-for="data in datas">
        <NuxtLink :to="`/pokemon/${data.name}`" >
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="Date"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Nom"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="Adresse">
            </el-table-column>
          </el-table>
          {{ data.name }}
        </NuxtLink>
      </li>
    </ul>
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
    }
  },
  async fetch() {
    await this.getNextPokemons()
    console.log(this.datas)
  },
  methods: {
    async getNextPokemons() {
      const {results, next, previous} = await this.$axios.$get(this.pokedexPath)
      this.datas = results
      this.pageNextPath = next
      this.pagePreviousPath = previous
      
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
    goToCard(data) {
      //console.log(data)
    }
  },
}
</script>