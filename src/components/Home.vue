<template>
  <UserCard />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import UserCard from './UserCard.vue';

@Component({
    components: {
        UserCard
    }
})

export default class Home extends Vue {}
</script>