<template>
  <label>
    {{ label }}
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
      v-on="inputListeners"
    />
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'please check: '
    }
  },
  computed: {
    inputListeners() {
      const vm = this
      return {
        ...vm.$listeners,
        // focus: function (event) {
        //   console.info('@@@@@@@@', event, vm)
        //   // vm.handleFocus(event)
        // }
      }
    }
  },
  mehtods: {
    handleFocus(e) {
      console.info('@@@@@@@@@', e)
    }
  },
  created() {
    // console.info('@@@@@@@@@@@@@@@@@@', this.$listeners)
  },
  mounted() {
    // this.$el.querySelector('input').focus()
  }
}
</script>
