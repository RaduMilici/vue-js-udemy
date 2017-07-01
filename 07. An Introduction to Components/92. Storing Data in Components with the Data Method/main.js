/**
 * Created by radu on 01.07.2017.
 */

const data = { status: 'critical '};

Vue.component('status', {
    data() {
        //return data; // returning this will change the status on all instances of the component
        return { status: 'critical '}; // but this will only change the one instance it belongs to
    },
    template: '<p>server status: {{ status }} (<button @click="changeStatus">change</button>)</p>',
    methods: {
        changeStatus() {
            this.status = 'normal';
        }
    }
});

const vm1 = new Vue({
    el: '#app1'
});