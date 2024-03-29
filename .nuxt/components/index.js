export { default as FirstPokemonFromType } from '../..\\components\\FirstPokemonFromType.vue'
export { default as PokemonCard } from '../..\\components\\PokemonCard.vue'
export { default as PokemonList } from '../..\\components\\PokemonList.vue'
export { default as SearchBar } from '../..\\components\\SearchBar.vue'
export { default as TypeDetails } from '../..\\components\\TypeDetails.vue'
export { default as TypePokemon } from '../..\\components\\TypePokemon.vue'
export { default as ListType } from '../..\\components\\list\\ListType.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
