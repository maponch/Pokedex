//state
export const state = () => ({
  pokemons: []
})

//getters
export const getters = {

}

//actions
export const actions = {
  ADD_POKEMON_FAV(){
    const pokemons = this.name
    commit ('PUSH_LIST', pokemons)
    return pokemons
  }
}

//mutations
export const mutations = {
  PUSH_LIST(state, pokemons){
    state.pokemons.push({...pokemons})
  }
}