/* globals Vue */
const renderError = new Vue({
  txmOptions: {
    a: 2,
    b: 3
  },
  mounted() {
    console.info('#######render error options########', this.$options.txmOptions)
    console.info('#######render error options######## root: ', this.$root)
    console.info('#######render error options######## parent: ', this.$parent)
  },
  render(h) {
    // /* eslint-disable */
    // throw new Error('oops')
    // /* eslint-enable */
    return h('pre', { style: { color: 'red' } }, 'ppppppppp')
  },
  renderError(h, err) {
    return h('pre', { style: { color: 'red' } }, err.stack)
  }
})

export default renderError
