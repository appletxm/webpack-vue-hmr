export default {
  render: function (createElement) {
    const { header } = this.$slots
    const body = this.$slots.default
    const { footer } = this.$slots
    return createElement('div', [
      createElement('header', header),
      createElement('main', body),
      createElement('footer', footer)
    ])
  }
}
