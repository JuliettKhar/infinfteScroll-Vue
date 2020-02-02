<template>
  <main>
    <div class="container">
      <Home />
    </div>
  </main>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Home from './components/Home.vue';

@Component({
    components: {
        Home
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import './scss/main.scss'; 
</style>
