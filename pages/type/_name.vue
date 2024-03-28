<template>
  <div>
    hello
    <TypeDetails :type="type"></TypeDetails>
  </div>
</template>
<script>
import TypeDetails from '@/components/TypeDetails.vue'
export default {
  
  data(){
    return {
      type: []
    }
  },
  async asyncData({route:{params:{name}}}){
    console.log(name)
    const apiUrl = `https://pokeapi.co/api/v2/type/${name}`
    console.log('test: ', apiUrl)
    const typeData = await fetch(apiUrl)
    const type = await typeData.json()

    return { type }
  },
  
  components: {
    TypeDetails
  }
}
</script>