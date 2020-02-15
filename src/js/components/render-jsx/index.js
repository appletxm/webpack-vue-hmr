import ChildA from '../provide-component/child-a'

export default {
  props: {
  },
  data() {
    return {
      name: 555
    }
  },
  components: {
    ChildA
  },
  methods: {
    handleClick() {
      this.$emit('my-click')
    }
  },
  render() {
    console.info('********render jsx****** attrs ', this.$attrs)
    console.info('********render jsx****** slots ', this.$slots)
    console.info('********render jsx****** listeners ', this.$listeners)
    return (<div>
      <h1>render jsx</h1>
      test content {this.name}
      <button on-click={this.handleClick}>click event</button>
      {this.$slots.header}
      <child-a v-bind="$attrs" v-on="$listeners"></child-a>
    </div>)
  }
}
