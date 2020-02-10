export default {
  bind: function (...args) {
    console.info('bind', args[1]['arg'])
  },
  inserted: function (...args) {
    console.info('inserted', args)
    args[0].focus()
  },
  update: function (...args) {
    console.info('update', args)
  },
  componentUpdated: function (...args) {
    console.info('componentUpdated', args)
    args[0].value = args[1]['arg']
  },
  unbind: function (...args) {
    console.info('unbind', args)
  }
}
