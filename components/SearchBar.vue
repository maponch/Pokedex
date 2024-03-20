<template>
  <div style="margin-top: 15px;">
    <el-input placeholder="Trouve ton bonheur... Bulbizar attaque fouet" v-model="searchBarInput" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click="searchInput(searchBarInput)"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {
  data(){
    return {
      searchBarInput: '',
      searching: '',
      select: '',
      generationsPath: 'https://pokeapi.co/api/v2/generation/',
      colorPath: 'https://pokeapi.co/api/v2/pokemon-color/',
      typesPath: 'https://pokeapi.co/api/v2/type/'
    }
  },
  methods: {
  searchInput() {
    this.searching = this.searchBarInput;
    console.log('h2 : ', this.searching);

    if (this.searching.trim() === '') {
      return
    }
    this.$router.push(`/pokemon/${this.searching}`)
    // if (this.searching === NotFound()) {
    //   this.$router.push(`/pokemon/${this.searching}`)
    //   return

    console.log('h3 : ', NotFound());
  
}
}}
</script>
