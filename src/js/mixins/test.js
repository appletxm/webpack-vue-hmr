export default {
  data() {
    return {
      mm: 'mixins data 99999'
    }
  },
  methods: {
    handleClick() {
      console.info('*******mixins click')
    }
  },
  created() {
    console.info('====mixins create=======')
  }
}
