export default {
  props: {
    tree: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      nodes: []
    }
  },
  components: {},
  methods: {
    getTree(children) {
      return children.map((node) => {
        if (node.children && node.children.length > 0) {
          return (<li>
            <span>{node.name}</span>
            <ul>{this.getTree(node.children)}</ul>
          </li>)
        } else {
          return (<li><span>{node.name}</span></li>)
        }
      })
    }
  },
  render() {
    this.nodes = []

    return (
      <div class="tree-test">
        <h1>tree test</h1>
        <ul class="tree"> { this.getTree(this.tree) }</ul>
      </div>
    )
  }
}
