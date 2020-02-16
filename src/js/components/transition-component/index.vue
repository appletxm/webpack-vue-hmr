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

<style>
.fade-enter-active {
  color: red;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}

.fade-enter {
  color: green;
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
