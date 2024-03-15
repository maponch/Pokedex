<template>
<p v-if="ip">Votre adresse IP est : {{ ip }}</p>

</template>
<script>

export default {
  data(){
    return{
      ip: null
    }
  },
  methods: {
    async fetchSomething() {
      try{
          const ip = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon/ditto')
          this.ip = ip
      }catch (error){
        console.error(error)
      }
}
</script>