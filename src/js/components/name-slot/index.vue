<template>
  <div>
    <slot
      name="header"
      :extra="extra"
    ></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  components: {},
  model: {
    prop: 'text',
    event: 'input'
  },
  props: {
    text: {
      type: [String, Number],
      default: ''
    },
    object: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      extra: {
        header: '12345678'
      }
    }
  },
  computed: {},

  watch: {},

  created() {},

  mounted() {
  },

  methods: {
    handleInput(event) {
      event.stopPropagation()
      this.$emit('input', event.target.value)
    }
  }
}
</script>
