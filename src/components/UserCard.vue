<template>
  <div class="card-wrapper">
    <div
      v-for="user in users"
      :key="user.id.value"
      class="card"
    >
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-8x8">
              <img
                :src="user.picture.thumbnail"
                alt="Placeholder image"
              >
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">
              {{ user.name.first }}
              {{ user.name.last }}
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

<script>
import Observer from './Observer.vue';

export default {
    components: {
        Observer
    },
    data () {
        return {
            page: 1,
            perPage: 20,
            users: []
        };
    },
    methods: {
        async intersected () {  
            const response = await fetch(`https://randomuser.me/api/?page=${ this.page }&results=${ this.perPage }`)
                .then( response => response.json())
                .then( response => {
                    const users = [];
                    response.results.forEach( user => users.push(user));
                    this.page +=1;
                    this.users = [ ...this.users, ...users ];
                });
        }
    }
};
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