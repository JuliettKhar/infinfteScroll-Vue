<template>
  <div class="card-wrapper">
    <div
      v-for="user in users"
      :key="user.id"
      class="card"
    >
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-8x8">
              <img
                :src="user.photo"
                alt="Placeholder image"
              >
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              {{ user.firstName }}
              {{ user.lastName }}
            </p>
            <p class="subtitle is-6">
              {{ user.email }}
            </p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta labore iure odio, architecto reiciendis, eligendi eius amet aspernatur rerum cupiditate, sapiente voluptatibus voluptate? Libero voluptatum quae officiis illo quasi animi?
        </div>
      </div>
    </div>
    <Observer @intersect="intersected" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Observer from './Observer.vue';
import { User } from '../types/user';
import { userService } from '../services/userService';

@Component({
    components: {
        Observer
    }
})
export default class UserCard extends Vue {
  page: number;
  users: User[];

  constructor () {
      super();
      this.page = 1;
      this.users = [];
  }

  async intersected () {  
      const response = await userService.getUsers(this.page)
          .then( response => response.json())
          .then( response => {
              const users =  response.results.map( (user:any) => new User(user));
              this.page += 1;
              this.users.push(...users);
          });
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin-bottom: 20px;
    max-width: 30%;

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 30px 0 30px;
    }
  }
</style>