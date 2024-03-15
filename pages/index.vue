<template>
<div>
  <p> {{ data }}</p>
</div>
</template>
<script>
export default {
  data () {
    return {
      data: '',
    }
  },
  async fetch() {
    const res = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    this.data = res.data
  },
}
</script>