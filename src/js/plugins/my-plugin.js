const MyPlugin = {}
MyPlugin.install = function (Vue, options) {
  Vue.myGlobalMethod = function () {
    console.info('===myGlobalMethod=====', options)
  }

  Vue.directive('my-directive', {
    bind(el) {
      console.info('##### from my-plugin created function ', el)
    }
  })

  Vue.mixin({
    created() {
      // console.info('*****from my-plugin created function', this.$listeners)
    }
  })

  Vue.prototype.$pluginMethod = function (...args) {
    console.info('===myGlobalMethod===== $pluginMethod', args)
  }
}
export default MyPlugin
