export default {
  components: {},
  props: {
    columns: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      message: 'hellow world',
      $txm: '666',
      _txm: 'tttt'
    }
  },
  computed: {},

  watch: {},

  created() {
    console.info('render-component created:', this)
  },

  mounted() {
    console.info('render-component mounted:', this)
  },

  methods: {},

  render(h) {
    console.info('#####render component#####', this.$slots, this.$attrs, this.$scopeSlots)
    return h('div', [
      h('h1', 'render component'),
      this.$slots.top,
      this.$slots.default,
      this.$slots.foot
    ])
  }
}
