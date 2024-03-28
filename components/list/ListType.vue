<template>
  <div>
    <div class="text item">
      <template>
        <el-tabs>
          <el-tab-pane label="Take 2x" name="first">
            <li v-for=" ddf in type.damage_relations.double_damage_from">take double damage from : {{ ddf.name }}
            </li>
            <li v-for=" ddfUrl in type.damage_relations.double_damage_from">{{ ddfUrl.url }}</li>
          </el-tab-pane>
          <el-tab-pane label="Give 2x" name="second">
            <li v-for=" ddt in type.damage_relations.double_damage_to">take double dammage to : {{ ddt.name }}</li>
          </el-tab-pane>
          <el-tab-pane label="1/2 from" name="third">
            <li v-for=" hdf in type.damage_relations.half_damage_from">half damage from : {{ hdf.name }}</li>
          </el-tab-pane>
          <el-tab-pane label="1/2 to" name="fourth">
            <li v-for=" hdt in type.damage_relations.half_damage_to">half damage to : {{ hdt.name }}</li>
          </el-tab-pane>
          <el-tab-pane label="0 from" name="fifth">
            <li v-for=" ndf in type.damage_relations.no_damage_from">no dammage from : {{ ndf.name }}</li>
          </el-tab-pane>
          <el-tab-pane label="0 to" name="sixth">
            <li v-for=" ndt in type.damage_relations.no_damage_to">No damage to : {{ ndt.name }}</li>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return {
      type: {
        damage_relations: {
          double_damage_from: [],
          double_damage_to: [],
          half_damage_from: [],
          half_damage_to: [],
          no_damage_from: [],
          no_damage_to: []
        }
      },
    }
  }
}</script>