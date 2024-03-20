<template>
  <div style="margin-top: 15px;">
    <el-input placeholder="Entrez quelque chose" v-model="input3" class="input-with-select">
      <el-select v-model="select" slot="prepend" placeholder="Choisir">
        <el-option label="Restaurant" value="1"></el-option>
        <el-option label="Num. Commande" value="2"></el-option>
        <el-option label="Tel" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>
<script>
export default {

}
</script>
