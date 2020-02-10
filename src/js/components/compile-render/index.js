/* globals Vue */
const res = Vue.compile(`
<div class="c-compile-render">
  <p>{{msg}} my compile render component</p>
</div>
`)

console.info('@@@@ compile-render:', res)

const compileRender = new Vue({
  data: {
    msg: 'hello'
  },
  render: res.render,
  staticRenderFns: res.staticRenderFns
})

export default compileRender
