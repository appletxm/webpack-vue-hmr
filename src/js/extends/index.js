export default {
  data() {
    return {
      mm: 'extend data 8888'
    }
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
