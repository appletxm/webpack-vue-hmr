
import state from './state'
// console.info('observer-component: ', state)

const Demo = {
  computed: {
    total() {
      // console.info('computed:', vm, this)
      return state.b + state.c
    }
  },
  render(h) {
    return h('button', {
      on: {
        click: () => {
          state.count = state.count + 1
          state.b = 2
        }
      }
    }, `count is: ${state.count} and total is: ${this.total}`)
  }
}

export default Demo
