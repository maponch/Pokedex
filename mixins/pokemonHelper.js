export default{
  methods:{
    getPokemonImageFromUrl(url){
      const id = url.split('/').slice(-2, -1)[0]
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    }
  }
}