<template>
  <div
    :class="[$store.state.appPrefix + '-c-custom-slot']"
  >
    <slot
      name="header"
      :scope-object="object"
    >
      <h1>No header</h1>
    </slot>

    <slot>
      <p>A123.</p>
      <p>A5555.</p>
    </slot>

    <slot
      name="footer"
      :footer="{name: 1234567}"
    >
      <p>not foot</p>
    </slot>
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
    return {}
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
