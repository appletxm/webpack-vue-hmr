/* globals Vue */

const Comp = Vue.extend({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  template: '<div>{{ msg }}</div>'
})

const vm = new Comp({
  propsData: {
    msg: 'hello props data'
  }
})

export default vm
