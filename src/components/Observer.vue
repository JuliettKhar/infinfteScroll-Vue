<template>
  <div class="observer" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({
    props: {
        options: {
            type: Object,
            default: null
        }
    }
})
export default class Observer extends Vue {
    @Prop() options: any;
    observer: any;

    constructor () {
        super();
        this.observer = null;
    }

    mounted () {
        const options = this.options || {};
        this.observer = new IntersectionObserver( ([ entry ]) => {
            if (entry && entry.isIntersecting) {
                this.$emit('intersect');
            }
        }, this.options),
        this.observer.observe(this.$el);
    }
    
    destroyed () {
        this.observer.disconnect();
    }
}
</script>