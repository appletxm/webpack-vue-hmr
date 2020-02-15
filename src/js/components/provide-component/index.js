import ChildA from './child-a'

export default {
  template: `
    <div>
      <h1>Provide test sub child {{provideVal.val}}</h1>
      <p>{{mm}}</p>
      <child-a>
        <div slot="top">provide top</div>
        <span>provide content</span>
        <div slot="foot">provide foot</div>
      </child-a>
    </div>
  `,
  name: 'ProvideParentComponent',
  componentName: 'ProvideParentComponent',
  data() {
    return {
      mm: 'extend data 8888'
    }
  },

  inject: [
    'provideVal'
  ],

  components: {
    ChildA
  },

  methods: {
    handleClick() {
      console.info('*******extends click')
    }
  },
  created() {
    console.info('====extend create=======')
  }
}
