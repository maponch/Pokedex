<template>
  <div>
    <el-table :data="allTypes.results" style="width: 100%" @row-click="goToType">
      <el-table-column prop="name" label="Types" >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default{
  async fetch(){
    this.allTypes = await this.$axios.$get("https://pokeapi.co/api/v2/type")  
  },
  data(){
    return{
      allTypes: []
    }
  },
  methods:{
    goToType(data){
      const typeName = data.name
      this.$router.push(`/type/${typeName}`)
      console.log('tp : ',typeName)
    },
}
}
</script>