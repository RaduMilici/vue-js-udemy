/**
 * Created by radu on 25.06.2017.
 */
new Vue({
    el: '#app',
    data: {
        counter: 0
    },
    methods: {
        increase: function () {
            this.counter++;
        }
    }
});