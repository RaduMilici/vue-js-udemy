/**
 * Created by radu on 01.07.2017.
 */

const vm1 = new Vue({
    el: '#app1',
    data:{
        title: 'hello world',
        docsLink: 'https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks'
    },
    methods: {
      destroy() {
          this.$destroy();
      }
    },
    beforeCreate() {
        console.log('before create');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('before mount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('before update');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('before destroy');
    },
    destroyed() {
        console.log('destroyed');
    }
});