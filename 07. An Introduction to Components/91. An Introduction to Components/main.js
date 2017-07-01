/**
 * Created by radu on 01.07.2017.
 */

Vue.component('status', {
    data() {
        return {
            status: 'critical'
        };
    },
    template: '<p>server status: {{ status }}</p>'
});

const vm1 = new Vue({
    el: '#app'
});
