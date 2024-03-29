<template>
  <div>
    <NuxtLink to="/">Home page</NuxtLink>
    <h1>{{ type.name }}</h1>

    <el-tabs v-model="activeName">
      <el-tab-pane label="Take 2x" name="first">
        <li v-for=" ddf in type.damage_relations.double_damage_from">take double damage from : {{ ddf.name }}
        </li>
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
    <el-table :data="tableDatas" style="width: 100%" @row-dblclick="goToCard">
      <el-table-column prop="id" label="id" width="180">
      </el-table-column>
      <el-table-column prop="pokemon.name" label="name" width="180">
      </el-table-column>
      <el-table-column label="photo">
        <template slot-scope="scope">
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${scope.row.id}.png`"
            :alt="scope.row.name" />
        </template>
      </el-table-column>
      <el-table-column label="info">
        <template slot-scope="{row}">
          <nuxt-link :to="`../pokemon/${row.pokemon.name}`">Voir<i class="el-icon-view el-icon--right"></i></nuxt-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import ListType from './compoenents/list/ListType.vue'
// import ListType from '@/list/ListType.vue'
export default{
  data() {
    return {
      activeName: 'first',
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
      id: ''
    }
  },
  props: {
    type: {
      required: true
    },
  },
  computed: {
    tableDatas() {
      return this.type.pokemon.map(d => {
        const hey = d.pokemon.url
        // console.log(hey)
        
          const id= hey.split('/').slice(-2, -1)[0]
          // console.log('Extracted ID:', id)
          const newDatas = {
          ...d,
          id: id
          // id: hey.substring(hey.length - 4).replace(/['n/]/g, ''),
          // isFav: this.isPokemonFavorite(d.name)
        }
        // console.log('New data with ID:', newDatas)
        return newDatas
      })
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
      console.log({type})
    },
    goToCard(data) {
      const pokemonName = data.pokemon.name;
      this.$router.push(`/pokemon/${pokemonName}`)
      console.log('goToCard :', data.pokemon.name)
    },
  },
  // components: ListType
}
</script>