export default {
  template: `
    <div>
      sub - sub child {{txm.val}}
      <slot name="top"></slot>
      <slot></slot>
      <slot name="foot"></slot>
    </div>
  `,
  data() {
    return {}
  },
  inject: {
    txm: {
      from: 'provideVal',
      default: 'provideVal'
    }
  },
  methods: {
  },
  created() {
    console.info('****provide sub sub*****', this.txm)
    console.info('****provide sub sub***** options: ', this.$options)
    console.info('****provide sub sub***** root: ', this.$root)
    console.info('****provide sub sub***** parent: ', this.$parent)
    console.info('****provide sub sub***** slots: ', this.$slots)
    console.info('****provide sub sub***** attrs: ', this.$attrs)
    console.info('****provide sub sub***** listeners: ', this.$listeners)
  }
}
