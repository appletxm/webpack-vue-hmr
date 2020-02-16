export default {
  data() {
    return {
      message: 'hellow world',
      $txm: '666',
      _txm: 'tttt'
    }
  },
  computed: {},

  watch: {},

  created() {},

  mounted() {},

  methods: {
    clickHandler() {
      console.info('=========render component click=========')
    },
    nativeOn() {
      console.info('=========render component nativeOn=========')
    }
  },

  render(h) {
    console.info('#####render component c#####')
    return h('div', {
      // 与 `v-bind:class` 的 API 相同，
      // 接受一个字符串、对象或字符串和对象组成的数组
      class: {
        foo: true,
        bar: false
      },
      // 与 `v-bind:style` 的 API 相同，
      // 接受一个字符串、对象，或对象组成的数组
      style: {
        color: 'red',
        fontSize: '14px'
      },
      // 普通的 HTML attribute
      attrs: {
        id: 'foo'
      },
      // 组件 prop
      props: {
        myProp: 'bar'
      },
      // DOM 属性
      domProps: {
        innerHTML: 'baz'
      },
      on: {
        click: this.clickHandler
      },
      nativeOn: {
        click: this.nativeClickHandler
      },
      directives: [
        {
          name: 'my-custom-directive',
          value: '2',
          expression: '1 + 1',
          arg: 'foo',
          modifiers: {
            bar: true
          }
        }
      ],
      scopedSlots: {
        default: (props) => h('span', props.text)
      },
      // slot: 'name-of-slot',
      key: 'myKey',
      ref: 'myRef',
      refInFor: true
    })
  }
}
