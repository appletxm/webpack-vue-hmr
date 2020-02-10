<template>
  <div :class="[$store.state.appPrefix + '-c-custom-model']">
    <!-- <span
      contenteditable="true"
      @input="handleInput"
    >{{ text }}</span> -->
    <input
      v-model="text"
      @input="handleInput"
    />
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
