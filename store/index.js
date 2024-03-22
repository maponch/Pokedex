//state
export const state = () => ({
  pokemons: []
})

//getters
export const getters = {
  pokemons: state => state.pokemons
}

//actions
export const actions = {
  ADD_POKEMON_FAV(context, pokemons){
    context.commit('PUSH_LIST', pokemons)
    console.log('store : ',pokemons)
    return pokemons
  }
}

//mutations
export const mutations = {
  PUSH_LIST(state, pokemons){
    const newNotes = [...state.pokemons, {
      pokemons: pokemons
    }]
    localStorage.setItem('notes', JSON.stringify(newNotes))
    state.pokemons = newNotes
  }
}