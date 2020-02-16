<template>
  <div id="demo">
    <button @click="show = !show">
      Toggle
    </button>
    <!-- <transition name="bounce">
      <p
        v-if="show"
        class="test-p"
      >
        hello
      </p>
    </transition> -->

    <transition name="bounce">
      <p v-if="show">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero,
        at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  el: '#demo',
  data: function () {
    return {
      show: true
    };
  }
}
</script>
