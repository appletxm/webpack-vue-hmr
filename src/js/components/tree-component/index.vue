<template>
  <ul>
    <li
      v-for="node in tree"
      :key="node.id"
    >
      <span>{{ node.name }}</span>
      <tree-folder
        v-if="node.children && node.children.length > 0"
        :tree="node"
      />
    </li>
  </ul>
</template>

<script>
export default {
  components: {
    TreeFolder: () => import('./index.vue')
  },
  props: {
    tree: {
      type: Array,
      default() {
        return [{}]
      }
    }
  },
  data() {
    return {}
  },
  computed: {},

  watch: {
    'tree'(val) {
      console.info('==========tree=======', val)
    }
  },

  created() {},

  mounted() {
  },

  methods: {
  }
}
</script>
