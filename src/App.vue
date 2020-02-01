<template>
  <main>
    <div class="container">
      <Home />
    </div>
  </main>
</template>
<script>
import Home from './components/Home.vue';

export default {
    components: {
        Home
    }
};
</script>

<style lang="scss">
  @import './scss/main.scss'; 
</style>
