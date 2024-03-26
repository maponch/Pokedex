//state
console.log('heyyy')
export const state = () => ({
  pokemons: JSON.parse(localStorage.getItem('pokemons')) || []
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
  },
  DELETE_POKEMON_FAV(state, pokemon){
    state.commit('REMOVE_LIST', pokemon)
    
  }
}

//mutations
export const mutations = {
  PUSH_LIST(state, pokemons){
    const newPokemons = [...state.pokemons, {
      pokemons: pokemons
    }]
    localStorage.setItem('pokemons', JSON.stringify(newPokemons))
    state.pokemons = newPokemons
  },
  REMOVE_LIST(state, pokemon){
    const arr = [...state.pokemons]
    const filtreArr = arr.filter((a) => a.pokemons !== pokemon )
    
    localStorage.setItem('pokemons', JSON.stringify(filtreArr))
    state.pokemons = filtreArr
  }
}